import React, { useEffect, useState } from "react";
import { Row, Col, Button, Spinner } from "react-bootstrap";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Download } from "./Download";
import partidasService from "../services/partidas";

type rodadasProps = {
  _id: string;
  rodada: partidaProps[];
};

type partidaProps = {
  idPartida: string;
  data: string;
  placarCasa: string;
  placarFora: string;
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
};

type Props = {
  id: string;
};

export function Games(props: Props) {
  const [rodadaNum, setRodadaNum] = useState<number>(20);
  const [rodadas, setRodadas] = useState<rodadasProps[]>([]);
  const [botaoLeft, setBotaoLeft] = useState<boolean>(true);
  const [botaoRight, setBotaoRight] = useState<boolean>(true);
  const [loading, setLoading] = useState<Boolean>(true);
  const { id } = props;

  useEffect(() => {
    partidasService.getRodadasCampeonato(id).then((response) => {
      setRodadas(response.data);
      setLoading(false);
    });
  }, [id]);

  const alterarRodada = (lado: string) => {
    if (lado === "left") {
      setRodadaNum((atual: number) => atual - 1);
      verificar(-1);
    } else {
      setRodadaNum((atual: number) => atual + 1);
      verificar(1);
    }
  };

  const verificar = (alt: number) => {
    if (rodadaNum + alt === rodadas?.length && rodadaNum + alt > 0)
      setBotaoRight(true);
    else if (rodadaNum + alt === 1) setBotaoLeft(true);
    else {
      setBotaoRight(false);
      setBotaoLeft(false);
    }
  };

  return (
    <div id="responsive-games">
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" />
        </div>
      ) : (
        <div id="content-games">
          <Row className="rodada-games radius-top-games">
            <Col className="col-games" xs={3}>
              <Button
                id="button-1-games"
                onClick={() => alterarRodada("left")}
                disabled={botaoLeft}
              >
                <AiOutlineArrowLeft />
              </Button>
            </Col>
            <Col className="button-2-games" lg={6} md={5} xs={6}>
              <span>Rodada {rodadaNum}</span>
            </Col>
            <Col className="col-games" xs={3}>
              <Button
                id="button-3-games"
                onClick={() => alterarRodada("right")}
                disabled={botaoRight}
              >
                <AiOutlineArrowRight />
              </Button>
            </Col>
          </Row>

          {rodadas[rodadaNum - 1]?.rodada.map((partida: partidaProps) => (
            <Row className="rodada-games" key={partida.idPartida}>
              {partida.casa.nome === "BYE" || partida.fora.nome === "BYE" ? (
                <>
                  <Col className="col-games" lg={3} md={2} xs={3}>
                    {partida.casa.logo === "" ? (
                      <img className="img-games" src={partida.fora.logo} />
                    ) : (
                      <img className="img-games" src={partida.casa.logo} />
                    )}
                  </Col>
                  <Col lg={6} md={6} xs={6} className="button-4-games">
                    <span>Sem partida</span>
                  </Col>
                  <Col className="col-games" lg={3} md={2} xs={3}>
                    <span className="bye-games">BYE</span>
                  </Col>
                </>
              ) : (
                <>
                  <Col className="col-games" lg={3} md={2} xs={3}>
                    <img
                      className="img-games"
                      src={
                        partida?.casa?.urlCartola
                          ? `/logos/${partida?.casa.logo}.png`
                          : `${partida?.casa.logo}`
                      }
                      alt={partida.casa.nome}
                      title={partida.casa.nome}
                    />
                  </Col>
                  <Col lg={6} md={6} xs={6} className="button-5-games">
                    <Col className="col-games">
                      <span className="match-games">{partida.placarCasa}</span>
                    </Col>
                    <Col className="col-games">
                      <span className="match-games">-</span>
                    </Col>
                    <Col className="col-games">
                      <span className="match-games">{partida.placarFora}</span>
                    </Col>
                  </Col>
                  <Col className="col-games" lg={3} md={2} xs={3}>
                    <img
                      className="img-games"
                      src={
                        partida?.fora?.urlCartola
                          ? `/logos/${partida?.fora.logo}.png`
                          : `${partida?.fora.logo}`
                      }
                      alt={partida.fora.nome}
                      title={partida.fora.nome}
                    />
                  </Col>
                </>
              )}
            </Row>
          ))}
        </div>
      )}

      <Download />
    </div>
  );
}
