import http from "./axios";

class CampeonatosService {
  getCampeonatoTabela(id: string) {
    return http.get(`/campeonato/${id}`);
  }

  getCampeonatoInfos(id: string) {
    return http.get(`/campeonato/${id}/infos`);
  }
}

// eslint-disable-next-line
export default new CampeonatosService();
