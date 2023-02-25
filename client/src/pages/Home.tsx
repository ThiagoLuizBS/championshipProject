import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Games } from "../components/Games";
import { TableApp } from "../components/Table";

export function Home() {
  return (
    <Container>
      <Row md={12}>
        <Col md={9} id="content-side-bar-home">
          <TableApp />
        </Col>
        <Col md={3} id="content-matchs-home">
          <Games />
        </Col>
      </Row>
    </Container>
  );
}
