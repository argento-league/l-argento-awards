import { Player, Team, Terna } from "@/types";

const LA_LAKERS: Team = {
  id: 1,
  name: "LA Lakers",
  logo: "",
};

const TEAM_SERVER: Team = {
  id: 2,
  name: "Team Server",
  logo: "",
};

const EFECTO_DIVINE: Team = {
  id: 3,
  name: "3fecto Divine",
  logo: "",
};

const THE_RAW_CHIKENS: Team = {
  id: 4,
  name: "The Raw Chikens",
  logo: "",
};

const LA_GATONETA: Team = {
  id: 5,
  name: "La Gatoneta",
  logo: "",
};

const PLAYER_LIBRE: Team = {
  id: 6,
  name: "Players Libres",
  logo: "",
};

const BLACK_HOLES: Team = {
  id: 7,
  name: "Black Holes",
  logo: "",
};

const THE_ORPHANS: Team = {
  id: 8,
  name: "The Orphans",
  logo: "",
};

const AS_DANCE: Team = {
  id: 9,
  name: "AS Dance",
  logo: "",
};

const ALDEA_GAMING: Team = {
  id: 10,
  name: "Aldea Gaming",
  logo: "",
};

const CARPINCHOS_RAGE: Team = {
  id: 11,
  name: "Carpinchos Rage",
  logo: "",
};

const LEMURIA: Team = {
  id: 12,
  name: "Lemuria",
  logo: "",
};

const FANTASMAS: Team = {
  id: 13,
  name: "Fantasmas",
  logo: "",
};

const GUERREROS_Z: Team = {
  id: 14,
  name: "Guerreros Z",
  logo: "",
};

const CHILDREN_OF_THE_CORN: Team = {
  id: 15,
  name: "Childrens of the Corn",
  logo: "",
};

const HYDRA_SPORTS: Team = {
  id: 16,
  name: "Hydra E-sports",
  logo: "",
};

const SUSHI_BOY: Team = {
  id: 17,
  name: "Sushi Boys",
  logo: "",
};

const WINDFURY_ENJOYERS: Team = {
  id: 18,
  name: "Windfury Enjoyers",
  logo: "",
};

const BRANCA_TEAM: Team = {
  id: 19,
  name: "Branca Team",
  logo: "",
};

const THE_RATS: Team = {
  id: 20,
  name: "The Rats",
  logo: "",
};

export const teams: Team[] = [
  LA_LAKERS,
  TEAM_SERVER,
  EFECTO_DIVINE,
  THE_RAW_CHIKENS,
  LA_GATONETA,
  PLAYER_LIBRE,
  BLACK_HOLES,
  THE_ORPHANS,
  AS_DANCE,
  ALDEA_GAMING,
  CARPINCHOS_RAGE,
  LEMURIA,
  FANTASMAS,
  GUERREROS_Z,
  CHILDREN_OF_THE_CORN,
  HYDRA_SPORTS,
  SUSHI_BOY,
  WINDFURY_ENJOYERS,
  BRANCA_TEAM,
  THE_RATS,
];

export const players: Player[] = [
  // LA LAKERS
  {
    id: 1,
    name: "Giulinho",
    team: LA_LAKERS.name,
    position: 1,
    isCaptain: false,
  },
  {
    id: 2,
    name: "Shifu",
    team: LA_LAKERS.name,
    position: 2,
    isCaptain: false,
  },
  { id: 3, name: "Lice", team: LA_LAKERS.name, position: 3, isCaptain: false },
  {
    id: 4,
    name: "Worlock",
    team: LA_LAKERS.name,
    position: 4,
    isCaptain: true,
  },
  {
    id: 5,
    name: "SyndraMoon",
    team: LA_LAKERS.name,
    position: 5,
    isCaptain: false,
  },
  {
    id: 6,
    name: "Porco Rex",
    team: LA_LAKERS.name,
    position: 5,
    isCaptain: false,
  },
  {
    id: 7,
    name: "S4tvrn0",
    team: LA_LAKERS.name,
    position: 3,
    isCaptain: false,
  },

  // TEAM SERVER
  { id: 8, name: "2is", team: TEAM_SERVER.name, position: 2, isCaptain: true },
  {
    id: 9,
    name: "Walterms",
    team: TEAM_SERVER.name,
    position: 5,
    isCaptain: false,
  },
  {
    id: 10,
    name: "SICK TUFI",
    team: TEAM_SERVER.name,
    position: 1,
    isCaptain: false,
  },
  {
    id: 11,
    name: "EL PIBE ÚTIL",
    team: TEAM_SERVER.name,
    position: 5,
    isCaptain: false,
  },
  {
    id: 12,
    name: "_55",
    team: TEAM_SERVER.name,
    position: 5,
    isCaptain: false,
  },
  {
    id: 13,
    name: "Zero",
    team: TEAM_SERVER.name,
    position: 3,
    isCaptain: false,
  },
  {
    id: 14,
    name: "Mac Tonight",
    team: TEAM_SERVER.name,
    position: 4,
    isCaptain: false,
  },
  {
    id: 15,
    name: "CACHAS 3.0",
    team: TEAM_SERVER.name,
    position: 3,
    isCaptain: false,
  },

  // 3FECTO DIVINE
  {
    id: 16,
    name: "Miru",
    team: EFECTO_DIVINE.name,
    position: 1,
    isCaptain: false,
  },
  {
    id: 17,
    name: "Innolize",
    team: EFECTO_DIVINE.name,
    position: 2,
    isCaptain: false,
  },
  {
    id: 18,
    name: "3mpty",
    team: EFECTO_DIVINE.name,
    position: 3,
    isCaptain: false,
  },
  {
    id: 19,
    name: "dgN",
    team: EFECTO_DIVINE.name,
    position: 4,
    isCaptain: true,
  },
  {
    id: 20,
    name: "Daxas",
    team: EFECTO_DIVINE.name,
    position: 5,
    isCaptain: false,
  },
  {
    id: 21,
    name: "Luleh",
    team: EFECTO_DIVINE.name,
    position: 5,
    isCaptain: false,
  },
  {
    id: 22,
    name: "Meew",
    team: EFECTO_DIVINE.name,
    position: 2,
    isCaptain: false,
  },

  // THE RAW CHIKENS
  {
    id: 23,
    name: "Thenewpipi",
    team: THE_RAW_CHIKENS.name,
    position: 2,
    isCaptain: false,
  },
  {
    id: 24,
    name: "ZeroMercy",
    team: THE_RAW_CHIKENS.name,
    position: 4,
    isCaptain: true,
  },
  {
    id: 25,
    name: "kaiser",
    team: THE_RAW_CHIKENS.name,
    position: 5,
    isCaptain: false,
  },
  {
    id: 26,
    name: "Lamine Yamal",
    team: THE_RAW_CHIKENS.name,
    position: 3,
    isCaptain: false,
  },
  {
    id: 27,
    name: "L24DTR-",
    team: THE_RAW_CHIKENS.name,
    position: 1,
    isCaptain: false,
  },

  // LA GATONETA
  {
    id: 28,
    name: "Un Gato",
    team: LA_GATONETA.name,
    position: 1,
    isCaptain: true,
  },
  {
    id: 29,
    name: "NTW",
    team: LA_GATONETA.name,
    position: 2,
    isCaptain: false,
  },
  {
    id: 30,
    name: "Chelo",
    team: LA_GATONETA.name,
    position: 5,
    isCaptain: false,
  },
  {
    id: 31,
    name: "Franco.Scty",
    team: LA_GATONETA.name,
    position: 4,
    isCaptain: false,
  },
  {
    id: 32,
    name: "Sacha",
    team: LA_GATONETA.name,
    position: 2,
    isCaptain: false,
  },
  {
    id: 33,
    name: "Puntito",
    team: LA_GATONETA.name,
    position: 3,
    isCaptain: false,
  },

  // PLAYER LIBRE
  {
    id: 34,
    name: "Sandevistan",
    team: PLAYER_LIBRE.name,
    position: 1,
    isCaptain: false,
  },
  {
    id: 35,
    name: "frizolini",
    team: PLAYER_LIBRE.name,
    position: 2,
    isCaptain: true,
  },
  {
    id: 36,
    name: "correNTA",
    team: PLAYER_LIBRE.name,
    position: 3,
    isCaptain: false,
  },
  {
    id: 37,
    name: "Tabu",
    team: PLAYER_LIBRE.name,
    position: 4,
    isCaptain: false,
  },
  {
    id: 38,
    name: "Zancrow",
    team: PLAYER_LIBRE.name,
    position: 5,
    isCaptain: false,
  },
  {
    id: 39,
    name: "DeSerT",
    team: PLAYER_LIBRE.name,
    position: 3,
    isCaptain: false,
  },
  {
    id: 40,
    name: "Merlino",
    team: PLAYER_LIBRE.name,
    position: 4,
    isCaptain: false,
  },
  {
    id: 41,
    name: "Khantus",
    team: PLAYER_LIBRE.name,
    position: 5,
    isCaptain: false,
  },

  // BLACK HOLES
  {
    id: 42,
    name: "Fuckreplay",
    team: BLACK_HOLES.name,
    position: 4,
    isCaptain: true,
  },
  {
    id: 43,
    name: ".Insane",
    team: BLACK_HOLES.name,
    position: 2,
    isCaptain: false,
  },
  {
    id: 44,
    name: "Deux-",
    team: BLACK_HOLES.name,
    position: 1,
    isCaptain: false,
  },
  {
    id: 45,
    name: "kise",
    team: BLACK_HOLES.name,
    position: 3,
    isCaptain: false,
  },
  {
    id: 46,
    name: "NATY",
    team: BLACK_HOLES.name,
    position: 5,
    isCaptain: false,
  },
  { id: 47, name: "69", team: BLACK_HOLES.name, position: 5, isCaptain: false },

  // THE ORPHANS
  {
    id: 48,
    name: "Rucula",
    team: THE_ORPHANS.name,
    position: 2,
    isCaptain: false,
  },
  {
    id: 49,
    name: "Jhardel",
    team: THE_ORPHANS.name,
    position: 1,
    isCaptain: false,
  },
  {
    id: 50,
    name: "Emilia Mernes",
    team: THE_ORPHANS.name,
    position: 1,
    isCaptain: false,
  },
  {
    id: 51,
    name: "SangucheGG",
    team: THE_ORPHANS.name,
    position: 5,
    isCaptain: false,
  },
  {
    id: 52,
    name: "Cervecero",
    team: THE_ORPHANS.name,
    position: 5,
    isCaptain: false,
  },
  {
    id: 53,
    name: "Haru",
    team: THE_ORPHANS.name,
    position: 4,
    isCaptain: false,
  },
  {
    id: 54,
    name: "Hito",
    team: THE_ORPHANS.name,
    position: 3,
    isCaptain: false,
  },
  {
    id: 100,
    name: "S4tvrn0",
    team: THE_ORPHANS.name,
    position: 3,
    isCaptain: true,
  },

  // AS DANCE
  { id: 55, name: "Knk", team: AS_DANCE.name, position: 4, isCaptain: true },
  {
    id: 56,
    name: "macowens",
    team: AS_DANCE.name,
    position: 5,
    isCaptain: false,
  },
  { id: 57, name: "Woody", team: AS_DANCE.name, position: 1, isCaptain: false },
  {
    id: 58,
    name: "elMatute",
    team: AS_DANCE.name,
    position: 3,
    isCaptain: false,
  },
  {
    id: 101,
    name: "Aslohm",
    team: AS_DANCE.name,
    position: 4,
    isCaptain: true,
  },

  // ALDEA GAMING
  {
    id: 59,
    name: "NikoGOD",
    team: ALDEA_GAMING.name,
    position: 1,
    isCaptain: true,
  },
  {
    id: 60,
    name: "Ping-Chin-Long",
    team: ALDEA_GAMING.name,
    position: 2,
    isCaptain: false,
  },
  {
    id: 61,
    name: "TAKU-",
    team: ALDEA_GAMING.name,
    position: 4,
    isCaptain: false,
  },
  {
    id: 62,
    name: "dotem",
    team: ALDEA_GAMING.name,
    position: 3,
    isCaptain: false,
  },
  {
    id: 63,
    name: "DirtyBoy-",
    team: ALDEA_GAMING.name,
    position: 2,
    isCaptain: false,
  },
  {
    id: 64,
    name: "Cou2",
    team: ALDEA_GAMING.name,
    position: 3,
    isCaptain: false,
  },
  {
    id: 65,
    name: "Siarko",
    team: ALDEA_GAMING.name,
    position: 2,
    isCaptain: false,
  },
  {
    id: 66,
    name: "PIGNAL",
    team: ALDEA_GAMING.name,
    position: 4,
    isCaptain: false,
  },

  // CARPINCHOS RAGE
  {
    id: 67,
    name: "iba",
    team: CARPINCHOS_RAGE.name,
    position: 3,
    isCaptain: false,
  },
  {
    id: 68,
    name: "GaRaF",
    team: CARPINCHOS_RAGE.name,
    position: 1,
    isCaptain: true,
  },
  {
    id: 69,
    name: "Lighto",
    team: CARPINCHOS_RAGE.name,
    position: 2,
    isCaptain: false,
  },
  {
    id: 70,
    name: "Lulu",
    team: CARPINCHOS_RAGE.name,
    position: 4,
    isCaptain: false,
  },
  {
    id: 71,
    name: "Nov[A]to/Sammy",
    team: CARPINCHOS_RAGE.name,
    position: 5,
    isCaptain: false,
  },
  {
    id: 72,
    name: "EU",
    team: CARPINCHOS_RAGE.name,
    position: 5,
    isCaptain: false,
  },
  {
    id: 73,
    name: "Ovoide",
    team: CARPINCHOS_RAGE.name,
    position: 5,
    isCaptain: false,
  },
  {
    id: 74,
    name: "JANN",
    team: CARPINCHOS_RAGE.name,
    position: 4,
    isCaptain: false,
  },

  // LEMURIA
  {
    id: 75,
    name: "clancy_power",
    team: LEMURIA.name,
    position: 2,
    isCaptain: false,
  },
  {
    id: 76,
    name: "TheCrusher666",
    team: LEMURIA.name,
    position: 5,
    isCaptain: false,
  },
  { id: 77, name: "Fox", team: LEMURIA.name, position: 5, isCaptain: false },
  { id: 78, name: "Zhen", team: LEMURIA.name, position: 1, isCaptain: false },
  { id: 79, name: "Dk3r", team: LEMURIA.name, position: 3, isCaptain: true },
  { id: 80, name: "ehkar", team: LEMURIA.name, position: 4, isCaptain: false },
  { id: 81, name: "Hermit", team: LEMURIA.name, position: 2, isCaptain: false },

  // FANTASMAS
  {
    id: 82,
    name: "MDFk PiPi",
    team: FANTASMAS.name,
    position: 5,
    isCaptain: false,
  },
  {
    id: 83,
    name: "KTZ ( Kuroh)",
    team: FANTASMAS.name,
    position: 1,
    isCaptain: false,
  },
  {
    id: 84,
    name: "adachijke",
    team: FANTASMAS.name,
    position: 3,
    isCaptain: false,
  },
  {
    id: 85,
    name: "Fumigator",
    team: FANTASMAS.name,
    position: 5,
    isCaptain: false,
  },
  {
    id: 86,
    name: "iroha'",
    team: FANTASMAS.name,
    position: 2,
    isCaptain: false,
  },
  { id: 87, name: "Oli", team: FANTASMAS.name, position: 2, isCaptain: true },

  // GUERREROS Z
  {
    id: 88,
    name: "Profesor",
    team: GUERREROS_Z.name,
    position: 2,
    isCaptain: true,
  },
  {
    id: 89,
    name: "Pixulong",
    team: GUERREROS_Z.name,
    position: 2,
    isCaptain: false,
  },
  {
    id: 90,
    name: "Shariff",
    team: GUERREROS_Z.name,
    position: 3,
    isCaptain: false,
  },
  {
    id: 91,
    name: "Nicobaby",
    team: GUERREROS_Z.name,
    position: 1,
    isCaptain: false,
  },
  {
    id: 92,
    name: "Mza-kobEE",
    team: GUERREROS_Z.name,
    position: 4,
    isCaptain: false,
  },
  {
    id: 93,
    name: "El Cinico",
    team: GUERREROS_Z.name,
    position: 5,
    isCaptain: false,
  },

  // CHILDREN OF THE CORN
  {
    id: 94,
    name: "Rigan",
    team: CHILDREN_OF_THE_CORN.name,
    position: 4,
    isCaptain: true,
  },
  {
    id: 95,
    name: "Zurdo",
    team: CHILDREN_OF_THE_CORN.name,
    position: 2,
    isCaptain: false,
  },
  {
    id: 96,
    name: "RampaGeee",
    team: CHILDREN_OF_THE_CORN.name,
    position: 3,
    isCaptain: false,
  },
  {
    id: 97,
    name: "M3L",
    team: CHILDREN_OF_THE_CORN.name,
    position: 4,
    isCaptain: false,
  },
  {
    id: 98,
    name: "Ashlom",
    team: CHILDREN_OF_THE_CORN.name,
    position: 4,
    isCaptain: false,
  },
  {
    id: 99,
    name: "Wij",
    team: CHILDREN_OF_THE_CORN.name,
    position: 5,
    isCaptain: false,
  },
  {
    id: 100,
    name: "FTD",
    team: CHILDREN_OF_THE_CORN.name,
    position: 1,
    isCaptain: false,
  },

  // HYDRA SPORTS
  {
    id: 101,
    name: "hawkeye",
    team: HYDRA_SPORTS.name,
    position: 4,
    isCaptain: true,
  },
  {
    id: 102,
    name: "Edward Elric",
    team: HYDRA_SPORTS.name,
    position: 2,
    isCaptain: false,
  },
  {
    id: 103,
    name: "kid",
    team: HYDRA_SPORTS.name,
    position: 5,
    isCaptain: false,
  },
  {
    id: 104,
    name: "Subra",
    team: HYDRA_SPORTS.name,
    position: 1,
    isCaptain: false,
  },
  {
    id: 105,
    name: "El Alessi",
    team: HYDRA_SPORTS.name,
    position: 2,
    isCaptain: false,
  },
  {
    id: 106,
    name: "onfi",
    team: HYDRA_SPORTS.name,
    position: 3,
    isCaptain: false,
  },
  {
    id: 107,
    name: "Who is Ari?",
    team: HYDRA_SPORTS.name,
    position: 3,
    isCaptain: false,
  },

  // SUSHI BOY
  {
    id: 108,
    name: "picado",
    team: SUSHI_BOY.name,
    position: 1,
    isCaptain: true,
  },
  {
    id: 109,
    name: "Z-TA",
    team: SUSHI_BOY.name,
    position: 3,
    isCaptain: false,
  },
  {
    id: 110,
    name: "⁠4imer",
    team: SUSHI_BOY.name,
    position: 2,
    isCaptain: false,
  },
  { id: 111, name: "DLC", team: SUSHI_BOY.name, position: 4, isCaptain: false },
  {
    id: 112,
    name: "MoneyForNoth1ng",
    team: SUSHI_BOY.name,
    position: 5,
    isCaptain: false,
  },
  {
    id: 113,
    name: "Radamanthys",
    team: SUSHI_BOY.name,
    position: 1,
    isCaptain: false,
  },
  {
    id: 114,
    name: "ziwar",
    team: SUSHI_BOY.name,
    position: 5,
    isCaptain: false,
  },

  // WINDFURY ENJOYERS
  {
    id: 115,
    name: "Prilou",
    team: WINDFURY_ENJOYERS.name,
    position: 2,
    isCaptain: false,
  },
  {
    id: 116,
    name: "Exspec",
    team: WINDFURY_ENJOYERS.name,
    position: 1,
    isCaptain: false,
  },
  {
    id: 117,
    name: "SDpeco",
    team: WINDFURY_ENJOYERS.name,
    position: 3,
    isCaptain: false,
  },
  {
    id: 118,
    name: "furry",
    team: WINDFURY_ENJOYERS.name,
    position: 4,
    isCaptain: false,
  },
  {
    id: 119,
    name: "Tomate",
    team: WINDFURY_ENJOYERS.name,
    position: 5,
    isCaptain: true,
  },
  {
    id: 120,
    name: "Haans",
    team: WINDFURY_ENJOYERS.name,
    position: 4,
    isCaptain: false,
  },

  // BRANCA TEAM
  {
    id: 121,
    name: "LighTTinch",
    team: BRANCA_TEAM.name,
    position: 1,
    isCaptain: false,
  },
  {
    id: 122,
    name: "Tachibana",
    team: BRANCA_TEAM.name,
    position: 2,
    isCaptain: false,
  },
  {
    id: 123,
    name: "George",
    team: BRANCA_TEAM.name,
    position: 5,
    isCaptain: false,
  },
  {
    id: 124,
    name: "SamusPrime",
    team: BRANCA_TEAM.name,
    position: 4,
    isCaptain: false,
  },
  {
    id: 125,
    name: "Fullback",
    team: BRANCA_TEAM.name,
    position: 3,
    isCaptain: false,
  },
  {
    id: 126,
    name: "ElPerritoMalvado",
    team: BRANCA_TEAM.name,
    position: 3,
    isCaptain: true,
  },
  {
    id: 127,
    name: "Hari",
    team: BRANCA_TEAM.name,
    position: 1,
    isCaptain: false,
  },

  // THE RATS
  { id: 128, name: "Rico", team: THE_RATS.name, position: 4, isCaptain: false },
  {
    id: 129,
    name: "Just magnus",
    team: THE_RATS.name,
    position: 3,
    isCaptain: false,
  },
  {
    id: 130,
    name: "Cristhian",
    team: THE_RATS.name,
    position: 4,
    isCaptain: false,
  },
  {
    id: 131,
    name: "Vitaly",
    team: THE_RATS.name,
    position: 4,
    isCaptain: true,
  },
  { id: 132, name: "Wr", team: THE_RATS.name, position: 5, isCaptain: false },
  { id: 133, name: "Celo", team: THE_RATS.name, position: 4, isCaptain: false },
  { id: 134, name: "Beto", team: THE_RATS.name, position: 1, isCaptain: false },
  {
    id: 135,
    name: "Nexus",
    team: THE_RATS.name,
    position: 1,
    isCaptain: false,
  },
];

export const staff = [
  {
    name: "Caster 1",
  },
  {
    name: "Caster 2",
  },
  {
    name: "Caster 3",
  },
  {
    name: "Caster 4",
  },
  {
    name: "Caster 5",
  },
];

export const streamers = [
  {
    id: 1,
    name: "ovo1de",
    channel: "https://www.twitch.tv/ovo1de",
  },
  {
    id: 2,
    name: "Don Cokie",
    channel: "https://www.twitch.tv/doncokie",
  },
  {
    id: 3,
    name: "3mpty",
    channel: "https://www.twitch.tv/3mpty",
  },
  {
    id: 4,
    name: "Charii",
    channel: "https://www.twitch.tv/charii",
  },
  {
    id: 5,
    name: "Saturno",
    channel: "https://www.twitch.tv/saturno",
  },
  {
    id: 6,
    name: "dgn",
    channel: "https://www.twitch.tv/dgn",
  },
  {
    id: 7,
    name: "Farren",
    channel: "https://www.twitch.tv/farren",
  },
  {
    id: 8,
    name: "Worlock",
    channel: "https://www.twitch.tv/worlock",
  },
  {
    id: 9,
    name: "Nakato",
    channel: "https://www.twitch.tv/nakato",
  },
  {
    id: 10,
    name: "Profe 30",
    channel: "https://www.twitch.tv/profe30",
  },
  {
    id: 11,
    name: "Nan",
    channel: "https://www.twitch.tv/nan",
  },
  {
    id: 12,
    name: "Sanguito",
    channel: "https://www.twitch.tv/sanguito",
  },
  {
    id: 13,
    name: "litemplay",
    channel: "https://www.twitch.tv/litemplay",
  },
];

const captains = players.filter((player) => player.isCaptain);

const DREAM_TEAM = {
  CARRY: [
    {
      id: 1,
      name: "L24DTR",
      team: THE_RAW_CHIKENS.name,
      position: 1,
      isCaptain: true,
    },
    {
      id: 2,
      name: "Sandevistan",
      team: PLAYER_LIBRE.name,
      position: 1,
      isCaptain: true,
    },
    {
      id: 3,
      name: "KTZ",
      team: FANTASMAS.name,
      position: 1,
      isCaptain: true,
    },
  ],
  SOFT_SUPPORT: [
    {
      id: 1,
      name: "ZeroMercy",
      team: THE_RAW_CHIKENS.name,
      position: 4,
      isCaptain: true,
    },
    {
      id: 2,
      name: "Tabu",
      team: PLAYER_LIBRE.name,
      position: 4,
      isCaptain: true,
    },
    {
      id: 3,
      name: "iroha",
      team: FANTASMAS.name,
      position: 2,
      isCaptain: true,
    },
  ],
  HARD_SUPPORT: [
    {
      id: 1,
      name: "kaiser",
      team: THE_RAW_CHIKENS.name,
      position: 5,
      isCaptain: true,
    },
    {
      id: 2,
      name: "Khantus",
      team: PLAYER_LIBRE.name,
      position: 5,
      isCaptain: true,
    },
    {
      id: 3,
      name: "Fumigator",
      team: FANTASMAS.name,
      position: 5,
      isCaptain: true,
    },
  ],
  MIDLANER: [
    {
      id: 1,
      name: "Thenewpipi",
      team: THE_RAW_CHIKENS.name,
      position: 2,
      isCaptain: true,
    },
    {
      id: 2,
      name: "frizolini",
      team: PLAYER_LIBRE.name,
      position: 2,
      isCaptain: true,
    },
    {
      id: 3,
      name: "iroha",
      team: FANTASMAS.name,
      position: 2,
      isCaptain: true,
    },
  ],
  OFFLANER: [
    {
      id: 1,
      name: "adachijke",
      team: FANTASMAS.name,
      position: 3,
      isCaptain: true,
    },
    {
      id: 2,
      name: "correNTA",
      team: PLAYER_LIBRE.name,
      position: 3,
      isCaptain: true,
    },
    {
      id: 3,
      name: "Lamine Yamal",
      team: THE_RAW_CHIKENS.name,
      position: 3,
      isCaptain: true,
    },
  ],
};

export const ternas: Terna[] = [
  {
    id: 1,
    name: "Equipo revelación",
    type: "team",
    options: teams,
  },
  {
    id: 2,
    name: "Equipo Decepción",
    type: "team",
    options: teams,
  },
  {
    id: 3,
    name: "Jugador más odiado",
    type: "player",
    options: players,
  },
  {
    id: 4,
    name: "Capitán más odiado",
    type: "player",
    options: captains,
  },
  {
    id: 5,
    name: "Mejor Streamer",
    type: "streamer",
    options: streamers,
  },
  {
    id: 6,
    name: "Dream team finales: Carry",
    type: "player",
    options: DREAM_TEAM.CARRY,
  },
  {
    id: 7,
    name: "Dream team finales: Soft Support",
    type: "player",
    options: DREAM_TEAM.SOFT_SUPPORT,
  },
  {
    id: 8,
    name: "Dream team finales: Hard Support",
    type: "player",
    options: DREAM_TEAM.HARD_SUPPORT,
  },
  {
    id: 9,
    name: "Dream team finales: Midlaner",
    type: "player",
    options: DREAM_TEAM.MIDLANER,
  },
  {
    id: 10,
    name: "Dream team finales: Offlaner",
    type: "player",
    options: DREAM_TEAM.OFFLANER,
  },
  {
    id: 11,
    name: "Mejor Carry de la liga",
    type: "player",
    options: players.filter(player => player.position === 1),
  },
  {
    id: 12,
    name: "Mejor Midlaner de la liga",
    type: "player",
    options: players.filter(player => player.position === 2),
  },
  {
    id: 13,
    name: "Mejor Offlaner de la liga",
    type: "player",
    options: players.filter(player => player.position === 3),
  },
  {
    id: 14,
    name: "Mejor Soft Support de la liga",
    type: "player",
    options: players.filter(player => player.position === 4),
  },
  {
    id: 15,
    name: "Mejor Hard Support de la liga",
    type: "player",
    options: players.filter(player => player.position === 5),
  },
  {
    id: 16,
    name: "Codigo de votacion",
    type: "code",
  }
];
