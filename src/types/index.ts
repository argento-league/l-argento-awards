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

  export type VideoTerna = {
    id: number;
    name: string;
    type: "video";
    options: Video[];
  };

  export type ImageTerna = {
    id: number;
    name: string;
    type: "image";
    options: Team[];
  };

  export interface Video {
    id: number;
    name: string;
    url: string;
  }

  export interface Image{
    id: number;
    name: string;
    url: string;
  }
  export interface Option {
    id: number;
    name: string;
  }

  export type OptionTerna = {
    id: number;
    name: string;
    type: "option";
    options: Option[];
  };
  
  export type Terna = TeamTerna | PlayerTerna | StreamerTerna | CodeTerna | VideoTerna | ImageTerna | OptionTerna;