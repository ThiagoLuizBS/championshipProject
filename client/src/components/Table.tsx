import React, { useState, useEffect, Fragment } from "react";
import { Spinner, Table } from "react-bootstrap";
import {
  BsCheckCircleFill,
  BsDashCircleFill,
  BsFillXCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

type campeonatoProps = {
  id: string;
  name: string;
  table: rowProps[];
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

export function TableApp() {
  const [campeonato, setCampeonato] = useState<campeonatoProps>();
  const [loading, setLoading] = useState<Boolean>(true);
  const [width, setWidth] = useState(innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  useEffect(() => {
    fetch("https://championship-project-9hyg.vercel.app/camp")
      .then((response) => response.json())
      .then((data) => {
        setCampeonato(data.camp[0]);
        setLoading(false);
      });
  }, []);

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
            {campeonato?.table.map((row: rowProps) => (
              <tr key={row.equipe.nome} className="form-td-table">
                <td>{row.posicao}</td>
                <td>
                  <Link to={`/equipes/${row.equipe.id}`} className="link-table">
                    <img
                      className="img-table"
                      src={row.equipe.logo}
                      alt={row.equipe.nome}
                    />
                  </Link>
                </td>
                {width <= 768 ? (
                  <></>
                ) : (
                  <td className="col-name-table">
                    <Link
                      to={`/equipes/${row.equipe.id}`}
                      className="link-table"
                    >
                      {row.equipe.nome}
                    </Link>
                  </td>
                )}
                <td className="col-num-table">{row.pontos}</td>
                <td className="col-num-table">{row.partidas}</td>
                <td className="col-num-table">{row.vitorias}</td>
                <td className="col-num-table">{row.empates}</td>
                <td className="col-num-table">{row.derrotas}</td>
                <td className="col-num-table">{row.gols_marcados}</td>
                <td className="col-num-table">{row.gols_sofridos}</td>
                <td className="col-num-table">{row.saldo_de_gols}</td>
                <td className="col-num-table">{row.aproveitamento}%</td>
                <td>
                  {row.forma.map((resultado: string, i) => (
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
