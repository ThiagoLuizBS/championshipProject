import http from "./axios";

class CampeonatosService {
  getCampeonatoTabela(id: string) {
    return http.get(`/campeonato/${id}`);
  }
}

// eslint-disable-next-line
export default new CampeonatosService();
