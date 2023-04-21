import http from "./axios";

class equipesService {
  getEquipesByCampeonato(id: string) {
    return http.get(`/equipes/campeonato/${id}`);
  }
}

// eslint-disable-next-line
export default new equipesService();
