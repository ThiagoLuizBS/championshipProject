import React, { useState, useEffect, Fragment } from "react";
import { Spinner, Table } from "react-bootstrap";
import {
  BsCheckCircleFill,
  BsDashCircleFill,
  BsFillXCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import campeonatosService from "../services/campeonatos";

type campeonatoProps = {
  _id: equipeProps[];
  dados: rowProps[];
};

type equipeProps = {
  id: string;
  logo: string;
  nome: string;
  treinador: string;
  urlCartola: string;
};

type rowProps = {
  posicao: number;
  equipe: { id: string; logo: string; nome: string; treinador: string };
  pontos: number;
  partidas: number;
  vitorias: number;
  empates: number;
  derrotas: number;
  gols_marcados: number;
  gols_sofridos: number;
  saldo_de_gols: number;
  aproveitamento: number;
  forma: string[];
};

type Props = {
  id: string;
};

export function TableApp(props: Props) {
  const [campeonato, setCampeonato] = useState<campeonatoProps[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [width, setWidth] = useState(innerWidth);
  const { id } = props;

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  useEffect(() => {
    campeonatosService.getCampeonatoTabela(id).then((response) => {
      console.log(response.data);
      setCampeonato(response.data);
      setLoading(false);
    });
  }, [id]);

  return (
    <div id="responsive-table">
      {loading ? (
        <div className="spinner">
          <Spinner animation="border" />
        </div>
      ) : (
        <Table className="table table-hover table-dark">
          <thead>
            <tr className="form-th-table">
              <th className="col-num-table">P</th>
              <th></th>
              {width <= 768 ? <></> : <th className="col-num-table">EQUIPE</th>}
              <th className="col-num-table">PT</th>
              <th className="col-num-table">J</th>
              <th className="col-num-table">V</th>
              <th className="col-num-table">E</th>
              <th className="col-num-table">D</th>
              <th className="col-num-table">GM</th>
              <th className="col-num-table">GS</th>
              <th className="col-num-table">SG</th>
              <th className="col-num-table">%</th>
              <th>Últimos jogos</th>
            </tr>
          </thead>
          <tbody>
            {campeonato?.map((row: campeonatoProps) => (
              <tr key={row?._id[0]?.nome} className="form-td-table">
                <td>{row?.dados[0]?.posicao}</td>
                <td>
                  <Link
                    to={`/${id}/equipe/${row?._id[0]?.id}`}
                    className="link-table"
                  >
                    <img
                      className="img-table"
                      src={
                        row?._id[0]?.urlCartola
                          ? `src/assets/${row?._id[0]?.logo}.png`
                          : `${row?._id[0]?.logo}`
                      }
                      alt={row?._id[0]?.nome}
                    />
                  </Link>
                </td>
                {width <= 768 ? (
                  <></>
                ) : (
                  <td className="col-name-table">
                    <Link
                      to={`/${id}/equipe/${row?._id[0]?.id}`}
                      className="link-table"
                    >
                      {row._id[0].nome}
                    </Link>
                  </td>
                )}
                <td className="col-num-table">{row?.dados[0]?.pontos}</td>
                <td className="col-num-table">{row?.dados[0]?.partidas}</td>
                <td className="col-num-table">{row?.dados[0]?.vitorias}</td>
                <td className="col-num-table">{row?.dados[0]?.empates}</td>
                <td className="col-num-table">{row?.dados[0]?.derrotas}</td>
                <td className="col-num-table">
                  {row?.dados[0]?.gols_marcados}
                </td>
                <td className="col-num-table">
                  {row?.dados[0]?.gols_sofridos}
                </td>
                <td className="col-num-table">
                  {row?.dados[0]?.saldo_de_gols}
                </td>
                <td className="col-num-table">
                  {row?.dados[0]?.aproveitamento}%
                </td>
                <td>
                  {row?.dados[0]?.forma.map((resultado: string, i) => (
                    <Fragment key={i}>
                      {resultado === "V" ? (
                        <BsCheckCircleFill
                          className="form-pad-table green-table"
                          title="vitoria"
                        />
                      ) : (
                        <>
                          {resultado === "E" ? (
                            <BsDashCircleFill
                              className="form-pad-table gray-table"
                              title="empate"
                            />
                          ) : (
                            <>
                              {resultado === "D" ? (
                                <BsFillXCircleFill
                                  className="form-pad-table red-table"
                                  title="derrota"
                                />
                              ) : (
                                <></>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </Fragment>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
