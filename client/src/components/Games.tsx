import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

type partidaProps = {
  idPartida: string;
  casa: { nome: string; logo: string };
  fora: { nome: string; logo: string };
  idCampeonato: string;
  rodada: string;
  status: string;
  placarCasa: string;
  placarFora: string;
};

export function Games() {
  const [rodadas, setRodadas] = useState<partidaProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/rodadas")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.rodada);
        setRodadas(data.rodada);
      });
  }, []);

  return (
    <>
      <div id="games-title-responsive">
        <Row className="rodada-games">
          <Col md={2} id="col-left-games">
            <Button id="button-games">
              <AiOutlineArrowLeft className="botao-left-games" />
            </Button>
          </Col>
          <Col md={8} id="button-games">
            <span>Rodada X</span>
          </Col>
          <Col md={2} id="col-right-games">
            <Button id="button-games">
              <AiOutlineArrowRight className="botao-right-games" />
            </Button>
          </Col>
        </Row>
      </div>
      <div id="games-responsive">
        {rodadas?.map((partida: partidaProps) => (
          <Row className="rodada-games" key={partida.idPartida}>
            <Col md={3}>
              <img src={partida.casa.logo} width="30px" />
            </Col>
            <Col md={6} id="button-games">
              {partida.placarCasa} X {partida.placarFora}
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
