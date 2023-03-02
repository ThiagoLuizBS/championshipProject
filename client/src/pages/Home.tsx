import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Games } from "../components/Games";
import { TableApp } from "../components/Table";

export function Home() {
  return (
    <Container>
      <Row md={12}>
        <Col lg={9} id="table-home">
          <TableApp />
        </Col>
        <Col lg={3} id="games-home">
          <Games />
        </Col>
      </Row>
    </Container>
  );
}
