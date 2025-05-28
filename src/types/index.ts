export interface Team {
    id: number;
    name: string;
    logo: string;
  }
  
  export interface Player {
    id: number;
    name: string;
    team: string;
    position: number;
    isCaptain: boolean;
  }
  
  export interface Streamer {
    id: number;
    name: string;
    channel: string;
  }

  export interface Code {
    value: string;
  }

  export type TeamTerna = {
    id: number;
    name: string;
    type: "team";
    options: Team[];
  };
  
  export type PlayerTerna = {
    id: number;
    name: string;
    type: "player";
    options: Player[];
  };
  
  export type StreamerTerna = {
    id: number;
    name: string;
    type: "streamer";
    options: Streamer[];
  };

  export type CodeTerna = {
    id: number;
    name: string;
    type: "code";
  };
  
  export type Terna = TeamTerna | PlayerTerna | StreamerTerna | CodeTerna;