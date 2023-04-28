import { useState, useEffect } from "react";
import { Modal, Button, Col } from "react-bootstrap";
import partidasService from "../services/partidas";

type editProps = {
  match: matchProps;
  show: boolean;
  setShow: Function;
};

type matchProps = {
  idCampeonato: string;
  idPartida: string;
  casa: {
    id: string;
    logo: string;
    nome: string;
    treinador: string;
    urlCartola: string;
  };
  fora: {
    id: string;
    logo: string;
    nome: string;
    treinador: string;
    urlCartola: string;
  };
  data: string;
  placarCasa: string;
  placarFora: string;
};

export function EditGame(editProps: editProps) {
  const { show, setShow, match } = editProps;
  const [placarCasa, setPlacarCasa] = useState<string>("");
  const [placarFora, setPlacarFora] = useState<string>("");

  useEffect(() => {
    setPlacarCasa(match.placarCasa);
    setPlacarFora(match.placarFora);
  }, [show]);

  const handleClose = () => setShow(false);

  const atualizarPartida = () => {
    if (isNaN(parseFloat(placarCasa)) || isNaN(parseFloat(placarFora))) {
      alert("Bota numero carai");
    } else if (match.data !== "") {
      alert("Este jogo ja foi editado!");
    } else {
      partidasService
        .updatePartida(match.idPartida, placarCasa, placarFora)
        .then((response) => {
          setShow(false);
        });
    }
  };

  const inverterPartida = () => {
    if (
      match.data !== "" ||
      match.placarCasa !== "" ||
      match.placarFora !== ""
    ) {
      alert("Este jogo ja foi editado!");
    } else {
      partidasService.inverterPartida(match.idPartida).then((response) => {
        setShow(false);
      });
    }
  };

  const resetarPartida = () => {
    partidasService.resetarPartida(match.idPartida).then((response) => {
      setShow(false);
    });
  };

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
            <img
              className="img-down-admin"
              src={
                match?.casa.urlCartola
                  ? `/logos/${match?.casa.logo}.png`
                  : `${match?.casa.logo}`
              }
              alt={match.casa.nome}
              title={match.casa.nome}
            />
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
            <img
              className="img-down-admin"
              src={
                match?.fora.urlCartola
                  ? `/logos/${match?.fora.logo}.png`
                  : `${match?.fora.logo}`
              }
              alt={match.fora.nome}
              title={match.fora.nome}
            />
          </Col>
        </Col>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button
          variant="danger"
          onClick={(e) => {
            e.preventDefault;
            resetarPartida();
          }}
        >
          Resetar
        </Button>
        <Button
          variant="warning"
          onClick={(e) => {
            e.preventDefault;
            inverterPartida();
          }}
        >
          Inverter
        </Button>
        <Button
          variant="success"
          onClick={(e) => {
            e.preventDefault;
            atualizarPartida();
          }}
        >
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
