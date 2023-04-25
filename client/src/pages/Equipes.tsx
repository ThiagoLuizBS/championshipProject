import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import equipesService from "../services/equipes";

type equipesProps = {
  id: string;
  logo: string;
  nome: string;
  treinador: string;
  urlCartola: string;
};

type Props = {
  id: string;
};

export function Equipes(props: Props) {
  const { id } = props;
  const [equipes, setEquipes] = useState<equipesProps[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    equipesService.getEquipesByCampeonato(id).then((response) => {
      console.log(response.data[0].equipes);
      setEquipes(response.data[0].equipes);
      setLoading(false);
    });
  }, [id]);

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
              <Link to={`/${id}/equipe/${equipe.id}`} className="link-equipes">
                <Row className="row-equipes">
                  <Col lg={5} sm={5} xs={6}>
                    <Col>
                      <img
                        className="img-equipes"
                        src={
                          equipe?.urlCartola
                            ? `/logos/${equipe?.logo}.png`
                            : `${equipe?.logo}`
                        }
                      />
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
