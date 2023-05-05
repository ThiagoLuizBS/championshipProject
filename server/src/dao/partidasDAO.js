import mongodb from "mongodb";

const ObjectId = mongodb.ObjectId;
let partidas;

export default class partidasDAO {
  static async injectDB(conn) {
    if (partidas) {
      return;
    }
    try {
      partidas = await conn
        .db(process.env.RESTREVIEWS_NS)
        .collection("partidas");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in partidasDAO: ${e}`
      );
    }
  }

  static async getPartidaById(id) {
    try {
      const pipeline = [
        {
          $match: { idPartida: id },
        },
      ];
      return await partidas.aggregate(pipeline).toArray();
    } catch (e) {
      console.error(`Something went wrong in getPartidaById: ${e}`);
      throw e;
    }
  }

  static async getRodadasByCampeonatoId(id) {
    try {
      const pipeline = [
        {
          $match: { idCampeonato: id },
        },
        {
          $group: {
            _id: "$rodada",
            rodada: {
              $addToSet: {
                idPartida: "$idPartida",
                idCampeonato: "$idCampeonato",
                data: "$data",
                casa: "$casa",
                fora: "$fora",
                placarCasa: "$placarCasa",
                placarFora: "$placarFora",
              },
            },
          },
        },
        { $unwind: "$rodada" },
        { $sort: { "rodada.idPartida": 1 } },
        {
          $group: {
            _id: "$_id",
            rodada: {
              $push: "$rodada",
            },
          },
        },
        {
          $lookup: {
            from: "equipes",
            localField: "rodada.casa",
            foreignField: "id",
            as: "casa",
          },
        },
        {
          $lookup: {
            from: "equipes",
            localField: "rodada.fora",
            foreignField: "id",
            as: "fora",
          },
        },
        {
          $project: {
            rodada: {
              $map: {
                input: "$rodada",
                as: "rod",
                in: {
                  idPartida: "$$rod.idPartida",
                  idCampeonato: "$$rod.idCampeonato",
                  data: "$$rod.data",
                  placarCasa: "$$rod.placarCasa",
                  placarFora: "$$rod.placarFora",
                  casa: {
                    $arrayElemAt: [
                      {
                        $filter: {
                          input: "$casa",
                          as: "c",
                          cond: { $eq: ["$$c.id", "$$rod.casa"] },
                        },
                      },
                      0,
                    ],
                  },
                  fora: {
                    $arrayElemAt: [
                      {
                        $filter: {
                          input: "$fora",
                          as: "f",
                          cond: { $eq: ["$$f.id", "$$rod.fora"] },
                        },
                      },
                      0,
                    ],
                  },
                },
              },
            },
          },
        },
        {
          $sort: {
            _id: 1,
          },
        },
      ];
      return await partidas.aggregate(pipeline).toArray();
    } catch (e) {
      console.error(`Something went wrong in getPartidasByCampeonatoId: ${e}`);
      throw e;
    }
  }

  static async updatePartida(id, date, placarCasa, placarFora) {
    try {
      const updateResponse = await partidas.updateOne(
        { idPartida: id },
        {
          $set: {
            data: date,
            placarCasa: placarCasa,
            placarFora: placarFora,
          },
        }
      );

      return updateResponse;
    } catch (e) {
      console.error(`Unable to update partida: ${e}`);
      return { error: e };
    }
  }

  static async inverterPartida(id, casa, fora) {
    try {
      const updateResponse = await partidas.updateOne(
        { idPartida: id },
        {
          $set: {
            casa: fora,
            fora: casa,
          },
        }
      );

      return updateResponse;
    } catch (e) {
      console.error(`Unable to inverter partida: ${e}`);
      return { error: e };
    }
  }

  static async resetarPartida(id) {
    try {
      const updateResponse = await partidas.updateOne(
        { idPartida: id },
        {
          $set: {
            data: "",
            placarCasa: "",
            placarFora: "",
          },
        }
      );

      return updateResponse;
    } catch (e) {
      console.error(`Unable to resetar partida: ${e}`);
      return { error: e };
    }
  }

  static async createPartida(array) {
    try {
      const matchDoc = {
        idPartida: array.idPartida,
        idCampeonato: array.idCampeonato,
        rodada: array.rodada,
        tipo: array.tipo,
        data: array.data,
        casa: array.casa,
        fora: array.fora,
        placarCasa: array.placarCasa,
        placarFora: array.placarFora,
      };

      return await partidas.insertOne(matchDoc);
    } catch (e) {
      console.error(`Unable to create partida: ${e}`);
      return { error: e };
    }
  }

  static async getTimesContraTalId(id) {
    try {
      const pipeline = [
        {
          $match: { $or: [{ casa: id }, { fora: id }] },
        },
        {
          $project: {
            _id: 0,
            casa: 1,
            fora: 1,
          },
        },
      ];
      return await partidas.aggregate(pipeline).toArray();
    } catch (e) {
      console.error(`Something went wrong in apiGetTimesContraTalId: ${e}`);
      throw e;
    }
  }
}
