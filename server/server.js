import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

//app.use("/api/v1/football", football);
//app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

//daqui pra baixo API testes
const partidas = [
  {
    idMatch: "2",
    equipeCasa: "Real Madrid",
    equipeFora: "Barcelona",
    data: "14:00",
    placarCasa: "2",
    placarFora: "0",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/19/83.png",
  },
  {
    idMatch: "3",
    equipeCasa: "Liverpool",
    equipeFora: "Manchester United",
    data: "15:00",
    placarCasa: "4",
    placarFora: "3",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/8/8.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/14/14.png",
  },
  {
    idMatch: "2",
    equipeCasa: "Real Madrid",
    equipeFora: "Barcelona",
    data: "14:00",
    placarCasa: "2",
    placarFora: "0",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/19/83.png",
  },
  {
    idMatch: "3",
    equipeCasa: "Liverpool",
    equipeFora: "Manchester United",
    data: "15:00",
    placarCasa: "4",
    placarFora: "3",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/8/8.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/14/14.png",
  },
  {
    idMatch: "2",
    equipeCasa: "Real Madrid",
    equipeFora: "Barcelona",
    data: "14:00",
    placarCasa: "2",
    placarFora: "0",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/19/83.png",
  },
  {
    idMatch: "3",
    equipeCasa: "Liverpool",
    equipeFora: "Manchester United",
    data: "15:00",
    placarCasa: "4",
    placarFora: "3",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/8/8.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/14/14.png",
  },
  {
    idMatch: "2",
    equipeCasa: "Real Madrid",
    equipeFora: "Barcelona",
    data: "14:00",
    placarCasa: "2",
    placarFora: "0",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/19/83.png",
  },
  {
    idMatch: "3",
    equipeCasa: "Liverpool",
    equipeFora: "Manchester United",
    data: "15:00",
    placarCasa: "4",
    placarFora: "3",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/8/8.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/14/14.png",
  },
  {
    idMatch: "2",
    equipeCasa: "Real Madrid",
    equipeFora: "Barcelona",
    data: "14:00",
    placarCasa: "2",
    placarFora: "0",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/19/83.png",
  },
  {
    idMatch: "3",
    equipeCasa: "Liverpool",
    equipeFora: "Manchester United",
    data: "15:00",
    placarCasa: "4",
    placarFora: "3",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/8/8.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/14/14.png",
  },
  {
    idMatch: "2",
    equipeCasa: "Real Madrid",
    equipeFora: "Barcelona",
    data: "14:00",
    placarCasa: "2",
    placarFora: "0",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/19/83.png",
  },
  {
    idMatch: "3",
    equipeCasa: "Liverpool",
    equipeFora: "Manchester United",
    data: "15:00",
    placarCasa: "4",
    placarFora: "3",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/8/8.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/14/14.png",
  },
  {
    idMatch: "2",
    equipeCasa: "Real Madrid",
    equipeFora: "Barcelona",
    data: "14:00",
    placarCasa: "2",
    placarFora: "0",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/19/83.png",
  },
  {
    idMatch: "3",
    equipeCasa: "Liverpool",
    equipeFora: "Manchester United",
    data: "15:00",
    placarCasa: "4",
    placarFora: "3",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/8/8.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/14/14.png",
  },
  {
    idMatch: "2",
    equipeCasa: "Real Madrid",
    equipeFora: "Barcelona",
    data: "14:00",
    placarCasa: "2",
    placarFora: "0",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/19/83.png",
  },
  {
    idMatch: "3",
    equipeCasa: "Liverpool",
    equipeFora: "Manchester United",
    data: "15:00",
    placarCasa: "4",
    placarFora: "3",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/8/8.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/14/14.png",
  },
  {
    idMatch: "2",
    equipeCasa: "Real Madrid",
    equipeFora: "Barcelona",
    data: "14:00",
    placarCasa: "2",
    placarFora: "0",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/19/83.png",
  },
  {
    idMatch: "3",
    equipeCasa: "Liverpool",
    equipeFora: "Manchester United",
    data: "15:00",
    placarCasa: "4",
    placarFora: "3",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/8/8.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/14/14.png",
  },
  {
    idMatch: "2",
    equipeCasa: "Real Madrid",
    equipeFora: "Barcelona",
    data: "14:00",
    placarCasa: "2",
    placarFora: "0",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/19/83.png",
  },
  {
    idMatch: "3",
    equipeCasa: "Liverpool",
    equipeFora: "Manchester United",
    data: "15:00",
    placarCasa: "4",
    placarFora: "3",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/8/8.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/14/14.png",
  },
  {
    idMatch: "2",
    equipeCasa: "Real Madrid",
    equipeFora: "Barcelona",
    data: "14:00",
    placarCasa: "2",
    placarFora: "0",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/19/83.png",
  },
  {
    idMatch: "3",
    equipeCasa: "Liverpool",
    equipeFora: "Manchester United",
    data: "15:00",
    placarCasa: "4",
    placarFora: "3",
    imgUrlCasa: "https://cdn.sportmonks.com/images/soccer/teams/8/8.png",
    imgUrlFora: "https://cdn.sportmonks.com/images/soccer/teams/14/14.png",
  },
];

const match = [
  {
    _id: "63deba8f8d667aa21a950462",
    idMatch: "1013",
    idTitle: "Atlético Madrid x Getafe - 04/02/2023 14:30",
    championship: "Campeonato Espanhol - 2022/2023",
    turn: "20ª Rodada",
    status: "ENCERRADO",
    time: "ENCERRADO",
    day: "04/02/2023",
    schedule: "14:30",
    referee: "Antonio Miguel Mateu Lahoz",
    stadium: "Estádio Wanda Metropolitano (Madrid)",
    scoreHome: "1",
    scoreAway: "1",
    teams: {
      homeId: "",
      homeName: "Atlético Madrid",
      homeImg:
        "https://www.placardefutebol.com.br/images/teams/atletico-madrid.png",
      awayId: "",
      awayName: "Getafe",
      awayImg: "https://www.placardefutebol.com.br/images/teams/getafe.png",
    },
    events: [
      {
        side: "fora",
        description: "Djené",
        time: "2'",
        type: "YC",
      },
      {
        side: "fora",
        description: "Portu",
        time: "34'",
        type: "YC",
      },
      {
        side: "fora",
        description: "Aleñà",
        time: "47'",
        type: "YC",
      },
      {
        side: "casa",
        description: "Koke",
        time: "57'",
        type: "YC",
      },
      {
        side: "casa",
        description: "Ángel Correa",
        time: "60'",
        type: "GOAL",
      },
      {
        side: "casa",
        description: "Saúl",
        time: "81'",
        type: "YC",
      },
      {
        side: "fora",
        description: "Enes Ünal (pênalti)",
        time: "83'",
        type: "GOAL",
      },
      {
        side: "casa",
        description: "Memphis Depay",
        time: "90'",
        type: "YC",
      },
      {
        side: "fora",
        description: "Munir",
        time: "95'",
        type: "YC",
      },
      {
        side: "fora",
        description: "Pedro Álvarez Sosa",
        time: "96'",
        type: "YC",
      },
    ],
    statistics: [
      {
        type: "Posse de bola (%)",
        home: "63",
        away: "37",
      },
      {
        type: "Total de passes",
        home: "633",
        away: "386",
      },
      {
        type: "Passes corretos (%)",
        home: "82",
        away: "68",
      },
      {
        type: "Total de chutes",
        home: "15",
        away: "10",
      },
      {
        type: "Chutes no gol",
        home: "6",
        away: "1",
      },
      {
        type: "Escanteios",
        home: "8",
        away: "0",
      },
      {
        type: "Faltas cometidas",
        home: "11",
        away: "18",
      },
    ],
    lineups: {
      homeStarting: [
        {
          num: "13.",
          name: " Jan Oblak",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "15.",
          name: " Stefan Savić",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "16.",
          name: " Nahuel Molina",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "22.",
          name: " Hermoso",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "23.",
          name: " Reinildo",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "5.",
          name: " Rodrigo De Paul",
          actions: {
            substitution: "out",
            card: "",
            goals: [],
          },
        },
        {
          num: "6.",
          name: " Koke (C)",
          actions: {
            substitution: "",
            card: "YC",
            goals: [],
          },
        },
        {
          num: "10.",
          name: " Ángel Correa",
          actions: {
            substitution: "out",
            card: "",
            goals: ["GOAL"],
          },
        },
        {
          num: "11.",
          name: " Thomas Lemar",
          actions: {
            substitution: "out",
            card: "",
            goals: [],
          },
        },
        {
          num: "8.",
          name: " Antoine Griezmann",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "19.",
          name: " Morata",
          actions: {
            substitution: "out",
            card: "",
            goals: [],
          },
        },
      ],
      awayStarting: [
        {
          num: "13.",
          name: " David Soria",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "2.",
          name: " Djené (C)",
          actions: {
            substitution: "",
            card: "YC",
            goals: [],
          },
        },
        {
          num: "4.",
          name: " Pedro Álvarez Sosa",
          actions: {
            substitution: "",
            card: "YC",
            goals: [],
          },
        },
        {
          num: "6.",
          name: " Domingos Duarte",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "9.",
          name: " Portu",
          actions: {
            substitution: "out",
            card: "YC",
            goals: [],
          },
        },
        {
          num: "15.",
          name: " Omar Alderete",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "5.",
          name: " Luis Milla",
          actions: {
            substitution: "out",
            card: "",
            goals: [],
          },
        },
        {
          num: "11.",
          name: " Aleñà",
          actions: {
            substitution: "out",
            card: "YC",
            goals: [],
          },
        },
        {
          num: "18.",
          name: " Mauro Arambarri",
          actions: {
            substitution: "out",
            card: "",
            goals: [],
          },
        },
        {
          num: "10.",
          name: " Enes Ünal",
          actions: {
            substitution: "",
            card: "",
            goals: ["GOAL"],
          },
        },
        {
          num: "19.",
          name: " Borja Mayoral",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
      ],
      homeBench: [
        {
          num: "1.",
          name: " Ivo Grbić",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "31.",
          name: " Antonio Alemán",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "2.",
          name: " José Giménez",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "3.",
          name: " Reguilón",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "12.",
          name: " Matt Doherty",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "4.",
          name: " Geoffrey Kondogbia",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "14.",
          name: " Llorente",
          actions: {
            substitution: "in",
            card: "",
            goals: [],
          },
        },
        {
          num: "17.",
          name: " Saúl",
          actions: {
            substitution: "in",
            card: "YC",
            goals: [],
          },
        },
        {
          num: "20.",
          name: " Axel Witsel",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "21.",
          name: " Yannick Carrasco",
          actions: {
            substitution: "in",
            card: "",
            goals: [],
          },
        },
        {
          num: "24.",
          name: " P. Rivas",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "9.",
          name: " Memphis Depay",
          actions: {
            substitution: "in",
            card: "YC",
            goals: [],
          },
        },
      ],
      awayBench: [
        {
          num: "1.",
          name: " Kiko Casilla",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "27.",
          name: " Diego Conde",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "12.",
          name: " Jordan Amavi",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "22.",
          name: " Damián Suárez",
          actions: {
            substitution: "in",
            card: "",
            goals: [],
          },
        },
        {
          num: "23.",
          name: " Stefan Mitrovic",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "8.",
          name: " Jaime Seoane",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "16.",
          name: " Ángel Algobia",
          actions: {
            substitution: "in",
            card: "",
            goals: [],
          },
        },
        {
          num: "20.",
          name: " Nemanja Maksimović",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "24.",
          name: " Gonzalo Villar",
          actions: {
            substitution: "in",
            card: "",
            goals: [],
          },
        },
        {
          num: "7.",
          name: " Mata",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "14.",
          name: " Latasa",
          actions: {
            substitution: "",
            card: "",
            goals: [],
          },
        },
        {
          num: "17.",
          name: " Munir",
          actions: {
            substitution: "in",
            card: "YC",
            goals: [],
          },
        },
      ],
    },
  },
];

const equipes = [
  {
    id: "1",
    name: "Real Madrid",
    logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
    locality: "Madrid, Espanha",
  },
  {
    id: "2",
    name: "Liverpool",
    logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
    locality: "Liverpool, United Kindgon",
  },
  {
    id: "3",
    name: "Manchester United",
    logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
    locality: "Manchester, United Kindgon",
  },
  {
    id: "4",
    name: "Manchester City",
    logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
    locality: "Manchester, United Kindgon",
  },
  {
    id: "5",
    name: "United Kingdon",
    logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
    locality: "Liverpool, United Kindgon",
  },
  {
    id: "6",
    name: "Barcelona",
    logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
    locality: "Madrid, Espanha",
  },
  {
    id: "7",
    name: "Real Zaragoza",
    logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
    locality: "Madrid, Espanha",
  },
  {
    id: "8",
    name: "Liverton",
    logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
    locality: "Liverpool, United Kindgon",
  },
];

const equipe = [
  {
    id: "1",
    name: "Real Madrid",
    img: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
    locality: "Madrid, Espanha",
    stadium: "Santiago Bernabeu",
  },
];

const camp = [
  {
    id: "1",
    name: "Premier League",
    season: "2022/2023",
    img: "https://static.wikia.nocookie.net/universecwsports/images/3/37/PLeng.png/revision/latest?cb=20200404132848&path-prefix=es",
    table: [
      {
        posicao: 1,
        logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
        nome: "Time A",
        pontos: 28,
        vitorias: 9,
        empates: 1,
        derrotas: 2,
        gols_marcados: 25,
        gols_sofridos: 12,
        saldo_de_gols: 13,
        aproveitamento: "80.0%",
        forma: ["V", "V", "D", "V", "E"],
      },
      {
        posicao: 2,
        logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
        nome: "Time B",
        pontos: 28,
        vitorias: 9,
        empates: 1,
        derrotas: 2,
        gols_marcados: 25,
        gols_sofridos: 12,
        saldo_de_gols: 13,
        aproveitamento: "80.0%",
        forma: ["V", "V", "D", "V", "E"],
      },
      {
        posicao: 3,
        logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
        nome: "Time C",
        pontos: 28,
        vitorias: 9,
        empates: 1,
        derrotas: 2,
        gols_marcados: 25,
        gols_sofridos: 12,
        saldo_de_gols: 13,
        aproveitamento: "80.0%",
        forma: ["V", "V", "D", "V", "E"],
      },
      {
        posicao: 4,
        logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
        nome: "Time D",
        pontos: 28,
        vitorias: 9,
        empates: 1,
        derrotas: 2,
        gols_marcados: 25,
        gols_sofridos: 12,
        saldo_de_gols: 13,
        aproveitamento: "80.0%",
        forma: ["V", "V", "D", "V", "E"],
      },
      {
        posicao: 5,
        logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
        nome: "Time E",
        pontos: 28,
        vitorias: 9,
        empates: 1,
        derrotas: 2,
        gols_marcados: 25,
        gols_sofridos: 12,
        saldo_de_gols: 13,
        aproveitamento: "80.0%",
        forma: ["V", "V", "D", "V", "E"],
      },
      {
        posicao: 6,
        logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
        nome: "Time F",
        pontos: 28,
        vitorias: 9,
        empates: 1,
        derrotas: 2,
        gols_marcados: 25,
        gols_sofridos: 12,
        saldo_de_gols: 13,
        aproveitamento: "80.0%",
        forma: ["V", "V", "D", "V", "E"],
      },
      {
        posicao: 7,
        logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
        nome: "Time G",
        pontos: 28,
        vitorias: 9,
        empates: 1,
        derrotas: 2,
        gols_marcados: 25,
        gols_sofridos: 12,
        saldo_de_gols: 13,
        aproveitamento: "80.0%",
        forma: ["V", "V", "D", "V", "E"],
      },
      {
        posicao: 8,
        logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
        nome: "Time H",
        pontos: 28,
        vitorias: 9,
        empates: 1,
        derrotas: 2,
        gols_marcados: 25,
        gols_sofridos: 12,
        saldo_de_gols: 13,
        aproveitamento: "80.0%",
        forma: ["V", "V", "D", "V", "E"],
      },
      {
        posicao: 9,
        logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
        nome: "Time I",
        pontos: 28,
        vitorias: 9,
        empates: 1,
        derrotas: 2,
        gols_marcados: 25,
        gols_sofridos: 12,
        saldo_de_gols: 13,
        aproveitamento: "80.0%",
        forma: ["V", "V", "D", "V", "E"],
      },
      {
        posicao: 10,
        logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
        nome: "Time J",
        pontos: 28,
        vitorias: 9,
        empates: 1,
        derrotas: 2,
        gols_marcados: 25,
        gols_sofridos: 12,
        saldo_de_gols: 13,
        aproveitamento: "80.0%",
        forma: ["V", "V", "D", "V", "E"],
      },
      {
        posicao: 11,
        logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
        nome: "Time K",
        pontos: 28,
        vitorias: 9,
        empates: 1,
        derrotas: 2,
        gols_marcados: 25,
        gols_sofridos: 12,
        saldo_de_gols: 13,
        aproveitamento: "80.0%",
        forma: ["V", "V", "D", "V", "E"],
      },
      {
        posicao: 12,
        logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
        nome: "Time L",
        pontos: 28,
        vitorias: 9,
        empates: 1,
        derrotas: 2,
        gols_marcados: 25,
        gols_sofridos: 12,
        saldo_de_gols: 13,
        aproveitamento: "80.0%",
        forma: ["V", "V", "D", "V", "E"],
      },
      {
        posicao: 13,
        logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
        nome: "Time M",
        pontos: 28,
        vitorias: 9,
        empates: 1,
        derrotas: 2,
        gols_marcados: 25,
        gols_sofridos: 12,
        saldo_de_gols: 13,
        aproveitamento: "80.0%",
        forma: ["V", "V", "D", "V", "E"],
      },
      {
        posicao: 14,
        logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
        nome: "Time N",
        pontos: 28,
        vitorias: 9,
        empates: 1,
        derrotas: 2,
        gols_marcados: 25,
        gols_sofridos: 12,
        saldo_de_gols: 13,
        aproveitamento: "80.0%",
        forma: ["V", "V", "D", "V", "E"],
      },
      {
        posicao: 15,
        logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
        nome: "Time O",
        pontos: 28,
        vitorias: 9,
        empates: 1,
        derrotas: 2,
        gols_marcados: 25,
        gols_sofridos: 12,
        saldo_de_gols: 13,
        aproveitamento: "80.0%",
        forma: ["V", "V", "D", "V", "E"],
      },
      {
        posicao: 16,
        logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
        nome: "Time P",
        pontos: 28,
        vitorias: 9,
        empates: 1,
        derrotas: 2,
        gols_marcados: 25,
        gols_sofridos: 12,
        saldo_de_gols: 13,
        aproveitamento: "80.0%",
        forma: ["V", "V", "D", "V", "E"],
      },
      {
        posicao: 17,
        logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
        nome: "Time Q",
        pontos: 28,
        vitorias: 9,
        empates: 1,
        derrotas: 2,
        gols_marcados: 25,
        gols_sofridos: 12,
        saldo_de_gols: 13,
        aproveitamento: "80.0%",
        forma: ["V", "V", "D", "V", "E"],
      },
      {
        posicao: 18,
        logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
        nome: "Time R",
        pontos: 28,
        vitorias: 9,
        empates: 1,
        derrotas: 2,
        gols_marcados: 25,
        gols_sofridos: 12,
        saldo_de_gols: 13,
        aproveitamento: "80.0%",
        forma: ["V", "V", "D", "V", "E"],
      },
    ],
    partidas: [partidas],
    estatisticas: [
      {
        artilheiros: [
          { nome: "Joao", gols: "12" },
          { nome: "Maria", gols: "10" },
          { nome: "Andre", gols: "3" },
          { nome: "Ricardo", gols: "1" },
        ],
      },
    ],
  },
];

const rodada = [
  {
    idPartida: "1000",
    casa: {
      logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
      nome: "Time A",
    },
    fora: {
      logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
      nome: "Time B",
    },
    idCampeonato: "1",
    rodada: "20",
    status: "ENCERRADO",
    placarCasa: "0",
    placarFora: "1",
  },
  {
    idPartida: "1001",
    casa: {
      logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
      nome: "Time C",
    },
    fora: {
      logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
      nome: "Time D",
    },
    idCampeonato: "1",
    rodada: "20",
    status: "ENCERRADO",
    placarCasa: "0",
    placarFora: "1",
  },
  {
    idPartida: "1002",
    casa: {
      logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
      nome: "Time E",
    },
    fora: {
      logo: "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
      nome: "Time F",
    },
    idCampeonato: "1",
    rodada: "20",
    status: "ENCERRADO",
    placarCasa: "0",
    placarFora: "1",
  },
];

app.get("/camp", (req, res) => {
  res.json({ camp });
});

app.get("/rodadas", (req, res) => {
  res.json({ rodada });
});

// app.get("/equipes", (req, res) => {
//   res.json({ equipes });
// });

// app.get("/equipe", (req, res) => {
//   res.json({ equipe });
// });

// app.get("/campeonatos", (req, res) => {
//   res.json({ campeonatos });
// });

// app.get("/api", (req, res) => {
//   res.json({ partidas });
// });

// app.get("/match", (req, res) => {
//   res.json({ match });
// });

export default app;
