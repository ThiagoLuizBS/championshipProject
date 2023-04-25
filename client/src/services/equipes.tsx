import http from "./axios";

class equipesService {
  getEquipe(id: string) {
    return http.get(`/equipes/campeonato/${id}`);
  }

  getEquipesByCampeonato(id: string) {
    return http.get(`/equipes/campeonato/${id}`);
  }
}

// eslint-disable-next-line
export default new equipesService();
