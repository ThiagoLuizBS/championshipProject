import express from "express";
import cors from "cors";
import router from "./src/api/cdr.routes.js";
import campeonatosController from "./src/api/campeonatos.controller.js";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});

app.use("/api", router);

/* cartola */

const rodada1Cartola = [
  {
    idCampeonato: "2",
    rodada: 1,
    idPartida: "2000",
    tipo: "cartola",
    data: "2023-03-02T15:46:48.934Z",
    casa: "101",
    fora: "109",
    placarCasa: "80,96",
    placarFora: "58,76",
  },
  {
    idCampeonato: "2",
    rodada: 1,
    idPartida: "2001",
    tipo: "cartola",
    data: "2023-03-02T15:46:48.934Z",
    casa: "111",
    fora: "114",
    placarCasa: "72,41",
    placarFora: "49,16",
  },
  {
    idCampeonato: "2",
    rodada: 1,
    idPartida: "2002",
    tipo: "cartola",
    data: "2023-03-02T15:46:48.934Z",
    casa: "102",
    fora: "104",
    placarCasa: "58,97",
    placarFora: "72,83",
  },
  {
    idCampeonato: "2",
    rodada: 1,
    idPartida: "2003",
    tipo: "cartola",
    data: "2023-03-02T15:46:48.934Z",
    casa: "118",
    fora: "103",
    placarCasa: "73,11",
    placarFora: "79,37",
  },
  {
    idCampeonato: "2",
    rodada: 1,
    idPartida: "2004",
    tipo: "cartola",
    data: "2023-03-02T15:46:48.934Z",
    casa: "110",
    fora: "107",
    placarCasa: "61,61",
    placarFora: "52,00",
  },
  {
    idCampeonato: "2",
    rodada: 1,
    idPartida: "2005",
    tipo: "cartola",
    data: "2023-03-02T15:46:48.934Z",
    casa: "117",
    fora: "108",
    placarCasa: "61,77",
    placarFora: "58,61",
  },
  {
    idCampeonato: "2",
    rodada: 1,
    idPartida: "2006",
    tipo: "cartola",
    data: "2023-03-02T15:46:48.934Z",
    casa: "112",
    fora: "113",
    placarCasa: "56,76",
    placarFora: "0,00",
  },
  {
    idCampeonato: "2",
    rodada: 1,
    idPartida: "2007",
    tipo: "cartola",
    data: "2023-03-02T15:46:48.934Z",
    casa: "105",
    fora: "115",
    placarCasa: "42,71",
    placarFora: "67,01",
  },
  {
    idCampeonato: "2",
    rodada: 1,
    idPartida: "2008",
    tipo: "cartola",
    data: "2023-03-02T15:46:48.934Z",
    casa: "116",
    fora: "106",
    placarCasa: "45,77",
    placarFora: "91,66",
  },
  {
    idCampeonato: "2",
    rodada: 1,
    idPartida: "2009",
    tipo: "cartola",
    data: "2023-03-02T15:46:48.934Z",
    casa: "119",
    fora: "120",
    placarCasa: "0,00",
    placarFora: "79,22",
  },
];

const rodada2Cartola = [
  {
    idCampeonato: "2",
    rodada: 2,
    idPartida: "2010",
    tipo: "cartola",
    data: "",
    casa: "120",
    fora: "101",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 2,
    idPartida: "2011",
    tipo: "cartola",
    data: "",
    casa: "114",
    fora: "119",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 2,
    idPartida: "2012",
    tipo: "cartola",
    data: "",
    casa: "104",
    fora: "109",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 2,
    idPartida: "2013",
    tipo: "cartola",
    data: "",
    casa: "103",
    fora: "111",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 2,
    idPartida: "2014",
    tipo: "cartola",
    data: "",
    casa: "107",
    fora: "102",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 2,
    idPartida: "2015",
    tipo: "cartola",
    data: "",
    casa: "108",
    fora: "118",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 2,
    idPartida: "2016",
    tipo: "cartola",
    data: "",
    casa: "113",
    fora: "110",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 2,
    idPartida: "2017",
    tipo: "cartola",
    data: "",
    casa: "115",
    fora: "117",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 2,
    idPartida: "2018",
    tipo: "cartola",
    data: "",
    casa: "106",
    fora: "112",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 2,
    idPartida: "2019",
    tipo: "cartola",
    data: "",
    casa: "116",
    fora: "105",
    placarCasa: "",
    placarFora: "",
  },
];

const rodada3Cartola = [
  {
    idCampeonato: "2",
    rodada: 3,
    idPartida: "2020",
    tipo: "cartola",
    data: "",
    casa: "101",
    fora: "104",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 3,
    idPartida: "2021",
    tipo: "cartola",
    data: "",
    casa: "114",
    fora: "103",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 3,
    idPartida: "2022",
    tipo: "cartola",
    data: "",
    casa: "109",
    fora: "120",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 3,
    idPartida: "2023",
    tipo: "cartola",
    data: "",
    casa: "119",
    fora: "107",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 3,
    idPartida: "2024",
    tipo: "cartola",
    data: "",
    casa: "111",
    fora: "108",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 3,
    idPartida: "2025",
    tipo: "cartola",
    data: "",
    casa: "102",
    fora: "113",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 3,
    idPartida: "2026",
    tipo: "cartola",
    data: "",
    casa: "118",
    fora: "115",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 3,
    idPartida: "2027",
    tipo: "cartola",
    data: "",
    casa: "110",
    fora: "106",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 3,
    idPartida: "2028",
    tipo: "cartola",
    data: "",
    casa: "117",
    fora: "116",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 3,
    idPartida: "2029",
    tipo: "cartola",
    data: "",
    casa: "112",
    fora: "105",
    placarCasa: "",
    placarFora: "",
  },
];

// setTimeout(async () => {
//   const post = await partidasController.apiCreatePartida(rodada1Cartola);
//   console.log(post3);
// }, 2000);

// setTimeout(async () => {
//   const post = await campeonatosController.apiUpdateTabela("1001");
// }, 4000);

export default app;
