import mongodb from "mongodb";

const ObjectId = mongodb.ObjectId;
let equipes;

export default class equipesDAO {
  static async injectDB(conn) {
    if (equipes) {
      return;
    }
    try {
      equipes = await conn.db(process.env.RESTREVIEWS_NS).collection("equipes");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in equipesDAO: ${e}`
      );
    }
  }

  static async getEquipeById(id) {
    try {
      const pipeline = [
        {
          $match: { id: id },
        },
      ];
      return await equipes.aggregate(pipeline).toArray();
    } catch (e) {
      console.error(`Something went wrong in getEquipeById: ${e}`);
      throw e;
    }
  }

  static async getEquipeByCampeonatoId(id) {
    try {
      const pipeline = [
        {
          $match: { idCampeonato: id },
        },
      ];
      return await equipes.aggregate(pipeline).toArray();
    } catch (e) {
      console.error(`Something went wrong in getEquipeByCampeonatoId: ${e}`);
      throw e;
    }
  }

  static async updateEquipe(id, dados) {
    try {
      const updateResponse = await equipes.updateOne(
        { id: id },
        {
          $set: {
            logo: dados.logo,
            nome: dados.nome,
            treinador: dados.treinador,
            urlCartola: dados.urlCartola,
          },
        }
      );

      return updateResponse;
    } catch (e) {
      console.error(`Unable to update equipe: ${e}`);
      return { error: e };
    }
  }
}
