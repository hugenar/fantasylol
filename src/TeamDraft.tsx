import { useEffect, useState } from "react";
import { listPlayers } from "./FetchData";
import { useNavigate } from "react-router-dom";
import "./style.css";
import {
  ToggleButton,
  Button,
  Card,
  Heading,
  DialogTrigger,
  Modal,
} from "@lolmath/ui";
import { Text } from "@lolmath/ui";
import { usePersistedState } from "./usePersistedState";

export default function TeamDraft() {
  const [selectedFilters, setSelectedFilters] = useState<String[]>([]);
  const [filteredItems, setFilteredItems] = useState(listPlayers);
  const [userTeam, setUserTeam] = usePersistedState<String[]>("userteam", []);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  let filters = ["Top", "Jungle", "Mid", "Bot", "Support"];

  const handleFilterButtonClick = (selectedCategory: string) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((role) => role !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  const handlePlayerButtonClick = (selectedPlayer: any) => {
    if (userTeam.includes(selectedPlayer.Name)) {
      let x = userTeam.indexOf(selectedPlayer.Name);
      let team = [...userTeam];
      team[x] = "";
      setUserTeam(team);
    } else if (selectedPlayer.Role == "Top") {
      let team = [...userTeam];
      team[0] = selectedPlayer.Name;
      setUserTeam(team);
    } else if (selectedPlayer.Role == "Jungle") {
      let team = [...userTeam];
      team[1] = selectedPlayer.Name;
      setUserTeam(team);
    } else if (selectedPlayer.Role == "Mid") {
      let team = [...userTeam];
      team[2] = selectedPlayer.Name;
      setUserTeam(team);
    } else if (selectedPlayer.Role == "Bot") {
      let team = [...userTeam];
      team[3] = selectedPlayer.Name;
      setUserTeam(team);
    } else if (selectedPlayer.Role == "Support") {
      let team = [...userTeam];
      team[4] = selectedPlayer.Name;
      setUserTeam(team);
    } else {
      setUserTeam([...userTeam, selectedPlayer.Name]);
    }
  };

  const toNextPage = () => {
    navigate("/next", { state: { userTeam } });
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = listPlayers.filter(
          (item: any) => item.Role === selectedCategory
        );
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...listPlayers]);
    }
  };

  function playerContainer(player: String, role: string) {
    return (
      <div className="player-container">
        <img
          src={`/${player}.png`}
          className="playerimage"
          alt="new"
          onError={(e) => {
            e.currentTarget.src = "helmetbro.webp";
          }}
        ></img>
        <Text preset="lg" color="gold100">
          {" "}
          {player}
        </Text>

        <img src={`/${role}_icon.webp`}></img>
      </div>
    );
  }

  const handleClick = () => {
    setModal(false);
  };

  const handleConfirmTeamButtonClick = () => {
    var count = 0;
    for (let i = 0; i < 5; i++) {
      if (userTeam[i] != "" && typeof userTeam[i] != "undefined") {
        count++;
      }
    }

    if (count == 5) {
      toNextPage();
    } else {
      setModal(true);
    }
  };

  return (
    <div>
      <Heading className="heading"> Welcome to Summoner's Rift </Heading>
      <div className="buttons-roster-container">
        <div className="buttons-container">
          <Heading className="h" preset="h5">
            {" "}
            filter by{" "}
          </Heading>
          {filters.map((Role, idx) => (
            <ToggleButton
              onPress={() => handleFilterButtonClick(Role)}
              key={`filters-${idx}`}
              preset="hextech"
              className="rolebutton"
            >
              {Role}
            </ToggleButton>
          ))}
        </div>

        <Card className="roster-container">
          {playerContainer(userTeam[0], "Top")}
          {playerContainer(userTeam[1], "Jungle")}
          {playerContainer(userTeam[2], "Mid")}
          {playerContainer(userTeam[3], "Bot")}
          {playerContainer(userTeam[4], "Support")}
        </Card>
      </div>

      <div>
        <Card className="items-container">
          <div className="heading">
            <DialogTrigger>
              <Button
                className="confirm"
                preset="hextech"
                onPress={() => handleConfirmTeamButtonClick()}
              >
                Confirm Team
                <Modal isOpen={modal}>
                  <Heading preset="h5">
                    {" "}
                    A summoner has disconnected...{" "}
                  </Heading>
                  <Text className="modalpad">
                    {" "}
                    Fill out your roster before proceeding{" "}
                  </Text>
                  <Button onPress={() => handleClick()}>
                    {" "}
                    Maybe I do need 5 Players...{" "}
                  </Button>
                </Modal>{" "}
              </Button>
            </DialogTrigger>
            <Heading preset="h3" className="heading">
              {" "}
              Minions Have Spawned...{" "}
            </Heading>
          </div>

          <div className="items-container">
            {filteredItems.map((item: any, idx: any) => (
              <div key={`items-${idx}`} className="item">
                <span className="test">
                  <img
                    src={`/${item.Name}.png`}
                    width={100}
                    height={100}
                    alt="new"
                    onError={(e) => {
                      e.currentTarget.src = "helmetbro.webp";
                    }}
                  ></img>
                </span>
                <Button
                  className="button"
                  onPress={() => handlePlayerButtonClick(item)}
                >
                  {item.Name}
                  <Text color="gold100"> {item.Team} </Text>

                  <Text color="gold100"> {item.Role} </Text>
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
