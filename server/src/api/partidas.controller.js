import partidasDAO from "../dao/partidasDAO.js";

export default class partidasController {
  static async apiGetPartidaById(req, res) {
    try {
      let id = req.params.id;
      let equipe = await equipesDAO.getPartidaById(id);
      if (!equipe) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.json(equipe);
      return;
    } catch (e) {
      console.log(`apiGetPartidaById, ${e}`);
      res.status(500).json({ error: e });
      return;
    }
  }

  static async apiUpdatePartida(req, res) {
    try {
      let id = req.params.id;
      let date = req.params.date;
      let placarCasa = req.params.placarCasa;
      let placarFora = req.params.placarFora;

      const response = await equipesDAO.updatePartida(
        id,
        date,
        placarCasa,
        placarFora
      );

      var { error } = response;
      if (error) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.json(response);
      return;
    } catch (error) {
      console.log(`apiUpdatePartida, ${e}`);
      res.status(500).json({ error: e });
      return;
    }
  }
}
