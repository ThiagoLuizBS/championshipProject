import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import configs from "../assets/configs.png";
import results from "../assets/results.png";

export function Regulamento() {
  return (
    <Container className="container-regulamento">
      <Row className="text-regulamento">
        <Col lg={6} className="col-regulamento">
          <span>Configurações da partida</span>
          <img src={configs} className="img-regulamento" />
        </Col>
        <Col lg={6} className="col-regulamento col-2-regulamento">
          <span>
            É obrigatório enviar o resultado da partida no canal resultados do
            discord.
          </span>
          <span>Exemplo de print:</span>
          <img src={results} className="img-regulamento" />
        </Col>
      </Row>
      <Row className="text-regulamento">
        <span>Só é permitido jogar os jogos de ida por enquanto.</span>
        <span>
          {" "}
          Pode jogar todos as 17 rodadas (não precisa seguir a ordem das
          rodadas).
        </span>
      </Row>
    </Container>
  );
}
