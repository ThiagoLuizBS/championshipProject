import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

type campeonatoProps = {
  id: string;
  name: string;
  season: string;
  img: string;
  table: rowProps[];
};

type rowProps = {
  posicao: number;
  nome: string;
  logo: string;
  pontos: number;
  vitorias: number;
  empates: number;
  derrotas: number;
  gols_marcados: number;
  gols_sofridos: number;
  saldo_de_gols: number;
  aproveitamento: string;
  forma: string[];
};

export function TableApp() {
  const [campeonato, setCampeonato] = useState<campeonatoProps[]>([]);

  useEffect(() => {
    fetch("https://championship-project-9hyg.vercel.app/camp")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.camp);
        setCampeonato(data.camp);
      });
  }, []);

  return (
    <div className="table-responsive">
      <Table className="table table-hover table-dark">
        <thead>
          <tr id="form-table">
            <th>P</th>
            <th></th>
            <th style={{ textAlign: "start", paddingRight: "100px" }}>
              EQUIPE
            </th>
            <th>PTS</th>
            <th>V</th>
            <th>E</th>
            <th>D</th>
            <th>GM</th>
            <th>GS</th>
            <th>SG</th>
            <th>%</th>
            <th>Últimos jogos</th>
          </tr>
        </thead>
        <tbody>
          {campeonato[0]?.table.map((row: rowProps) => (
            <tr key={row.nome} id="form-table">
              <td>{row.posicao}</td>
              <td>
                <img
                  src={row.logo}
                  alt={row.nome}
                  width="30px"
                  className="logo-table"
                />
              </td>
              <td style={{ textAlign: "start" }}>{row.nome}</td>
              <td>{row.pontos}</td>
              <td>{row.vitorias}</td>
              <td>{row.empates}</td>
              <td>{row.derrotas}</td>
              <td>{row.gols_marcados}</td>
              <td>{row.gols_sofridos}</td>
              <td>{row.saldo_de_gols}</td>
              <td>{row.aproveitamento}</td>
              <td>
                {row.forma.map((partida: string, i) => (
                  <>
                    {partida === "V" ? (
                      <img
                        key={i}
                        className="form-pad-table"
                        src="https://cdn-icons-png.flaticon.com/512/9426/9426997.png"
                        width="20px"
                        alt="vitoria"
                        title="vitoria"
                      />
                    ) : (
                      <>
                        {partida === "E" ? (
                          <img
                            key={i}
                            className="form-pad-table"
                            src="https://cdn-icons-png.flaticon.com/512/7193/7193157.png"
                            width="20px"
                            alt="empate"
                            title="empate"
                          />
                        ) : (
                          <img
                            key={i}
                            className="form-pad-table"
                            src="https://cdn-icons-png.flaticon.com/512/3389/3389152.png"
                            width="20px"
                            alt="derrota"
                            title="derrota"
                          />
                        )}
                      </>
                    )}
                  </>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
