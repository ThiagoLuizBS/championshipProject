import express from "express";
import cors from "cors";
import router from "./src/api/cdr.routes.js";
import partidasController from "./src/api/partidas.controller.js";

const app = express();
app.use(express.json());

app.options(
  "*",
  cors({
    allowedHeaders: ["Content-Type"],
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});

app.use("/api", router);

/* cartola */

const rodada = [
  {
    idCampeonato: "2",
    rodada: 19,
    idPartida: "2180",
    tipo: "cartola",
    data: "",
    casa: "101",
    fora: "116",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 19,
    idPartida: "2181",
    tipo: "cartola",
    data: "",
    casa: "106",
    fora: "117",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 19,
    idPartida: "2182",
    tipo: "cartola",
    data: "",
    casa: "115",
    fora: "102",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 19,
    idPartida: "2183",
    tipo: "cartola",
    data: "",
    casa: "113",
    fora: "114",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 19,
    idPartida: "2184",
    tipo: "cartola",
    data: "",
    casa: "108",
    fora: "107",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 19,
    idPartida: "2185",
    tipo: "cartola",
    data: "",
    casa: "112",
    fora: "109",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 19,
    idPartida: "2186",
    tipo: "cartola",
    data: "",
    casa: "105",
    fora: "103",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 19,
    idPartida: "2187",
    tipo: "cartola",
    data: "",
    casa: "110",
    fora: "104",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 19,
    idPartida: "2188",
    tipo: "cartola",
    data: "",
    casa: "119",
    fora: "118",
    placarCasa: "",
    placarFora: "",
  },
  {
    idCampeonato: "2",
    rodada: 19,
    idPartida: "2189",
    tipo: "cartola",
    data: "",
    casa: "120",
    fora: "111",
    placarCasa: "",
    placarFora: "",
  },
];

// setTimeout(async () => {
//   const post = await partidasController.apiCreatePartida(rodada);
//   console.log(post);
// }, 2000);

export default app;
