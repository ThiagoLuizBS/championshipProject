import campeonatosDAO from "../dao/campeonatosDAO.js";
import partidasDAO from "../dao/partidasDAO.js";

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

  static async apiGetCampeonatoInfosById(req, res) {
    try {
      let id = req.params.id;
      let campeonato = await campeonatosDAO.getCampeonatoInfosById(id);
      if (!campeonato) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.json(campeonato);
      return;
    } catch (e) {
      console.log(`apiGetCampeonatoInfosById, ${e}`);
      res.status(500).json({ error: e });
      return;
    }
  }

  static async apiUpdateTabela(id) {
    try {
      let campeonatoId = await partidasDAO.getPartidaById(id);
      let rodadas = await partidasDAO.getRodadasByCampeonatoId(
        campeonatoId[0].idCampeonato
      );
      let tabela = await campeonatosDAO.getCampeonatoTabelaById(
        campeonatoId[0].idCampeonato
      );

      let tabelaAux = [];

      if (campeonatoId[0].idCampeonato === "1") {
        tabela.forEach((equipe) => {
          let pontos = 0;
          let partidas = 0;
          let vitorias = 0;
          let empates = 0;
          let derrotas = 0;
          let gols_marcados = 0;
          let gols_sofridos = 0;
          let saldo_de_gols = 0;
          let aproveitamento = 0;
          let clean_sheets = 0;
          let sem_marcar = 0;
          let media_feitos_jogo = 0;
          let media_sofridos_jogo = 0;

          for (let x = 0; x < rodadas.length; x++) {
            for (let y = 0; y < rodadas[x].rodada.length; y++) {
              if (
                rodadas[x].rodada[y].casa.nome === equipe.equipe.nome &&
                rodadas[x].rodada[y].data !== ""
              ) {
                if (
                  parseInt(rodadas[x].rodada[y].placarCasa) >
                  parseInt(rodadas[x].rodada[y].placarFora)
                ) {
                  pontos = pontos + 3;
                  vitorias = vitorias + 1;
                } else if (
                  parseInt(rodadas[x].rodada[y].placarCasa) ===
                  parseInt(rodadas[x].rodada[y].placarFora)
                ) {
                  pontos = pontos + 1;
                  empates = empates + 1;
                } else {
                  derrotas = derrotas + 1;
                }
                if (parseInt(rodadas[x].rodada[y].placarFora) === 0) {
                  clean_sheets = clean_sheets + 1;
                }
                if (parseInt(rodadas[x].rodada[y].placarCasa) === 0) {
                  sem_marcar = sem_marcar + 1;
                }
                partidas = vitorias + empates + derrotas;
                gols_marcados =
                  gols_marcados + parseInt(rodadas[x].rodada[y].placarCasa);
                gols_sofridos =
                  gols_sofridos + parseInt(rodadas[x].rodada[y].placarFora);
                saldo_de_gols = gols_marcados - gols_sofridos;
                aproveitamento = parseFloat(pontos / (partidas * 3)).toFixed(2);
                media_feitos_jogo = parseFloat(
                  gols_marcados / partidas
                ).toFixed(2);
                media_sofridos_jogo = parseFloat(
                  gols_sofridos / partidas
                ).toFixed(2);
              } else if (
                rodadas[x].rodada[y].fora.nome === equipe.equipe.nome &&
                rodadas[x].rodada[y].data !== ""
              ) {
                if (
                  parseInt(rodadas[x].rodada[y].placarFora) >
                  parseInt(rodadas[x].rodada[y].placarCasa)
                ) {
                  pontos = pontos + 3;
                  vitorias = vitorias + 1;
                } else if (
                  parseInt(rodadas[x].rodada[y].placarFora) ===
                  parseInt(rodadas[x].rodada[y].placarCasa)
                ) {
                  pontos = pontos + 1;
                  empates = empates + 1;
                } else {
                  derrotas = derrotas + 1;
                }
                if (parseInt(rodadas[x].rodada[y].placarCasa) === 0) {
                  clean_sheets = clean_sheets + 1;
                }
                if (parseInt(rodadas[x].rodada[y].placarFora) === 0) {
                  sem_marcar = sem_marcar + 1;
                }
                partidas = vitorias + empates + derrotas;
                gols_marcados =
                  gols_marcados + parseInt(rodadas[x].rodada[y].placarFora);
                gols_sofridos =
                  gols_sofridos + parseInt(rodadas[x].rodada[y].placarCasa);
                saldo_de_gols = gols_marcados - gols_sofridos;
                aproveitamento = parseFloat(pontos / (partidas * 3)).toFixed(2);
                media_feitos_jogo = parseFloat(
                  gols_marcados / partidas
                ).toFixed(2);
                media_sofridos_jogo = parseFloat(
                  gols_sofridos / partidas
                ).toFixed(2);
              }
            }
          }

          //forma
          let forma = ["", "", "", "", ""];
          let count = rodadas.length;
          let partida = "";
          for (let a = 0; a < rodadas.length; a++) {
            for (let b = 0; b < rodadas[a].rodada.length; b++) {
              if (
                (rodadas[a].rodada[b].casa.nome === equipe.equipe.nome ||
                  rodadas[a].rodada[b].fora.nome === equipe.equipe.nome) &&
                rodadas[a].rodada[b].data !== ""
              ) {
                count = rodadas.length;
                for (let c = 0; c < rodadas.length; c++) {
                  for (let d = 0; d < rodadas[c].rodada.length; d++) {
                    if (
                      (rodadas[c].rodada[d].casa.nome === equipe.equipe.nome ||
                        rodadas[c].rodada[d].fora.nome ===
                          equipe.equipe.nome) &&
                      rodadas[a].rodada[b].idPartida !==
                        rodadas[c].rodada[d].idPartida &&
                      (rodadas[c].rodada[d].data === "" ||
                        new Date(rodadas[a].rodada[b].data) >
                          new Date(rodadas[c]?.rodada[d].data))
                    ) {
                    } else if (
                      (rodadas[c].rodada[d].casa.nome === equipe.equipe.nome ||
                        rodadas[c].rodada[d].fora.nome ===
                          equipe.equipe.nome) &&
                      rodadas[a].rodada[b].idPartida !==
                        rodadas[c].rodada[d].idPartida
                    ) {
                      count--;
                    }
                  }
                }

                if (rodadas[a].rodada[b].casa.nome === equipe.equipe.nome) {
                  if (
                    parseInt(rodadas[a].rodada[b].placarCasa) >
                    parseInt(rodadas[a].rodada[b].placarFora)
                  ) {
                    partida = "V";
                  } else if (
                    parseInt(rodadas[a].rodada[b].placarCasa) ===
                    parseInt(rodadas[a].rodada[b].placarFora)
                  ) {
                    partida = "E";
                  } else {
                    partida = "D";
                  }
                } else if (
                  rodadas[a].rodada[b].fora.nome === equipe.equipe.nome
                ) {
                  if (
                    parseInt(rodadas[a].rodada[b].placarFora) >
                    parseInt(rodadas[a].rodada[b].placarCasa)
                  ) {
                    partida = "V";
                  } else if (
                    parseInt(rodadas[a].rodada[b].placarFora) ===
                    parseInt(rodadas[a].rodada[b].placarCasa)
                  ) {
                    partida = "E";
                  } else {
                    partida = "D";
                  }
                }

                break;
              } else {
                count = 0;
              }
            }

            if (count === rodadas.length) {
              forma.splice(0, 1, partida);
            } else if (count === rodadas.length - 1) {
              forma.splice(1, 1, partida);
            } else if (count === rodadas.length - 2) {
              forma.splice(2, 1, partida);
            } else if (count === rodadas.length - 3) {
              forma.splice(3, 1, partida);
            } else if (count === rodadas.length - 4) {
              forma.splice(4, 1, partida);
            }
          }
          //adicionar ao banco
          for (let z = 0; z < tabela.length; z++) {
            if (tabela[z].equipe.nome === equipe.equipe.nome) {
              tabela[z].dados.pontos = pontos;
              tabela[z].dados.partidas = partidas;
              tabela[z].dados.vitorias = vitorias;
              tabela[z].dados.empates = empates;
              tabela[z].dados.derrotas = derrotas;
              tabela[z].dados.gols_marcados = gols_marcados;
              tabela[z].dados.gols_sofridos = gols_sofridos;
              tabela[z].dados.saldo_de_gols = saldo_de_gols;
              tabela[z].dados.aproveitamento = Math.round(aproveitamento * 100);
              tabela[z].dados.forma = forma;
              tabela[z].dados.clean_sheets = clean_sheets;
              tabela[z].dados.sem_marcar = sem_marcar;
              tabela[z].dados.media_feitos_jogo = media_feitos_jogo;
              tabela[z].dados.media_sofridos_jogo = media_sofridos_jogo;
              tabelaAux.push(tabela[z].dados);
              break;
            }
          }
        });
      } else {
        tabela.forEach((equipe) => {
          let pontos = 0;
          let partidas = 0;
          let vitorias = 0;
          let empates = 0;
          let derrotas = 0;
          let gols_marcados = 0;
          let gols_sofridos = 0;
          let saldo_de_gols = 0;
          let aproveitamento = 0;
          let pontuacao_cartola = 0;
          let media_pontuacao = 0;
          let saldoFeito = 0;
          let saldoSofrido = 0;

          for (let x = 0; x < rodadas.length; x++) {
            for (let y = 0; y < rodadas[x].rodada.length; y++) {
              saldoFeito = 0;
              saldoSofrido = 0;
              if (
                rodadas[x].rodada[y].casa.nome === equipe.equipe.nome &&
                rodadas[x].rodada[y].data !== ""
              ) {
                if (
                  parseFloat(rodadas[x].rodada[y].placarCasa) -
                    parseFloat(rodadas[x].rodada[y].placarFora) >=
                  5
                ) {
                  pontos = pontos + 3;
                  vitorias = vitorias + 1;
                  saldoFeito = Math.round(
                    (parseFloat(rodadas[x].rodada[y].placarCasa) -
                      parseFloat(rodadas[x].rodada[y].placarFora)) /
                      10
                  );
                } else if (
                  parseFloat(rodadas[x].rodada[y].placarCasa) -
                    parseFloat(rodadas[x].rodada[y].placarFora) <
                    5 &&
                  parseFloat(rodadas[x].rodada[y].placarCasa) -
                    parseFloat(rodadas[x].rodada[y].placarFora) >
                    -5
                ) {
                  pontos = pontos + 1;
                  empates = empates + 1;
                } else {
                  derrotas = derrotas + 1;
                  saldoSofrido = Math.round(
                    (parseFloat(rodadas[x].rodada[y].placarFora) -
                      parseFloat(rodadas[x].rodada[y].placarCasa)) /
                      10
                  );
                }

                partidas = vitorias + empates + derrotas;
                gols_marcados =
                  gols_marcados +
                  Math.round(
                    parseFloat(rodadas[x].rodada[y].placarCasa) / 10 +
                      saldoFeito
                  );
                gols_sofridos =
                  gols_sofridos +
                  Math.round(
                    parseFloat(rodadas[x].rodada[y].placarFora) / 10 +
                      saldoSofrido
                  );
                saldo_de_gols = gols_marcados - gols_sofridos;
                aproveitamento = parseFloat(pontos / (partidas * 3)).toFixed(2);
                pontuacao_cartola =
                  pontuacao_cartola +
                  parseFloat(rodadas[x].rodada[y].placarCasa);
                media_pontuacao = parseFloat(
                  pontuacao_cartola / partidas
                ).toFixed(2);
              } else if (
                rodadas[x].rodada[y].fora.nome === equipe.equipe.nome &&
                rodadas[x].rodada[y].data !== ""
              ) {
                if (
                  parseFloat(rodadas[x].rodada[y].placarFora) -
                    parseFloat(rodadas[x].rodada[y].placarCasa) >=
                  5
                ) {
                  pontos = pontos + 3;
                  vitorias = vitorias + 1;
                  saldoFeito = Math.round(
                    (parseFloat(rodadas[x].rodada[y].placarFora) -
                      parseFloat(rodadas[x].rodada[y].placarCasa)) /
                      10
                  );
                } else if (
                  parseFloat(rodadas[x].rodada[y].placarFora) -
                    parseFloat(rodadas[x].rodada[y].placarCasa) <
                    5 &&
                  parseFloat(rodadas[x].rodada[y].placarFora) -
                    parseFloat(rodadas[x].rodada[y].placarCasa) >
                    -5
                ) {
                  pontos = pontos + 1;
                  empates = empates + 1;
                } else {
                  derrotas = derrotas + 1;
                  saldoSofrido = Math.round(
                    (parseFloat(rodadas[x].rodada[y].placarCasa) -
                      parseFloat(rodadas[x].rodada[y].placarFora)) /
                      10
                  );
                }
                partidas = vitorias + empates + derrotas;
                gols_marcados =
                  gols_marcados +
                  Math.round(
                    parseFloat(rodadas[x].rodada[y].placarFora) / 10 +
                      saldoFeito
                  );
                gols_sofridos =
                  gols_sofridos +
                  Math.round(
                    parseFloat(rodadas[x].rodada[y].placarCasa) / 10 +
                      saldoSofrido
                  );
                saldo_de_gols = gols_marcados - gols_sofridos;
                aproveitamento = parseFloat(pontos / (partidas * 3)).toFixed(2);
                pontuacao_cartola =
                  pontuacao_cartola +
                  parseFloat(rodadas[x].rodada[y].placarFora);
                media_pontuacao = parseFloat(
                  pontuacao_cartola / partidas
                ).toFixed(2);
              }
            }
          }

          //forma
          let forma = ["", "", "", "", ""];
          let count = rodadas.length;
          let partida = "";
          for (let a = 0; a < rodadas.length; a++) {
            for (let b = 0; b < rodadas[a].rodada.length; b++) {
              if (
                (rodadas[a].rodada[b].casa.nome === equipe.equipe.nome ||
                  rodadas[a].rodada[b].fora.nome === equipe.equipe.nome) &&
                rodadas[a].rodada[b].data !== ""
              ) {
                count = rodadas.length;
                for (let c = 0; c < rodadas.length; c++) {
                  for (let d = 0; d < rodadas[c].rodada.length; d++) {
                    if (
                      (rodadas[c].rodada[d].casa.nome === equipe.equipe.nome ||
                        rodadas[c].rodada[d].fora.nome ===
                          equipe.equipe.nome) &&
                      rodadas[a].rodada[b].idPartida !==
                        rodadas[c].rodada[d].idPartida &&
                      (rodadas[c].rodada[d].data === "" ||
                        new Date(rodadas[a].rodada[b].data) >
                          new Date(rodadas[c]?.rodada[d].data))
                    ) {
                    } else if (
                      (rodadas[c].rodada[d].casa.nome === equipe.equipe.nome ||
                        rodadas[c].rodada[d].fora.nome ===
                          equipe.equipe.nome) &&
                      rodadas[a].rodada[b].idPartida !==
                        rodadas[c].rodada[d].idPartida
                    ) {
                      count--;
                    }
                  }
                }

                if (rodadas[a].rodada[b].casa.nome === equipe.equipe.nome) {
                  if (
                    parseFloat(rodadas[a].rodada[b].placarCasa) -
                      parseFloat(rodadas[a].rodada[b].placarFora) >=
                    5
                  ) {
                    partida = "V";
                  } else if (
                    parseFloat(rodadas[a].rodada[b].placarCasa) -
                      parseFloat(rodadas[a].rodada[b].placarFora) <
                      5 &&
                    parseFloat(rodadas[a].rodada[b].placarCasa) -
                      parseFloat(rodadas[a].rodada[b].placarFora) >
                      -5
                  ) {
                    partida = "E";
                  } else {
                    partida = "D";
                  }
                } else if (
                  rodadas[a].rodada[b].fora.nome === equipe.equipe.nome
                ) {
                  if (
                    parseFloat(rodadas[a].rodada[b].placarFora) -
                      parseFloat(rodadas[a].rodada[b].placarCasa) >=
                    5
                  ) {
                    partida = "V";
                  } else if (
                    parseFloat(rodadas[a].rodada[b].placarFora) -
                      parseFloat(rodadas[a].rodada[b].placarCasa) <
                      5 &&
                    parseFloat(rodadas[a].rodada[b].placarFora) -
                      parseFloat(rodadas[a].rodada[b].placarCasa) >
                      -5
                  ) {
                    partida = "E";
                  } else {
                    partida = "D";
                  }
                }
                break;
              } else {
                count = 0;
              }
            }

            if (count !== 0) {
              if (count === rodadas.length) {
                forma.splice(0, 1, partida);
              } else if (count === rodadas.length - 1) {
                forma.splice(1, 1, partida);
              } else if (count === rodadas.length - 2) {
                forma.splice(2, 1, partida);
              } else if (count === rodadas.length - 3) {
                forma.splice(3, 1, partida);
              } else if (count === rodadas.length - 4) {
                forma.splice(4, 1, partida);
              }
            }
          }

          //adicionar ao banco
          for (let z = 0; z < tabela.length; z++) {
            if (tabela[z].equipe.nome === equipe.equipe.nome) {
              tabela[z].dados.pontos = pontos;
              tabela[z].dados.partidas = partidas;
              tabela[z].dados.vitorias = vitorias;
              tabela[z].dados.empates = empates;
              tabela[z].dados.derrotas = derrotas;
              tabela[z].dados.gols_marcados = gols_marcados;
              tabela[z].dados.gols_sofridos = gols_sofridos;
              tabela[z].dados.saldo_de_gols = saldo_de_gols;
              tabela[z].dados.aproveitamento = Math.round(aproveitamento * 100);
              tabela[z].dados.forma = forma;
              tabela[z].dados.pontuacao_cartola = pontuacao_cartola;
              tabela[z].dados.media_pontuacao = media_pontuacao;
              tabelaAux.push(tabela[z].dados);
              break;
            }
          }
        });
      }

      tabela.forEach((equipe) => {
        for (let z = 0; z < tabela.length; z++) {
          if (tabela[z].equipe.nome === equipe.equipe.nome) {
            let posicao = 1;
            for (let z1 = 0; z1 < tabela.length; z1++) {
              if (tabela[z].equipe.nome !== tabela[z1].equipe.nome) {
                if (tabela[z].dados.pontos < tabela[z1].dados.pontos) {
                  posicao++;
                } else if (tabela[z].dados.pontos === tabela[z1].dados.pontos) {
                  if (
                    tabela[z].dados.saldo_de_gols <
                    tabela[z1].dados.saldo_de_gols
                  ) {
                    posicao++;
                  } else if (
                    tabela[z].dados.saldo_de_gols ===
                    tabela[z1].dados.saldo_de_gols
                  ) {
                    if (
                      tabela[z].dados.gols_marcados <
                      tabela[z1].dados.gols_marcados
                    ) {
                      posicao++;
                    } else if (
                      tabela[z].dados.gols_marcados ===
                      tabela[z1].dados.gols_marcados
                    ) {
                      if (
                        tabela[z].dados.partidas > tabela[z1].dados.partidas
                      ) {
                        posicao++;
                      } else if (
                        tabela[z].dados.partidas === tabela[z1].dados.partidas
                      ) {
                        //
                      }
                    }
                  }
                }
              }
            }
            tabelaAux[z].posicao = posicao;
          }
        }
      });

      const update = await campeonatosDAO.updateCampeonato(
        campeonatoId[0].idCampeonato,
        tabelaAux
      );

      return update;
    } catch (error) {
      return error;
    }
  }
}
