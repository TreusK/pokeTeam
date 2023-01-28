import { useState } from "react";
import axios from "axios";
import PokeCard from "../components/PokeCard";
import PokeForm from "../components/PokeForm";

const arr = [0, 1, 2, 3, 4, 5];

function Team({ pokeNames, onSaveTeam }) {
  const [currentTeam, setCurrentTeam] = useState(defaultTeamState);

  async function handleAddPoke(value) {
    if (alreadyInTeam(currentTeam, value) || !teamIsNotFull(currentTeam)) {
      return;
    }

    try {
      const pokeInfo = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`
      );
      const poke = makePokeObject(pokeInfo.data);
      console.log(poke);
      setCurrentTeam((oldTeam) => {
        const replaceableIndex = findFirstReplaceable(oldTeam);
        poke.cardIndex = replaceableIndex;
        const copy = [...oldTeam];
        copy[replaceableIndex] = poke;
        return copy;
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  const handleDeletePoke = (poke) => {
    setCurrentTeam((oldTeam) => {
      return oldTeam.map((p) => {
        if (p.cardIndex === poke.cardIndex) {
          return {
            cardIndex: poke.cardIndex,
            canBeReplaced: true,
          };
        }
        return p;
      });
    });
  };

  return (
    <div>
      <PokeForm pokeNames={pokeNames} onAddPoke={handleAddPoke} />
      <div className="bg-gray-400 p-4 w-full mx-auto grid grid-cols-2 justify-items-center gap-5 xs:grid-cols-3 sm:w-4/5 lg:grid-cols-6 lg:w-fit">
        {arr.map((elem) => {
          return !currentTeam[elem].canBeReplaced ? (
            <PokeCard
              key={"card" + currentTeam[elem].cardIndex}
              poke={currentTeam[elem]}
              onDeletePoke={handleDeletePoke}
            />
          ) : (
            <PokeCard key={"card" + currentTeam[elem].cardIndex} />
          );
        })}
      </div>
      <div className="text-center my-2">
        <button
          className="bg-blue-200 ml-2 rounded p-2 px-6 text-gray-500 hover:bg-blue-300"
          onClick={() => onSaveTeam(currentTeam, teamIsNotFull)}
        >
          Save team
        </button>
      </div>
    </div>
  );
}

const defaultTeamState = [
  { cardIndex: 0, canBeReplaced: true },
  { cardIndex: 1, canBeReplaced: true },
  { cardIndex: 2, canBeReplaced: true },
  { cardIndex: 3, canBeReplaced: true },
  { cardIndex: 4, canBeReplaced: true },
  { cardIndex: 5, canBeReplaced: true },
];

//Helper functions
function alreadyInTeam(teamArr, name) {
  return teamArr.some((elem) => elem.name == name);
}

function teamIsNotFull(teamArr) {
  return teamArr.some((elem) => elem.canBeReplaced == true);
}

function getTypes(arrOfTypes) {
  return arrOfTypes.map((typeObj) => typeObj.type.name);
}

function makePokeObject(data) {
  return {
    id: data.id,
    name: data.name,
    sprite: data.sprites.front_default,
    types: getTypes(data.types),
    baseStats: data.stats,
    canBeReplaced: false,
  };
}

function findFirstReplaceable(oldTeam) {
  return oldTeam.findIndex((elem) => elem.canBeReplaced === true);
}

export default Team;
