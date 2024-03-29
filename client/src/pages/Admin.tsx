import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { EditGame } from "../components/EditGame";
import { useParams } from "react-router-dom";
import partidasService from "../services/partidas";

type rodadaProps = {
  _id: string;
  rodada: partidaProps[];
};

type partidaProps = {
  idCampeonato: string;
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
  data: string;
  placarCasa: string;
  placarFora: string;
};

export function Admin() {
  const { id } = useParams();
  const idString = id as string;
  const [rodadas, setRodadas] = useState<rodadaProps[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [show, setShow] = useState(false);
  const [match, setMatch] = useState<partidaProps>({
    idCampeonato: "0",
    idPartida: "0",
    casa: { id: "0", logo: "0", nome: "0", treinador: "0", urlCartola: "" },
    fora: { id: "0", logo: "0", nome: "0", treinador: "0", urlCartola: "" },
    data: "0",
    placarCasa: "0",
    placarFora: "0",
  });

  useEffect(() => {
    partidasService.getRodadasCampeonato(idString).then((response) => {
      setRodadas(response.data);
      setLoading(false);
    });
  }, [id, show]);

  const handleShow = (match: partidaProps) => {
    setShow(true);
    setMatch(match);
  };

  return (
    <Container className="container-admin">
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" />
        </div>
      ) : (
        rodadas?.map((rodada: rodadaProps) => (
          <Col md={3} sm={4} xs={6} key={rodada._id} className="row-down-admin">
            <span className="title-admin">Rodada {rodada._id}</span>
            {rodada?.rodada.map((partida: partidaProps) => (
              <Col
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className="partida-admin"
                key={partida.idPartida}
              >
                {partida.casa.nome === "BYE" || partida.fora.nome === "BYE" ? (
                  <>
                    <Col className="col-down-admin">
                      {partida.casa.logo === "" ? (
                        <img
                          className="img-down-admin"
                          src={
                            partida?.fora.urlCartola
                              ? `/logos/${partida?.fora.logo}.png`
                              : `${partida?.fora.logo}`
                          }
                        />
                      ) : (
                        <img
                          className="img-down-admin"
                          src={
                            partida?.casa.urlCartola
                              ? `/logos/${partida?.casa.logo}.png`
                              : `${partida?.casa.logo}`
                          }
                        />
                      )}
                    </Col>
                    <Col className="col-1-admin">
                      {partida.placarCasa === "" ? (
                        <span className="match-admin">x</span>
                      ) : (
                        <span className="match-admin">
                          {partida.placarCasa} - {partida.placarFora}
                        </span>
                      )}
                    </Col>
                    <Col className="col-down-admin">
                      <span className="bye-games">BYE</span>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col lg={4} md={4} sm={4} xs={4} className="col-down-admin">
                      <img
                        className="img-down-admin"
                        src={
                          partida?.casa.urlCartola
                            ? `/logos/${partida?.casa.logo}.png`
                            : `${partida?.casa.logo}`
                        }
                        alt={partida.casa.nome}
                        title={partida.casa.nome}
                      />
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4}>
                      <button
                        className="button-admin"
                        onClick={() => handleShow(partida)}
                      >
                        <Col className="col-2-admin">
                          {partida.placarCasa === "" ? (
                            <Col className="col-down-admin">
                              <span className="match-admin">x</span>
                            </Col>
                          ) : (
                            <>
                              <Col className="col-down-admin">
                                <span className="match-admin">
                                  {partida.placarCasa}
                                </span>
                              </Col>
                              <Col className="col-down-admin">
                                <span className="match-admin">-</span>
                              </Col>
                              <Col className="col-down-admin">
                                <span className="match-admin">
                                  {partida.placarFora}
                                </span>
                              </Col>
                            </>
                          )}
                        </Col>
                      </button>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4} className="col-down-admin">
                      <img
                        className="img-down-admin"
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
          </Col>
        ))
      )}
      {show && <EditGame show={show} setShow={setShow} match={match} />}
    </Container>
  );
}
