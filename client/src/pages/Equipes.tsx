import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

type equipesProps = {
  id: string;
  logo: string;
  nome: string;
  treinador: string;
};

export function Equipes() {
  const [equipes, setEquipes] = useState<equipesProps[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    fetch("https://championship-project-9hyg.vercel.app/equipes")
      .then((response) => response.json())
      .then((data) => {
        setEquipes(data.equipes);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="container-equipes">
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" />
        </div>
      ) : (
        <Row lg={12} xs={12}>
          {equipes?.map((equipe: equipesProps) => (
            <Col key={equipe.id} lg={6} className="col-equipes">
              <Link to={`/equipes/${equipe.id}`} className="link-equipes">
                <Row className="row-equipes">
                  <Col lg={5} sm={5} xs={6}>
                    <Col>
                      <img className="img-equipes" src={equipe.logo} />
                    </Col>
                    <Col className="nome-equipes">
                      <span>{equipe.nome}</span>
                    </Col>
                  </Col>
                  <Col lg={5} sm={5} xs={6}>
                    <Col className="treinador-equipes">Treinador</Col>
                    <Col>
                      <span className="treinador-nome-equipes">
                        {equipe.treinador}
                      </span>
                    </Col>
                  </Col>
                </Row>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
