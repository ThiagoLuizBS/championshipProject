import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Download } from "./Download";

type rodadasProps = {
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

export function Games() {
  const [rodadaNum, setRodadaNum] = useState<number>(1);
  const [rodadas, setRodadas] = useState<rodadasProps[]>([]);
  const [botaoLeft, setBotaoLeft] = useState<boolean>(true);
  const [botaoRight, setBotaoRight] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://championship-project-9hyg.vercel.app/rodadas")
      .then((response) => response.json())
      .then((data) => {
        setRodadas(data.rodadas);
      });
  }, []);

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
    if (rodadaNum + alt === 34) setBotaoRight(true);
    else if (rodadaNum + alt === 1) setBotaoLeft(true);
    else {
      setBotaoRight(false);
      setBotaoLeft(false);
    }
  };

  return (
    <div id="responsive-games">
      <div id="content-games">
        <Row className="rodada-games">
          <Col className="col-games" xs={3}>
            <Button
              id="button-1-games"
              onClick={() => alterarRodada("left")}
              disabled={botaoLeft}
            >
              <AiOutlineArrowLeft />
            </Button>
          </Col>
          <Col id="button-2-games" lg={6} md={5} xs={6}>
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
                <Col lg={6} md={6} xs={6} id="button-4-games">
                  {partida.status === "MARCADO" ? (
                    <span>Sem partida</span>
                  ) : (
                    <span>
                      {partida.placarCasa} - {partida.placarFora}
                    </span>
                  )}
                </Col>
                <Col className="col-games" lg={3} md={2} xs={3}>
                  <span className="bye-games">BYE</span>
                </Col>
              </>
            ) : (
              <>
                <Col className="col-games" lg={3} md={2} xs={3}>
                  <img className="img-games" src={partida.casa.logo} />
                </Col>
                <Col lg={6} md={6} xs={6} id="button-5-games">
                  {partida.status === "MARCADO" ? (
                    <span>A realizar</span>
                  ) : (
                    <span>
                      {partida.placarCasa} - {partida.placarFora}
                    </span>
                  )}
                </Col>
                <Col className="col-games" lg={3} md={2} xs={3}>
                  <img className="img-games" src={partida.fora.logo} />
                </Col>
              </>
            )}
          </Row>
        ))}
      </div>

      <Download />
    </div>
  );
}
