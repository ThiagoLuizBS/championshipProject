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
          $match: { id: id },
        },
      ];
      return await partidas.aggregate(pipeline).toArray();
    } catch (e) {
      console.error(`Something went wrong in getPartidaById: ${e}`);
      throw e;
    }
  }

  static async updatePartida(
    id,
    date,
    placarCasa,
    placarFora,
    placarCasaCartola,
    placarForaCartola
  ) {
    try {
      const updateResponse = await partidas.updateOne(
        { id: id },
        {
          $set: {
            data: date,
            placarCasa: placarCasa,
            placarFora: placarFora,
            placarCasaCartola: placarCasaCartola,
            placarForaCartola: placarForaCartola,
          },
        }
      );

      return updateResponse;
    } catch (e) {
      console.error(`Unable to update partida: ${e}`);
      return { error: e };
    }
  }
}
