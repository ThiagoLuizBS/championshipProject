import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

type campeonatoProps = {
  id: string;
  name: string;
  table: rowProps[];
};

type rowProps = {
  posicao: number;
  equipe: { id: string; logo: string; nome: string; treinador: string };
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
        setCampeonato(data.camp);
      });
  }, []);

  return (
    <div className="table-responsive">
      <Table className="table table-hover table-dark">
        <thead>
          <tr id="form-table">
            <th className="col-num-table">P</th>
            <th></th>
            <th className="col-name-table">EQUIPE</th>
            <th className="col-num-table">PTS</th>
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
          {campeonato[0]?.table.map((row: rowProps) => (
            <tr key={row.equipe.id} id="form-table">
              <td>{row.posicao}</td>
              <td>
                <img src={row.equipe.logo} alt={row.equipe.nome} width="30px" />
              </td>
              <td className="col-name-table">{row.equipe.nome}</td>
              <td className="col-num-table">{row.pontos}</td>
              <td className="col-num-table">{row.vitorias}</td>
              <td className="col-num-table">{row.empates}</td>
              <td className="col-num-table">{row.derrotas}</td>
              <td className="col-num-table">{row.gols_marcados}</td>
              <td className="col-num-table">{row.gols_sofridos}</td>
              <td className="col-num-table">{row.saldo_de_gols}</td>
              <td className="col-num-table">{row.aproveitamento}</td>
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
