import express from "express";
import campeonatosCtrl from "./campeonatos.controller.js";
import partidasController from "./partidas.controller.js";
import equipesController from "./equipes.controller.js";

const router = express.Router();

router.route("/equipe/:id").get(equipesController.apiGetEquipeById);

router.route("/campeonato/:id").get(campeonatosCtrl.apiGetCampeonatoTabelaById);

router
  .route("/equipes/campeonato/:id")
  .get(campeonatosCtrl.apiGetEquipesByCampeonatoId);

router
  .route("/campeonato/:id/infos")
  .get(campeonatosCtrl.apiGetCampeonatoInfosById);

router
  .route("/campeonato/:id/rodadas")
  .get(partidasController.apiGetRodadasByCampeonatoId);

router.route("/partida/:id").get(partidasController.apiGetPartidaById);

router
  .route("/partida/:id/atualizar/:placarCasa/:placarFora")
  .get(partidasController.apiUpdatePartida);

router
  .route("/partida/:id/inverter")
  .get(partidasController.apiInverterPartida);

router.route("/partida/:id/resetar").get(partidasController.apiResetarPartida);

export default router;
