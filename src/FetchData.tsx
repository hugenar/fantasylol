import axios from "axios";

export interface Response {
  id: number;
  Name: string;
  Role: string;
  Team: string;
  Kills: number;
  Deaths: number;
  assists: number;
  cs: number;
  overviewpage: string;
  datetimeutc: string;
  created: string;
}

class ton {
  responseData: [];
  constructor() {
    this.responseData = [];
  }
  async fetchData() {
    let response = await axios.get("https://fantasylcs.sbs");
    this.responseData = response.data;
  }
}

async function fetchPlayers() {
  let response = await axios.get("https://fantasylcs.sbs/players/");
  var players = response.data;
  return players;
}

const d = new ton();
await d.fetchData();
var players = await fetchPlayers();

export const listPlayers = players;

export const gameData = d.responseData;
