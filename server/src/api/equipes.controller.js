import equipesDAO from "../dao/equipesDAO.js";

export default class equipesController {
  static async apiGetEquipeById(req, res) {
    try {
      let id = req.params.id;
      let equipe = await equipesDAO.getEquipeById(id);
      if (!equipe) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.json(equipe);
      return;
    } catch (e) {
      console.log(`apiGetEquipeById, ${e}`);
      res.status(500).json({ error: e });
      return;
    }
  }

  static async apiUpdateEquipe(req, res) {
    try {
      let id = req.params.id;
      let dados = req.params.dados;
      const response = await equipesDAO.updateEquipe(id, dados);
      var { error } = response;
      if (error) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.json(response);
      return;
    } catch (error) {
      console.log(`apiUpdateEquipe, ${e}`);
      res.status(500).json({ error: e });
      return;
    }
  }
}
