import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Games } from "../components/Games";
import { TableApp } from "../components/Table";
import { BrandCampeonato } from "../components/BrandCampeonato";

type Props = {
  id: string;
};

export function Home(props: Props) {
  return (
    <Container>
      <Row md={12}>
        <Col lg={12}>
          <BrandCampeonato id={props.id} />
        </Col>
        <Col lg={9} id="table-home">
          <TableApp id={props.id} />
        </Col>
        <Col lg={3} id="games-home">
          <Games id={props.id} />
        </Col>
      </Row>
    </Container>
  );
}
