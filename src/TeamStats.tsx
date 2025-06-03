import { gameData } from "./FetchData";
import { listPlayers } from "./FetchData";

import "../league_ui/dist/font/beaufort/beaufort.css";
import "../league_ui/dist/es/style.css";
import "../league_ui/dist/font/spiegel/spiegel.css";
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "@lolmath/ui";
import { Heading } from "@lolmath/ui";
import { Text } from "@lolmath/ui";
import { usePersistedState } from "./usePersistedState";
import "./style.css";

export default function TeamStats() {
  let userTeam = usePersistedState<String[]>("userteam", [])[0];
  var tp = 0;
  var top = userTeam[0];
  var jg = userTeam[1];
  var mid = userTeam[2];
  var bot = userTeam[3];
  var supp = userTeam[4];
  var p = 0;
  var wp = 0;
  const data: any = gameData.filter((d: any) => userTeam.includes(d.Name));

  for (let i = 0; i < data.length; i++) {
    if (data[i].PlayerWin == "Yes") {
      wp = 2;
    } else {
      wp = 0;
    }
    p =
      p +
      data[i].Kills * 2 +
      data[i].Assists * 0.5 -
      data[i].Deaths * 0.5 +
      Number((data[i].CS * 0.01).toPrecision(3)) +
      Number((data[i].Gold * 0.0001).toPrecision(3)) +
      Number((data[i].DamageToChampions * 0.0001).toPrecision(3)) +
      wp;
    p = Math.round((p + Number.EPSILON) * 100) / 100;
  }
  tp = tp + p;
  tp = Math.round((tp + Number.EPSILON) * 100) / 100;

  function accordionBar(player: any) {
    const data: any = gameData.filter((d: any) => d.Name === player);
    const playerProfile: any = listPlayers.filter(
      (d: any) => d.Name === player
    );
    var points = 0;
    var winpoints = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].PlayerWin == "Yes") {
        winpoints = 2;
      } else {
        winpoints = 0;
      }
      points =
        points +
        data[i].Kills * 2 +
        data[i].Assists * 0.5 -
        data[i].Deaths * 0.5 +
        Number((data[i].CS * 0.01).toPrecision(3)) +
        Number((data[i].Gold * 0.0001).toPrecision(3)) +
        Number((data[i].DamageToChampions * 0.0001).toPrecision(3)) +
        winpoints;
      points = Math.round((points + Number.EPSILON) * 100) / 100;
    }

    return (
      <Accordion>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="pika">
              <div className="bigbar">
                <img
                  src={`/${player}.png`}
                  width={100}
                  height={100}
                  alt="new"
                ></img>
                <div>
                  <div> {player} </div>
                  <div> {playerProfile[0].Team} </div>
                  <div> {playerProfile[0].Role} </div>
                </div>
              </div>
              <div className={pointsClass(points)}> {points} </div>
            </div>
          </AccordionTrigger>
          <AccordionContent> {detailedGameData(data)} </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  function gameVictory(victory: string) {
    if (victory == "Yes") {
      return (
        <Text preset="stat" className="righttext">
          {" "}
          +2
        </Text>
      );
    } else {
      return (
        <Text preset="stat" className="loss">
          {" "}
          +0
        </Text>
      );
    }
  }
  function pointsClass(points: number) {
    if (points >= 0) {
      return "bigpoints";
    } else {
      return "redbigpoints";
    }
  }

  function detailedGameData(data: any) {
    let stats = data.map((d: any) => {
      const {
        id,
        Kills,
        Deaths,
        Assists,
        CS,
        Gold,
        DamageToChampions,
        Champion,
        DateTimeUTC,
        TeamVs,
        PlayerWin,
      } = d;
      var temp = new Date(DateTimeUTC);
      let date = temp.toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
        dateStyle: "short",
      });
      var winpoints = 0;
      if (PlayerWin == "Yes") {
        winpoints = 2;
      } else {
        winpoints = 0;
      }
      let points: number = 0;
      points =
        Kills * 2 +
        Assists * 0.5 -
        Deaths * 0.5 +
        Number((CS * 0.01).toPrecision(3)) +
        Number((Gold * 0.0001).toPrecision(3)) +
        Number((DamageToChampions * 0.0001).toPrecision(3)) +
        winpoints;
      points = Math.round((points + Number.EPSILON) * 100) / 100;
      return (
        <Accordion key={id}>
          <AccordionItem value="item-1">
            <AccordionTrigger className="bar">
              <div className="pika">
                <div className="lefttext">
                  {" "}
                  <img
                    src={`/${Champion}.webp`}
                    width={47}
                    height={47}
                    alt="new"
                    className="champ"
                  ></img>
                  <div className="vstext">
                    {" "}
                    {Champion} {date}
                    <div> versus {TeamVs} </div>
                  </div>
                </div>
                <div className={pointsClass(points)}> {points} </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="details">
                <div className="midtext">
                  <Text preset="stat">Kills: {Kills}</Text>
                  <Text preset="stat" className="righttext">
                    +{Kills * 2}{" "}
                  </Text>
                </div>
                <div className="midtext">
                  <Text preset="stat">Assists: {Assists}</Text>{" "}
                  <Text preset="stat" className="righttext">
                    {" "}
                    +{Assists * 0.5}{" "}
                  </Text>
                </div>
                <div className="midtext">
                  <Text preset="stat">Deaths: {Deaths}</Text>{" "}
                  <Text preset="stat" className="deaths">
                    {" "}
                    -{Deaths * 0.5}{" "}
                  </Text>
                </div>
                <div className="midtext">
                  <Text preset="stat">CS: {CS}</Text>{" "}
                  <Text preset="stat" className="righttext">
                    {" "}
                    +{Number((CS * 0.01).toPrecision(3))}{" "}
                  </Text>
                </div>
                <div className="midtext">
                  <Text preset="stat">Gold: {Gold}</Text>{" "}
                  <Text preset="stat" className="righttext">
                    {" "}
                    +{Number((Gold * 0.0001).toPrecision(3))}{" "}
                  </Text>
                </div>
                <div className="midtext">
                  <Text preset="stat">Damage: {DamageToChampions}</Text>{" "}
                  <Text preset="stat" className="righttext">
                    {" "}
                    +{Number((DamageToChampions * 0.0001).toPrecision(3))}{" "}
                  </Text>
                </div>
                <div className="midtext">
                  {" "}
                  <Text preset="stat">Game Victory: {PlayerWin}</Text>{" "}
                  {gameVictory(PlayerWin)}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      );
    });
    return stats;
  }

  return (
    <div className="pls">
      <div>
        <Heading className="pls">Point Breakdown</Heading>{" "}
        <Text preset="largeNumber" className="hugepoints">
          {" "}
          {tp}
        </Text>
        {accordionBar(top)}
        {accordionBar(jg)}
        {accordionBar(mid)}
        {accordionBar(bot)}
        {accordionBar(supp)}
      </div>
    </div>
  );
}
