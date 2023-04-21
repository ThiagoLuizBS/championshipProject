import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  BsCheckCircleFill,
  BsDashCircleFill,
  BsFillXCircleFill,
} from "react-icons/bs";
import campeonatosService from "../services/campeonatos";

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
  const { id } = useParams();
  const [equipe, setEquipe] = useState<equipeProps>();
  const [partidas, setPartidas] = useState<partidaProps[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    fetch("http://localhost:5000/campCartola")
      .then((response) => response.json())
      .then((data) => {
        for (let index = 0; index < data?.camp[0]?.table.length; index++) {
          if (data?.campCartola[0]?.table[index]?.equipe.id === id)
            setEquipe(data.campCartola[0].table[index]);
        }
      });
  }, [id]);

  useEffect(() => {
    campeonatosService.getCampeonatoTabela("1").then((response) => {
      console.log(response.data);
      setPartidas([]);
      for (let i = 0; i < response.data?.rodadasCartola?.length; i++) {
        for (
          let j = 0;
          j < response.data?.rodadasCartola[i]?.rodada?.length;
          j++
        ) {
          if (
            response.data?.rodadasCartola[i]?.rodada[j]?.casa.id === id ||
            response.data?.rodadasCartola[i]?.rodada[j]?.fora.id === id
          ) {
            setPartidas((partida) => [
              ...partida,
              response.data.rodadasCartola[i].rodada[j],
            ]);
            break;
          }
        }
      }
      setLoading(false);
    });
  }, [id]);

  return (
    <Container className="container-detalhes">
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <Row lg={12} xs={12} className="row-detalhes">
            <Col lg={4} xs={4} className="col-detalhes">
              <img className="img-detalhes" src={equipe?.equipe.logo} />
            </Col>
            <Col className="col-detalhes">
              <Row className="row-top-detalhes">
                <Col className="col-detalhes">
                  <Col className="title-detalhes">Treinador</Col>
                  <Col>
                    <span className="name-detalhes">
                      {equipe?.equipe?.treinador}
                    </span>
                  </Col>
                </Col>
                <Col className="col-detalhes">
                  <Col className="title-detalhes">Jogos</Col>
                  <Col>
                    <span className="name-detalhes">{equipe?.partidas}</span>
                  </Col>
                </Col>
              </Row>
            </Col>
            <Col className="col-detalhes">
              <Row className="row-top-detalhes">
                <Col className="col-detalhes">
                  <Col className="title-detalhes">Posição</Col>
                  <Col>
                    <span className="name-detalhes">{equipe?.posicao}°</span>
                  </Col>
                </Col>
                <Col className="col-detalhes">
                  <Col className="title-detalhes">Pontos</Col>
                  <Col>
                    <span className="name-detalhes">{equipe?.pontos}</span>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row lg={12} xs={12} className="row-detalhes">
            <Row className="row-inside-detalhes">
              <Col sm={3} xs={6} className="col-inside-detalhes">
                <Col className="title-detalhes">Vitorias</Col>
                <Col>
                  <span className="name-detalhes">{equipe?.vitorias}</span>
                </Col>
              </Col>
              <Col sm={3} xs={6} className="col-inside-detalhes">
                <Col className="title-detalhes">Empates</Col>
                <Col>
                  <span className="name-detalhes">{equipe?.empates}</span>
                </Col>
              </Col>
              <Col sm={3} xs={6} className="col-inside-detalhes">
                <Col className="title-detalhes">Derrotas</Col>
                <Col>
                  <span className="name-detalhes">{equipe?.derrotas}</span>
                </Col>
              </Col>
              <Col sm={3} xs={6} className="col-inside-detalhes">
                <Col className="title-detalhes">Aproveitamento</Col>
                <Col>
                  <span className="name-detalhes">
                    {equipe?.aproveitamento}%
                  </span>
                </Col>
              </Col>
            </Row>
            <Row className="row-inside-detalhes">
              <Col sm={3} xs={6} className="col-inside-detalhes">
                <Col className="title-detalhes">Gols marcados</Col>
                <Col>
                  <span className="name-detalhes">{equipe?.gols_marcados}</span>
                </Col>
              </Col>
              <Col sm={3} xs={6} className="col-inside-detalhes">
                <Col className="title-detalhes">Gols sofridos</Col>
                <Col>
                  <span className="name-detalhes">{equipe?.gols_sofridos}</span>
                </Col>
              </Col>
              <Col sm={3} xs={6} className="col-inside-detalhes">
                <Col className="title-detalhes">Saldo de gols</Col>
                <Col>
                  <span className="name-detalhes">{equipe?.saldo_de_gols}</span>
                </Col>
              </Col>
              <Col sm={3} xs={6} className="col-inside-detalhes">
                <Col className="title-detalhes">Últimos 5 jogos</Col>
                <Col className="name-detalhes">
                  {equipe?.forma.map((resultado: string, i) => (
                    <Fragment key={i}>
                      {resultado === "V" ? (
                        <BsCheckCircleFill
                          className="form-pad-detalhes green-detalhes"
                          title="vitoria"
                        />
                      ) : (
                        <>
                          {resultado === "E" ? (
                            <BsDashCircleFill
                              className="form-pad-detalhes gray-detalhes"
                              title="empate"
                            />
                          ) : (
                            <>
                              {resultado === "D" ? (
                                <BsFillXCircleFill
                                  className="form-pad-detalhes red-detalhes"
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
            <Row className="row-inside-detalhes">
              <Col sm={3} xs={6} className="col-inside-detalhes">
                <Col className="title-detalhes">GM por jogo</Col>
                <Col>
                  <span className="name-detalhes">
                    {equipe?.media_feitos_jogo}
                  </span>
                </Col>
              </Col>
              <Col sm={3} xs={6} className="col-inside-detalhes">
                <Col className="title-detalhes">GS por jogo</Col>
                <Col>
                  <span className="name-detalhes">
                    {equipe?.media_sofridos_jogo}
                  </span>
                </Col>
              </Col>
              <Col sm={3} xs={6} className="col-inside-detalhes">
                <Col className="title-detalhes">Clean Sheets</Col>
                <Col>
                  <span className="name-detalhes">{equipe?.clean_sheets}</span>
                </Col>
              </Col>
              <Col sm={3} xs={6} className="col-inside-detalhes">
                <Col>
                  <Col className="title-detalhes">Sem marcar</Col>
                  <Col>
                    <span className="name-detalhes">{equipe?.sem_marcar}</span>
                  </Col>
                </Col>
              </Col>
            </Row>
          </Row>
          <Row md={12} sm={12} xs={12} className="row-col-detalhes">
            <Col lg={3} md={4} sm={5} xs={6}>
              <span className="title-detalhes">1° TURNO</span>
            </Col>
            <Col lg={3} md={4} sm={5} xs={6}>
              <span className="title-detalhes">2° TURNO</span>
            </Col>
          </Row>
          <Row md={12} sm={12} xs={12} className="row-down-detalhes">
            {partidas?.map((partida: partidaProps) => (
              <Col
                lg={3}
                md={4}
                sm={5}
                xs={6}
                className="partida-detalhes"
                key={partida.idPartida}
              >
                {partida.casa.nome === "BYE" || partida.fora.nome === "BYE" ? (
                  <>
                    <Col className="col-down-detalhes">
                      {partida.casa.logo === "" ? (
                        <img
                          className="img-down-detalhes"
                          src={partida.fora.logo}
                        />
                      ) : (
                        <img
                          className="img-down-detalhes"
                          src={partida.casa.logo}
                        />
                      )}
                    </Col>
                    <Col className="col-1-detalhes">
                      {partida.status === "MARCADO" ? (
                        <span>Sem partida</span>
                      ) : (
                        <span>
                          {partida.placarCasa} - {partida.placarFora}
                        </span>
                      )}
                    </Col>
                    <Col className="col-down-detalhes">
                      <span className="bye-games">BYE</span>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col className="col-down-detalhes">
                      <img
                        className="img-down-detalhes"
                        src={partida.casa.logo}
                      />
                    </Col>
                    <Col className="col-2-detalhes">
                      {partida.status === "MARCADO" ? (
                        <span>MARCADO</span>
                      ) : (
                        <>
                          <Col className="col-down-detalhes">
                            <span className="match-detalhes">
                              {partida.placarCasa}
                            </span>
                          </Col>
                          <Col className="col-down-detalhes">
                            <span className="match-detalhes">-</span>
                          </Col>
                          <Col className="col-down-detalhes">
                            <span className="match-detalhes">
                              {partida.placarFora}
                            </span>
                          </Col>
                        </>
                      )}
                    </Col>
                    <Col className="col-down-detalhes">
                      <img
                        className="img-down-detalhes"
                        src={partida.fora.logo}
                      />
                    </Col>
                  </>
                )}
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
}
