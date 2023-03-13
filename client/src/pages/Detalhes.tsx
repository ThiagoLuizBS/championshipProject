import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  BsCheckCircleFill,
  BsDashCircleFill,
  BsFillXCircleFill,
} from "react-icons/bs";

type equipeProps = {
  posicao: number;
  equipe: { id: string; logo: string; nome: string; treinador: string };
  pontos: number;
  partidas: number;
  vitorias: number;
  empates: number;
  derrotas: number;
  gols_marcados: number;
  gols_sofridos: number;
  saldo_de_gols: number;
  aproveitamento: number;
  forma: string[];
  clean_sheets: number;
  sem_marcar: number;
  media_feitos_jogo: number;
  media_sofridos_jogo: number;
};

type partidaProps = {
  idPartida: string;
  casa: { id: string; logo: string; nome: string; treinador: string };
  fora: { id: string; logo: string; nome: string; treinador: string };
  idCampeonato: string;
  status: string;
  data: string;
  placarCasa: string;
  placarFora: string;
};

export function Detalhes() {
  let { id } = useParams();
  const [equipe, setEquipe] = useState<equipeProps>();
  const [partidas, setPartidas] = useState<partidaProps[]>([]);
  console.log(partidas);
  useEffect(() => {
    fetch("https://championship-project-9hyg.vercel.app/camp")
      .then((response) => response.json())
      .then((data) => {
        for (let index = 0; index < data?.camp[0]?.table.length; index++) {
          if (data?.camp[0]?.table[index]?.equipe.id === id)
            setEquipe(data.camp[0].table[index]);
        }
      });
  }, [id]);

  useEffect(() => {
    fetch("https://championship-project-9hyg.vercel.app/rodadas")
      .then((response) => response.json())
      .then((data) => {
        setPartidas([]);
        for (let i = 0; i < data?.rodadas?.length; i++) {
          for (let j = 0; j < data?.rodadas[i]?.rodada?.length; j++) {
            if (
              data?.rodadas[i]?.rodada[j]?.casa.id === id ||
              data?.rodadas[i]?.rodada[j]?.fora.id === id
            ) {
              setPartidas((partida) => [...partida, data.rodadas[i].rodada[j]]);
              break;
            }
          }
        }
      });
  }, [id]);

  return (
    <Container className="container-detalhes">
      <Row lg={12} xs={12} className="row-detalhes">
        <Col lg={2} sm={2} xs={2} className="col-detalhes">
          <img className="img-detalhes" src={equipe?.equipe.logo} />
          <span className="treinador-nome-equipes">
            {equipe?.equipe.treinador}
          </span>
        </Col>
        <Col className="col-detalhes">
          <Row className="row-equipes">
            <Col>
              <Col className="treinador-equipes">Posição</Col>
              <Col>
                <span className="treinador-nome-equipes">
                  {equipe?.posicao}°
                </span>
              </Col>
            </Col>
            <Col>
              <Col className="treinador-equipes">Vitorias</Col>
              <Col>
                <span className="treinador-nome-equipes">
                  {equipe?.vitorias}
                </span>
              </Col>
            </Col>
            <Col>
              <Col className="treinador-equipes">Empates</Col>
              <Col>
                <span className="treinador-nome-equipes">
                  {equipe?.empates}
                </span>
              </Col>
            </Col>
            <Col>
              <Col className="treinador-equipes">Derrotas</Col>
              <Col>
                <span className="treinador-nome-equipes">
                  {equipe?.derrotas}
                </span>
              </Col>
            </Col>
            <Col>
              <Col className="treinador-equipes">Aproveitamento</Col>
              <Col>
                <span className="treinador-nome-equipes">
                  {equipe?.aproveitamento}%
                </span>
              </Col>
            </Col>
          </Row>
          <Row className="row-equipes">
            <Col>
              <Col className="treinador-equipes">Pontos</Col>
              <Col>
                <span className="treinador-nome-equipes">{equipe?.pontos}</span>
              </Col>
            </Col>
            <Col>
              <Col className="treinador-equipes">Gols marcados</Col>
              <Col>
                <span className="treinador-nome-equipes">
                  {equipe?.gols_marcados}
                </span>
              </Col>
            </Col>
            <Col>
              <Col className="treinador-equipes">Gols sofridos</Col>
              <Col>
                <span className="treinador-nome-equipes">
                  {equipe?.gols_sofridos}
                </span>
              </Col>
            </Col>
            <Col>
              <Col className="treinador-equipes">Saldo de gols</Col>
              <Col>
                <span className="treinador-nome-equipes">
                  {equipe?.saldo_de_gols}
                </span>
              </Col>
            </Col>

            <Col>
              <Col className="treinador-equipes">Últimos 5 jogos</Col>
              <Col>
                {equipe?.forma.map((resultado: string, i) => (
                  <Fragment key={i}>
                    {resultado === "V" ? (
                      <BsCheckCircleFill
                        className="form-pad-table green-table"
                        title="vitoria"
                      />
                    ) : (
                      <>
                        {resultado === "E" ? (
                          <BsDashCircleFill
                            className="form-pad-table gray-table"
                            title="empate"
                          />
                        ) : (
                          <>
                            {resultado === "D" ? (
                              <BsFillXCircleFill
                                className="form-pad-table red-table"
                                title="derrota"
                              />
                            ) : (
                              <></>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </Fragment>
                ))}
              </Col>
            </Col>
          </Row>
          <Row className="row-equipes">
            <Col>
              <Col className="treinador-equipes">Jogos</Col>
              <Col>
                <span className="treinador-nome-equipes">
                  {equipe?.partidas}
                </span>
              </Col>
            </Col>
            <Col>
              <Col className="treinador-equipes">GM por jogo</Col>
              <Col>
                <span className="treinador-nome-equipes">
                  {equipe?.media_feitos_jogo}
                </span>
              </Col>
            </Col>
            <Col>
              <Col className="treinador-equipes">GS por jogo</Col>
              <Col>
                <span className="treinador-nome-equipes">
                  {equipe?.media_sofridos_jogo}
                </span>
              </Col>
            </Col>
            <Col>
              <Col className="treinador-equipes">Clean Sheets</Col>
              <Col>
                <span className="treinador-nome-equipes">
                  {equipe?.clean_sheets}
                </span>
              </Col>
            </Col>
            <Col>
              <Col>
                <Col className="treinador-equipes">Sem marcar</Col>
                <Col>
                  <span className="treinador-nome-equipes">
                    {equipe?.sem_marcar}
                  </span>
                </Col>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row lg={12} xs={12} className="row-down-detalhes">
        {partidas?.map((partida: partidaProps) => (
          <Col
            lg={3}
            xs={3}
            className="partida-detalhes"
            key={partida.idPartida}
          >
            {partida.casa.nome === "BYE" || partida.fora.nome === "BYE" ? (
              <>
                <Col className="col-games">
                  {partida.casa.logo === "" ? (
                    <img className="img-games" src={partida.fora.logo} />
                  ) : (
                    <img className="img-games" src={partida.casa.logo} />
                  )}
                </Col>
                <Col id="button-4-games">
                  {partida.status === "MARCADO" ? (
                    <span>Sem partida</span>
                  ) : (
                    <span>
                      {partida.placarCasa} - {partida.placarFora}
                    </span>
                  )}
                </Col>
                <Col className="col-games">
                  <span className="bye-games">BYE</span>
                </Col>
              </>
            ) : (
              <>
                <Col className="col-games">
                  <img className="img-games" src={partida.casa.logo} />
                </Col>
                <Col id="button-5-games">
                  {partida.status === "MARCADO" ? (
                    <span>A realizar</span>
                  ) : (
                    <>
                      <Col className="col-games">
                        <span className="match-games">
                          {partida.placarCasa}
                        </span>
                      </Col>
                      <Col className="col-games">
                        <span className="match-games">-</span>
                      </Col>
                      <Col className="col-games">
                        <span className="match-games">
                          {partida.placarFora}
                        </span>
                      </Col>
                    </>
                  )}
                </Col>
                <Col className="col-games">
                  <img className="img-games" src={partida.fora.logo} />
                </Col>
              </>
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
}
