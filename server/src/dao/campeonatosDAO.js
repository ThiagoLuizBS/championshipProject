import mongodb from "mongodb";

const ObjectId = mongodb.ObjectId;
let campeonatos;

export default class campeonatosDAO {
  static async injectDB(conn) {
    if (campeonatos) {
      return;
    }
    try {
      campeonatos = await conn
        .db(process.env.RESTREVIEWS_NS)
        .collection("campeonatos");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in campeonatosDAO: ${e}`
      );
    }
  }

  static async getCampeonatoTabelaById(id) {
    try {
      const pipeline = [
        {
          $match: { id: id },
        },
        { $unwind: "$tabela" },
        {
          $group: {
            _id: "$tabela.equipe",
            dados: {
              $addToSet: {
                equipe: "$tabela.equipe",
                posicao: "$tabela.posicao",
                pontos: "$tabela.pontos",
                partidas: "$tabela.partidas",
                vitorias: "$tabela.vitorias",
                empates: "$tabela.empates",
                derrotas: "$tabela.derrotas",
                gols_marcados: "$tabela.gols_marcados",
                gols_sofridos: "$tabela.gols_sofridos",
                saldo_de_gols: "$tabela.saldo_de_gols",
                aproveitamento: "$tabela.aproveitamento",
                forma: "$tabela.forma",
                clean_sheets: "$tabela.clean_sheets",
                sem_marcar: "$tabela.sem_marcar",
                media_feitos_jogo: "$tabela.media_feitos_jogo",
                media_sofridos_jogo: "$tabela.media_sofridos_jogo",
                pontuacao_cartola: "$tabela.pontuacao_cartola",
                media_pontuacao: "$tabela.media_pontuacao",
              },
            },
          },
        },
        {
          $lookup: {
            from: "equipes",
            localField: "_id",
            foreignField: "id",
            as: "_id",
          },
        },
        {
          $sort: {
            "dados.posicao": 1,
          },
        },
      ];
      return await campeonatos.aggregate(pipeline).toArray();
    } catch (e) {
      console.error(`Something went wrong in getCampeonatoTabelaById: ${e}`);
      throw e;
    }
  }

  static async getEquipesByCampeonatoId(id) {
    try {
      const pipeline = [
        {
          $match: {
            id: id,
          },
        },
        {
          $lookup: {
            from: "equipes",
            localField: "equipes",
            foreignField: "id",
            as: "equipes",
          },
        },
        {
          $project: {
            _id: 0,
            equipes: 1,
          },
        },
      ];
      return await campeonatos.aggregate(pipeline).toArray();
    } catch (e) {
      console.error(`Something went wrong in getEquipeByCampeonatoId: ${e}`);
      throw e;
    }
  }

  //   static async addChampionship(championship, id) {
  //     try {
  //       const championshipDoc = {
  //         idChampionship: id,
  //         url: championship.url,
  //         name: championship.name,
  //         img: championship.img,
  //         imgChampionship: championship.imgChampionship,
  //         priority: 1,
  //         table: championship.table,
  //         statistics: championship.statistics,
  //       };

  //       return await championships.insertOne(championshipDoc);
  //     } catch (e) {
  //       console.error(`Unable to post championship: ${e}`);
  //       return { error: e };
  //     }
  //   }

  static async updateCampeonato(id, tabela) {
    try {
      const updateResponse = await campeonatos.updateOne(
        { id: id },
        {
          $set: {
            tabela: tabela,
          },
        }
      );

      return updateResponse;
    } catch (e) {
      console.error(`Unable to update campeonato: ${e}`);
      return { error: e };
    }
  }
}
