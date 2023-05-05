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
  equipe: equipeProps;
  dados: rowProps;
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
  const { id } = props;
  const [campeonato, setCampeonato] = useState<campeonatoProps[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [width, setWidth] = useState(innerWidth);
  const [theme, setTheme] = useState(
    document.querySelector("body")?.getAttribute("data-theme")
  );

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          const newTheme = document
            .querySelector("body")
            ?.getAttribute("data-theme");
          if (newTheme !== undefined && newTheme !== null) setTheme(newTheme);
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
  }, [theme]);

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
        <Table
          className={
            theme === "dark"
              ? "table table-hover table-dark"
              : "table table-hover"
          }
        >
          <thead>
            <tr className="form-th-table">
              <th className="col-num-table radius-left-table">P</th>
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
              <th className="radius-right-table">Últimos jogos</th>
            </tr>
          </thead>
          <tbody>
            {campeonato?.map((row: campeonatoProps) => (
              <tr key={row?.equipe?.id} className="form-td-table">
                <td>{row?.dados?.posicao}</td>
                <td>
                  <Link
                    to={`/${id}/equipe/${row?.equipe?.id}`}
                    className="link-table"
                  >
                    <img
                      className="img-table"
                      src={
                        row?.equipe?.urlCartola
                          ? `/logos/${row?.equipe?.logo}.png`
                          : `${row?.equipe?.logo}`
                      }
                      alt={row?.equipe?.nome}
                      title={row?.equipe?.nome}
                    />
                  </Link>
                </td>
                {width <= 768 ? (
                  <></>
                ) : (
                  <td className="col-name-table">
                    <Link
                      to={`/${id}/equipe/${row?.equipe?.id}`}
                      className="link-table"
                    >
                      {row?.equipe?.nome}
                    </Link>
                  </td>
                )}
                <td className="col-num-table">{row?.dados?.pontos}</td>
                <td className="col-num-table">{row?.dados?.partidas}</td>
                <td className="col-num-table">{row?.dados?.vitorias}</td>
                <td className="col-num-table">{row?.dados?.empates}</td>
                <td className="col-num-table">{row?.dados?.derrotas}</td>
                <td className="col-num-table">{row?.dados?.gols_marcados}</td>
                <td className="col-num-table">{row?.dados?.gols_sofridos}</td>
                <td className="col-num-table">{row?.dados?.saldo_de_gols}</td>
                <td className="col-num-table">{row?.dados?.aproveitamento}%</td>
                <td>
                  {row?.dados?.forma?.map((resultado: string, i) => (
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
