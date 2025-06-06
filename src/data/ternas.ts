import { Terna } from "@/types";
import { casters, teams } from "./teams";
import {
  ALDEA_GAMING,
  AS_DANCE,
  BRANCA_TEAM,
  CARPINCHOS_RAGE,
  CHILDREN_OF_THE_CORN,
  EFECTO_DIVINE,
  FANTASMAS,
  GUERREROS_Z,
  HYDRA_SPORTS,
  LA_GATONETA,
  LA_LAKERS,
  LEMURIA,
  PLAYER_LIBRE,
  players,
  SUSHI_BOY,
  THE_ORPHANS,
  THE_RATS,
  THE_RAW_CHIKENS,
} from "./teams";

export const ternas: Terna[] = [
  {
    id: 1,
    name: "Equipo revelación",
    type: "team",
    options: [PLAYER_LIBRE, SUSHI_BOY, FANTASMAS, LA_LAKERS, EFECTO_DIVINE],
  },
  {
    id: 2,
    name: "Equipo decepción",
    type: "team",
    options: [
      CHILDREN_OF_THE_CORN,
      AS_DANCE,
      LA_GATONETA,
      LEMURIA,
      THE_ORPHANS,
      CARPINCHOS_RAGE,
    ],
  },
  {
    id: 3,
    name: "Equipo legendario",
    type: "team",
    options: [
      THE_RATS,
      HYDRA_SPORTS,
      ALDEA_GAMING,
      GUERREROS_Z,
      THE_RAW_CHIKENS,
    ],
  },
  {
    id: 4,
    name: "Jugador mas querido",
    type: "player",
    options: [
      {
        id: 87,
        name: "Oli",
        team: FANTASMAS.name,
        position: 2,
        isCaptain: true,
      },
      {
        id: 75,
        name: "clancy_power",
        team: LEMURIA.name,
        position: 2,
        isCaptain: false,
      },
      {
        id: 901,
        name: "NikeGG",
        team: CHILDREN_OF_THE_CORN.name,
        position: 2,
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
        id: 108,
        name: "picado",
        team: SUSHI_BOY.name,
        position: 1,
        isCaptain: true,
      },
    ],
  },
  {
    id: 5,
    name: "Jugador más polémico",
    type: "player",
    options: [
      {
        id: 126,
        name: "ElPerritoMalvado",
        team: BRANCA_TEAM.name,
        position: 3,
        isCaptain: true,
      },
      {
        id: 131,
        name: "Vitaly",
        team: THE_RATS.name,
        position: 4,
        isCaptain: true,
      },
      {
        id: 35,
        name: "frizolini",
        team: PLAYER_LIBRE.name,
        position: 2,
        isCaptain: true,
      },
      {
        id: 4,
        name: "Worlock",
        team: LA_LAKERS.name,
        position: 4,
        isCaptain: true,
      },
      {
        id: 19,
        name: "dgN",
        team: EFECTO_DIVINE.name,
        position: 4,
        isCaptain: true,
      },
      {
        id: 86,
        name: "iroha'",
        team: FANTASMAS.name,
        position: 2,
        isCaptain: false,
      },
      {
        id: 68,
        name: "GaRaF",
        team: CARPINCHOS_RAGE.name,
        position: 1,
        isCaptain: true,
      }
    ],
  },
  {
    id: 6,
    name: "Mejor Carry de la liga",
    type: "player",
    options: players.filter(player => player.position === 1),
  },
  {
    id: 7,
    name: "Mejor Midlaner de la liga",
    type: "player",
    options: players.filter(player => player.position === 2),
  },
  {
    id: 8,
    name: "Mejor Offlaner de la liga",
    type: "player",
    options: players.filter(player => player.position === 3),
  },
  {
    id: 9,
    name: "Mejor Soft Support de la liga",
    type: "player",
    options: players.filter(player => player.position === 4),
  },
  {
    id: 10,
    name: "Mejor Hard Support de la liga",
    type: "player",
    options: players.filter(player => player.position === 5),
  },
  {
    id: 11,
    name: "Mejor logo de equipo",
    type: "image",
    options: teams,
  },
  {
    id:12,
    name: "Mejor caster de la liga",
    type: "option",
    options: casters,
  },{
    id:13,
    name: "Caster revelación",
    type: "option",
    options: [
      {
        id:1,
        name: "Littlemplay"
      },
      {
        id:2,
        name: "ILuleh"
      },
      {
        id:3,
        name: "Nanako"
      },
      {
        id:4,
        name: "S4irus"
      }
    ]
  },{
    id:14,
    name: "Mejor analista de la liga",
    type: "option",
    options: [
      {
        id:1,
        name: "Saturno"
      },
      {
        id:2,
        name: "Ashlom"
      },
      {
        id:3,
        name: "Jann"
      },
      {
        id:4,
        name: "dgN"
      }
    ]
  },
  {
    id:15,
    name: "Mejor Serie polémica",
    type: "option",
    options: [
        {
            id:1,
            name: "Lakers vs Branca team",
        },
        {
            id:2,
            name: "3fecto divine vs Branca team",
        },
        {
            id:3,
            name: "3fecto divine vs The rats"
        },
        {
            id:4,
            name: "Players libres vs Los pollos"
        },
        {
            id:5,
            name: "Guerrros Z vs The Oprhans"
        }
    ],
  },{
    id:16,
    name: "Mejor Usuario",
    type: "option",
    options: [
      {
        id: 1,
        name: "Correnta"
      },
      {
        id: 2,
        name: "Picado13"
      },
      {
        id: 3,
        name: "Ziwar"
      },
      {
        id: 4,
        name: "Inscripto"
      },
      {
        id: 5,
        name: "SyndraMoon"
      },
      {
        id: 6,
        name: "Zetanho"
      },
      {
        id: 7,
        name: "Jann"
      },
      {
        id: 8,
        name: "Vicky Garaf"
      },
      {
        id: 9,
        name: "Sanguito"
      },
      {
        id: 10,
        name: "Innolize"
      }
    ],
  },{
    id:17,
    name: "Mejor momento WTF",
    type: "option",
    options: [
        {
            id:1,
            name: "Samus se cuela en el discord",
        },
        {
            id:2,
            name: "Ataque DDoS a la argento",
        },
        {
            id:3,
            name: "Capitan de Aldea disbandea min 7",
        },
        {
            id:4,
            name: "DonCookie finaliza el stream en calzones",
        },
        {
            id:5,
            name: "AshloM y Ovoide cuñados"
        }
    ],
  },{
    id:18,
    name: "Mejor jugada",
    type: "video",
    options: [
        {
            id:1,
            name: "Doble escapismo de rigan",
            url: "https://youtu.be/sDyYlzyije4"
        },
        {
            id:2,
            name: "Wij corre",
            url: "https://youtu.be/6BVHxQusoFA"
        },
        {
            id:3,
            name: "Saturno doble combo con DarkSeer",
            url: "https://youtu.be/XZKaJoahse4"
        },
        {
            id:4,
            name: "Hydra entra a la fosa y roba aegis +4k",
            url: "https://youtu.be/NJYbZz9KjcY"
        },
        {
            id:5,
            name: "rampage sorprende con el ravage",
            url: "https://youtu.be/MY_aKltHiE8"
        },
        {
            id:6,
            name: "tachinaba roba el aegis",
            url: "https://youtu.be/EcKDcAAgmMg"
        },
        {
            id:7,
            name: "Un gato roba el aegis",
            url: "https://youtu.be/Tcz46frPuDA"
        },
        {
            id:8,
            name: "L24 baitea a todos con el morph",
            url: "https://youtu.be/rICF3zAtB4A"
        }
    ]
  },{
    id:19,
    name: "Mejor fail",
    type: "video",
    options: [
        {
            id:1,
            name: "ashlom decprify desafortunado",
            url: "https://youtu.be/L3cX3dhs-74"
        },
        {
            id:2,
            name: "Aegis perdido por el tormentor",
            url: "https://youtu.be/reTwpfp66i0"
        },
        {
            id:3,
            name: "Team server usa 4 ultis y no hay nadie",
            url: "https://youtu.be/wfh_5T8KmJs"
        },
        {
            id:4,
            name: "awi tira las víboras y no ve al furion",
            url: "https://youtu.be/MAQ9IvN-TdY"
        },
        {
            id:5,
            name: "syndra cancela el tp largo de Natsu",
            url: "https://youtu.be/YZnioL6brFk"
        }
    ]
  },{
    id:20,
    name: "Mejor rampage",
    type: "video",
    options: [
        {
            id:1,
            name: "Picado vs Pollos Crudos",
            url: "https://youtu.be/CWJDGQlrImU"
        },
        {
            id:2,
            name: "Pixulong",
            url: "https://youtu.be/TWJBwoRqhEE"
        },
        {
            id:3,
            name: "Nexus RAMPAGE!",
            url: "https://youtu.be/9iiRinVPnoo"
        },
        {
            id:4,
            name: "Tachibana vs BrancaTeam",
            url: "https://youtu.be/XpHjZkuPioE"
        }
    ]
  },
  {
    id: 21,
    name: "Codigo de votacion",
    type: "code",
  }
];