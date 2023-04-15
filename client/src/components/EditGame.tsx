import { useState, useEffect } from "react";
import { Modal, Button, Col } from "react-bootstrap";

type editProps = {
  match: matchProps;
  show: boolean;
  setShow: Function;
};

type matchProps = {
  idCampeonato: string;
  idPartida: string;
  casa: { id: string; logo: string; nome: string; treinador: string };
  fora: { id: string; logo: string; nome: string; treinador: string };
  status: string;
  data: string;
  placarCasa: string;
  placarFora: string;
};

export function EditGame(editProps: editProps) {
  const { show, setShow, match } = editProps;
  const [placarCasa, setPlacarCasa] = useState<string>("");
  const [placarFora, setPlacarFora] = useState<string>("");

  const handleClose = () => setShow(false);

  useEffect(() => {
    setPlacarCasa(match.placarCasa);
    setPlacarFora(match.placarFora);
  }, [show]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      keyboard={false}
      className="modal-editgame"
    >
      <Modal.Body>
        <Col
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className="partida-admin"
          key={match.idPartida}
        >
          <Col className="col-down-admin">
            <img className="img-down-admin" src={match.casa.logo} />
          </Col>
          <Col className="col-2-admin">
            <Col className="col-down-admin">
              <input
                className="match-admin"
                size={1}
                value={placarCasa}
                onChange={(e) => setPlacarCasa(e.target.value)}
              />
            </Col>
            <Col className="col-down-admin">
              <span className="match-admin">-</span>
            </Col>
            <Col className="col-down-admin">
              <input
                className="match-admin"
                size={1}
                value={placarFora}
                onChange={(e) => setPlacarFora(e.target.value)}
              />
            </Col>
          </Col>
          <Col className="col-down-admin">
            <img className="img-down-admin" src={match.fora.logo} />
          </Col>
        </Col>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="success">Salvar</Button>
      </Modal.Footer>
    </Modal>
  );
}
