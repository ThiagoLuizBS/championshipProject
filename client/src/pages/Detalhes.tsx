import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  BsCheckCircleFill,
  BsDashCircleFill,
  BsFillXCircleFill,
} from "react-icons/bs";
import campeonatosService from "../services/campeonatos";
import partidasService from "../services/partidas";

type campeonatoProps = {
  equipe: equipeProps;
  dados: tabelaProps;
};

type equipeProps = {
  id: string;
  logo: string;
  nome: string;
  treinador: string;
  urlCartola: string;
};

type tabelaProps = {
  posicao: number;
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
  pontuacao_cartola: number;
  media_pontuacao: number;
};

type partidaProps = {
  idPartida: string;
  casa: {
    id: string;
    logo: string;
    nome: string;
    treinador: string;
    urlCartola: string;
  };
  fora: {
    id: string;
    logo: string;
    nome: string;
    treinador: string;
    urlCartola: string;
  };
  idCampeonato: string;
  data: string;
  placarCasa: string;
  placarFora: string;
};

export function Detalhes() {
  const { id, campeonato } = useParams();
  const idCampeonato = campeonato as string;
  const [equipe, setEquipe] = useState<campeonatoProps>();
  const [partidas, setPartidas] = useState<partidaProps[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    campeonatosService.getCampeonatoTabela(idCampeonato).then((response) => {
      for (let index = 0; index < response.data.length; index++) {
        if (response.data[index].equipe?.id === id)
          setEquipe(response.data[index]);
      }
    });
  }, [campeonato, id]);

  useEffect(() => {
    partidasService.getRodadasCampeonato(idCampeonato).then((response) => {
      setPartidas([]);
      for (let i = 0; i < response.data.length; i++) {
        for (let j = 0; j < response.data[i].rodada.length; j++) {
          if (
            response.data[i].rodada[j]?.casa.id === id ||
            response.data[i].rodada[j]?.fora.id === id
          ) {
            setPartidas((partida) => [...partida, response.data[i].rodada[j]]);
            break;
          }
        }
      }
      setLoading(false);
    });
  }, [campeonato, id]);

  return (
    <Container className="container-detalhes">
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <Row lg={12} xs={12} className="row-detalhes-up">
            <Col lg={4} xs={4} className="col-detalhes">
              <img
                className="img-detalhes"
                src={
                  equipe?.equipe.urlCartola
                    ? `/logos/${equipe?.equipe.logo}.png`
                    : `${equipe?.equipe.logo}`
                }
                alt={equipe?.equipe.nome}
                title={equipe?.equipe.nome}
              />
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
                    <span className="name-detalhes">
                      {equipe?.dados.partidas}
                    </span>
                  </Col>
                </Col>
              </Row>
            </Col>
            <Col className="col-detalhes">
              <Row className="row-top-detalhes">
                <Col className="col-detalhes">
                  <Col className="title-detalhes">Posição</Col>
                  <Col>
                    <span className="name-detalhes">
                      {equipe?.dados.posicao}°
                    </span>
                  </Col>
                </Col>
                <Col className="col-detalhes">
                  <Col className="title-detalhes">Pontos</Col>
                  <Col>
                    <span className="name-detalhes">
                      {equipe?.dados.pontos}
                    </span>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row lg={12} xs={12} className="row-detalhes-down">
            <Row className="row-inside-detalhes">
              <Col sm={3} xs={6} className="col-inside-detalhes">
                <Col className="title-detalhes">Vitorias</Col>
                <Col>
                  <span className="name-detalhes">
                    {equipe?.dados.vitorias}
                  </span>
                </Col>
              </Col>
              <Col sm={3} xs={6} className="col-inside-detalhes">
                <Col className="title-detalhes">Empates</Col>
                <Col>
                  <span className="name-detalhes">{equipe?.dados.empates}</span>
                </Col>
              </Col>
              <Col sm={3} xs={6} className="col-inside-detalhes">
                <Col className="title-detalhes">Derrotas</Col>
                <Col>
                  <span className="name-detalhes">
                    {equipe?.dados.derrotas}
                  </span>
                </Col>
              </Col>
              <Col sm={3} xs={6} className="col-inside-detalhes">
                <Col className="title-detalhes">Aproveitamento</Col>
                <Col>
                  <span className="name-detalhes">
                    {equipe?.dados.aproveitamento}%
                  </span>
                </Col>
              </Col>
            </Row>
            <Row className="row-inside-detalhes">
              <Col sm={3} xs={6} className="col-inside-detalhes">
                <Col className="title-detalhes">Gols marcados</Col>
                <Col>
                  <span className="name-detalhes">
                    {equipe?.dados.gols_marcados}
                  </span>
                </Col>
              </Col>
              <Col sm={3} xs={6} className="col-inside-detalhes">
                <Col className="title-detalhes">Gols sofridos</Col>
                <Col>
                  <span className="name-detalhes">
                    {equipe?.dados.gols_sofridos}
                  </span>
                </Col>
              </Col>
              <Col sm={3} xs={6} className="col-inside-detalhes">
                <Col className="title-detalhes">Saldo de gols</Col>
                <Col>
                  <span className="name-detalhes">
                    {equipe?.dados.saldo_de_gols}
                  </span>
                </Col>
              </Col>
              <Col sm={3} xs={6} className="col-inside-detalhes">
                <Col className="title-detalhes">Últimos 5 jogos</Col>
                <Col className="name-detalhes">
                  {equipe?.dados.forma?.map((resultado: string, i) => (
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
            {equipe?.dados?.media_feitos_jogo !== undefined ? (
              <Row className="row-inside-detalhes">
                <Col sm={3} xs={6} className="col-inside-detalhes">
                  <Col className="title-detalhes">GM por jogo</Col>
                  <Col>
                    <span className="name-detalhes">
                      {equipe?.dados.media_feitos_jogo}
                    </span>
                  </Col>
                </Col>
                <Col sm={3} xs={6} className="col-inside-detalhes">
                  <Col className="title-detalhes">GS por jogo</Col>
                  <Col>
                    <span className="name-detalhes">
                      {equipe?.dados.media_sofridos_jogo}
                    </span>
                  </Col>
                </Col>
                <Col sm={3} xs={6} className="col-inside-detalhes">
                  <Col className="title-detalhes">Clean Sheets</Col>
                  <Col>
                    <span className="name-detalhes">
                      {equipe?.dados.clean_sheets}
                    </span>
                  </Col>
                </Col>
                <Col sm={3} xs={6} className="col-inside-detalhes">
                  <Col>
                    <Col className="title-detalhes">Sem marcar</Col>
                    <Col>
                      <span className="name-detalhes">
                        {equipe?.dados.sem_marcar}
                      </span>
                    </Col>
                  </Col>
                </Col>
              </Row>
            ) : (
              <Row className="row-inside-detalhes">
                <Col sm={3} xs={6} className="col-inside-detalhes">
                  <Col className="title-detalhes">Pontuação total</Col>
                  <Col>
                    <span className="name-detalhes">
                      {equipe?.dados.pontuacao_cartola}
                    </span>
                  </Col>
                </Col>
                <Col sm={3} xs={6} className="col-inside-detalhes">
                  <Col className="title-detalhes">Pontuação média</Col>
                  <Col>
                    <span className="name-detalhes">
                      {equipe?.dados.media_pontuacao}
                    </span>
                  </Col>
                </Col>
              </Row>
            )}
          </Row>
          <Row md={12} sm={12} xs={12} className="row-col-detalhes">
            <Col lg={3} md={4} sm={5} xs={6}>
              <span className="title-detalhes">1° TURNO</span>
            </Col>
            <Col lg={3} md={4} sm={5} xs={6}>
              <span className="title-detalhes">2° TURNO</span>
            </Col>
          </Row>
          <Row
            md={12}
            sm={12}
            xs={12}
            className={
              idCampeonato === "2"
                ? "row-down-detalhes row-2"
                : "row-down-detalhes"
            }
          >
            {partidas?.map((partida: partidaProps, i: number) => (
              <Col
                lg={3}
                md={4}
                sm={5}
                xs={6}
                className="partida-detalhes"
                key={partida.idPartida}
                title={`Rodada ${i + 1} - ${partida.idPartida}`}
              >
                {partida.casa.nome === "BYE" || partida.fora.nome === "BYE" ? (
                  <>
                    <Col className="col-down-detalhes">
                      {partida.casa.logo === "" ? (
                        <img
                          className="img-down-detalhes"
                          src={
                            partida?.fora.urlCartola
                              ? `/logos/${partida?.fora.logo}.png`
                              : `${partida?.fora.logo}`
                          }
                          alt={partida.fora.nome}
                          title={partida.fora.nome}
                        />
                      ) : (
                        <img
                          className="img-down-detalhes"
                          src={
                            partida?.casa.urlCartola
                              ? `/logos/${partida?.casa.logo}.png`
                              : `${partida?.casa.logo}`
                          }
                          alt={partida.casa.nome}
                          title={partida.casa.nome}
                        />
                      )}
                    </Col>
                    <Col className="col-1-detalhes">
                      <span>
                        {partida.placarCasa} - {partida.placarFora}
                      </span>
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
                        src={
                          partida?.casa.urlCartola
                            ? `/logos/${partida?.casa.logo}.png`
                            : `${partida?.casa.logo}`
                        }
                        alt={partida.casa.nome}
                        title={partida.casa.nome}
                      />
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6} className="col-2-detalhes">
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
                    </Col>
                    <Col className="col-down-detalhes">
                      <img
                        className="img-down-detalhes"
                        src={
                          partida?.fora.urlCartola
                            ? `/logos/${partida?.fora.logo}.png`
                            : `${partida?.fora.logo}`
                        }
                        alt={partida.fora.nome}
                        title={partida.fora.nome}
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
