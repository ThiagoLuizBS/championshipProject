import http from "./axios";

class partidasService {
  getRodadasCampeonato(id: string) {
    return http.get(`/campeonato/${id}/rodadas`);
  }

  updatePartida(id: string, placarCasa: string, placarFora: string) {
    return http.get(`/partida/${id}/atualizar/${placarCasa}/${placarFora}`);
  }

  inverterPartida(id: string) {
    return http.get(`/partida/${id}/inverter`);
  }

  resetarPartida(id: string) {
    return http.get(`/partida/${id}/resetar`);
  }
}

// eslint-disable-next-line
export default new partidasService();
