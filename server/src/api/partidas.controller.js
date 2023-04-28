import partidasDAO from "../dao/partidasDAO.js";
import campeonatosDAO from "../dao/campeonatosDAO.js";
import campeonatosController from "./campeonatos.controller.js";

export default class partidasController {
  static async apiGetPartidaById(req, res) {
    try {
      let id = req.params.id;
      let partida = await partidasDAO.getPartidaById(id);
      if (!partida) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.json(partida);
      return;
    } catch (e) {
      console.log(`apiGetPartidaById, ${e}`);
      res.status(500).json({ error: e });
      return;
    }
  }

  static async apiGetRodadasByCampeonatoId(req, res) {
    try {
      let id = req.params.id;
      let partidas = await partidasDAO.getRodadasByCampeonatoId(id);
      if (!partidas) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.json(partidas);
      return;
    } catch (e) {
      console.log(`apiGetPartidasByCampeonatoId, ${e}`);
      res.status(500).json({ error: e });
      return;
    }
  }

  static async apiUpdatePartida(req, res) {
    try {
      let id = req.params.id;
      let placarCasa = req.params.placarCasa;
      let placarFora = req.params.placarFora;
      let date = new Date();

      console.log(placarCasa + " " + placarFora);

      placarCasa = placarCasa.replace(",", ".");
      placarFora = placarFora.replace(",", ".");

      console.log(placarCasa + " " + placarFora);

      const response = await partidasDAO.updatePartida(
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
      const update = await campeonatosController.apiUpdateTabela(id);
      res.json(response);
      return;
    } catch (error) {
      console.log(`apiUpdatePartida, ${error}`);
      res.status(500).json({ error: error });
      return;
    }
  }

  static async apiInverterPartida(req, res) {
    try {
      let id = req.params.id;

      const partida = await partidasDAO.getPartidaById(id);
      const casa = partida[0].casa;
      const fora = partida[0].fora;
      const response = await partidasDAO.inverterPartida(id, casa, fora);

      var { error } = response;
      if (error) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      // const update = await campeonatosController.apiUpdateTabela(id);
      res.json(response);
      return;
    } catch (error) {
      console.log(`apiUpdatePartida, ${error}`);
      res.status(500).json({ error: error });
      return;
    }
  }

  static async apiResetarPartida(req, res) {
    try {
      let id = req.params.id;

      const response = await partidasDAO.resetarPartida(id);

      var { error } = response;
      if (error) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      const update = await campeonatosController.apiUpdateTabela(id);
      res.json(response);
      return;
    } catch (error) {
      console.log(`apiUpdatePartida, ${error}`);
      res.status(500).json({ error: error });
      return;
    }
  }

  // static async apiCreatePartida(array) {
  //   try {
  //     array.forEach(async (element) => {
  //       const response = await partidasDAO.createPartida(element);

  //       var { error } = response;
  //       if (error) {
  //         return error;
  //       }
  //     });

  //     return { success: "success" };
  //   } catch (error) {
  //     return error;
  //   }
  // }
}
