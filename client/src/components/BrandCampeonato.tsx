import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import campeonatosService from "../services/campeonatos";
import cdrLogo from "../assets/LOGOCDR.png";

type campeonatoProps = {
  nome: string;
  tipo: string;
};

type Props = {
  id: string;
};

export function BrandCampeonato(props: Props) {
  const { id } = props;
  const [campeonato, setCampeonato] = useState<campeonatoProps>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    campeonatosService.getCampeonatoInfos(id).then((response) => {
      setCampeonato(response.data[0]);
      setLoading(false);
    });
  }, [id]);

  return (
    <div id="container-brand">
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <img className="img-brand" src={cdrLogo} alt={campeonato?.nome} />
          <span>{campeonato?.nome}</span>
        </>
      )}
    </div>
  );
}
