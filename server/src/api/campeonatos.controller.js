import campeonatosDAO from "../dao/campeonatosDAO.js";

export default class campeonatosController {
  static async apiUpdateCampeonato(id, tabela) {
    try {
      const response = await campeonatosDAO.updateCampeonato(id, tabela);
      var { error } = response;
      if (error) {
        return { error };
      }
      return { status: "success" };
    } catch (error) {
      return { errorapiPostChampionships: error.message };
    }
  }

  static async apiGetEquipesByCampeonatoId(req, res) {
    try {
      let id = req.params.id;
      let equipe = await campeonatosDAO.getEquipesByCampeonatoId(id);
      if (!equipe) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.json(equipe);
      return;
    } catch (e) {
      console.log(`apiGetEquipesByCampeonatoId, ${e}`);
      res.status(500).json({ error: e });
      return;
    }
  }

  static async apiGetCampeonatoTabelaById(req, res) {
    try {
      let id = req.params.id;
      let campeonato = await campeonatosDAO.getCampeonatoTabelaById(id);
      if (!campeonato) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.json(campeonato);
      return;
    } catch (e) {
      console.log(`apiGetCampeonatoTabelaById, ${e}`);
      res.status(500).json({ error: e });
      return;
    }
  }
}
