import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

type rodadasProps = {
  num: string;
  rodada: partidaProps[];
};

type partidaProps = {
  idPartida: string;
  casa: { id: string; logo: string; nome: string; treinador: string };
  fora: { id: string; logo: string; nome: string; treinador: string };
  idCampeonato: string;
  rodada: string;
  status: string;
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
        console.log(data.rodadas);
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
    <>
      <div id="games-title-responsive">
        <Row className="rodada-games">
          <Col md={2} id="col-left-games">
            <Button
              id="button-games"
              onClick={() => alterarRodada("left")}
              disabled={botaoLeft}
            >
              <AiOutlineArrowLeft className="botao-left-games" />
            </Button>
          </Col>
          <Col md={8} id="button-games">
            <span>Rodada {rodadaNum}</span>
          </Col>
          <Col md={2} id="col-right-games">
            <Button
              id="button-games"
              onClick={() => alterarRodada("right")}
              disabled={botaoRight}
            >
              <AiOutlineArrowRight className="botao-right-games" />
            </Button>
          </Col>
        </Row>

        {rodadas[rodadaNum - 1]?.rodada.map((partida: partidaProps) => (
          <Row className="rodada-games" key={partida.idPartida}>
            <Col md={3}>
              <img src={partida.casa.logo} width="30px" />
            </Col>
            <Col md={6} id="button-games">
              {partida.status === "MARCADO" ? (
                <span>A realizar</span>
              ) : (
                <span>
                  {partida.placarCasa} - {partida.placarFora}
                </span>
              )}
            </Col>
            <Col md={3}>
              <img src={partida.fora.logo} width="30px" />
            </Col>
          </Row>
        ))}
      </div>
    </>
  );
}
