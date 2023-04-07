import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

type rodadaProps = {
  num: string;
  rodada: partidaProps[];
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

export function Admin() {
  const [rodadas, setRodadas] = useState<rodadaProps[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    fetch("https://championship-project-9hyg.vercel.app/rodadas")
      .then((response) => response.json())
      .then((data) => {
        setRodadas(data.rodadas);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="container-admin">
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" />
        </div>
      ) : (
        rodadas?.map((rodada: rodadaProps) => (
          <Col md={3} sm={4} xs={6} className="row-down-admin">
            <span className="title-admin">Rodada {rodada.num}</span>
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
                          src={partida.fora.logo}
                        />
                      ) : (
                        <img
                          className="img-down-admin"
                          src={partida.casa.logo}
                        />
                      )}
                    </Col>
                    <Col className="col-1-admin">
                      {partida.status === "MARCADO" ? (
                        <span>Sem partida</span>
                      ) : (
                        <span>
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
                    <Col className="col-down-admin">
                      <img className="img-down-admin" src={partida.casa.logo} />
                    </Col>
                    <Col className="col-2-admin">
                      {partida.status === "MARCADO" ? (
                        <span>MARCADO</span>
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
                    <Col className="col-down-admin">
                      <img className="img-down-admin" src={partida.fora.logo} />
                    </Col>
                  </>
                )}
              </Col>
            ))}
          </Col>
        ))
      )}
    </Container>
  );
}
