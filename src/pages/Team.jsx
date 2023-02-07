//import './Team.css';
import { useState } from 'react';
import axios from 'axios';
import { DndContext } from '@dnd-kit/core';

import Card from '../components/Card';
import Input from '../components/Input';
import DroppableCard from '../components/DroppableCard';
import Notification from '../components/Notification';

import { alreadyInTeam, teamIsNotFull, teamAlreadyExists, inputIsValid, makePokeObject, findFirstReplaceable } from '../assets/helper';


const arr = [0, 1, 2, 3, 4, 5];

function Team({ pokeNames, onSaveTeam, globalCurrentTeam, teams }) {
  const [isDropped, setIsDropped] = useState(false);
  const [pokeInHole, setPokeInHole] = useState(null);
  const [notif, setNotif] = useState({
    show: false,
    type: '',
    head: '',
    body: '',
  });
  const [currentTeam, setCurrentTeam] = useState(globalCurrentTeam.length !== 0
    ? globalCurrentTeam
    : [
      { cardIndex: 0, canBeReplaced: true },
      { cardIndex: 1, canBeReplaced: true },
      { cardIndex: 2, canBeReplaced: true },
      { cardIndex: 3, canBeReplaced: true },
      { cardIndex: 4, canBeReplaced: true },
      { cardIndex: 5, canBeReplaced: true },
    ]);


  async function handleAddPoke(value) {
    if (inputIsValid(value) && !alreadyInTeam(currentTeam, value) && teamIsNotFull(currentTeam)) {
      try {
        const pokeInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`);
        let poke = makePokeObject(pokeInfo.data);
        setCurrentTeam(oldTeam => {
          let replaceableIndex = findFirstReplaceable(oldTeam);
          poke.cardIndex = replaceableIndex;
          let copy = [...oldTeam];
          copy[replaceableIndex] = poke;
          return copy;
        });
      } catch (err) {
        console.log(err.message)
      }
    }
  }

  //Event handlers
  function handleDeletePoke(poke) {
    console.log('im deletin')
    setCurrentTeam(oldTeam => {
      let replaceableIndex = poke.cardIndex;
      let copy = [...oldTeam];
      copy[replaceableIndex] = { cardIndex: poke.cardIndex, canBeReplaced: true };
      return copy;
    })
    if (pokeInHole && poke.name === pokeInHole.name) {
      setIsDropped(false);
      setPokeInHole(null);
    }
  }

  function handleSaveMoves(moves) {
    let pokeInHoleCopy = Object.assign({}, pokeInHole);
    pokeInHoleCopy.moves = [...moves];
    setCurrentTeam(oldTeam => {
      let replaceableIndex = pokeInHole.cardIndex;
      let copy = [...oldTeam];
      copy[replaceableIndex] = pokeInHoleCopy;
      return copy;
    })
  }

  function handleDragEnd(e) {
    if (e.over) {
      let pokeCopy = currentTeam.find(poke => poke.name == e.active.id);
      setPokeInHole(pokeCopy);
      setIsDropped(true);
    }
  }

  function handleSaveTeamLocal() {
    if (teamAlreadyExists(teams, currentTeam)) {
      setNotif({
        show: true,
        type: 'warning',
        head: 'Bzzt',
        body: 'A team with all the same pokemon already exists!',
      });
      return;
    }
    if (teamIsNotFull(currentTeam)) {
      setNotif({
        show: true,
        type: 'warning',
        head: 'Bzzt',
        body: 'It needs to have 6 pokemon',
      });
      return;
    }
    if (teams.length >= 3) {
      setNotif({
        show: true,
        type: 'warning',
        head: 'Bzzt',
        body: '3 is the maximum amount of teams, please delete one to add another',
      });
      return;
    }
    setNotif({
      show: true,
      type: 'positive',
      head: 'Saved!',
      body: 'Go to Home to see all your teams',
    });
    onSaveTeam(currentTeam);
  }

  function handleNotifClick() {
    setNotif({
      show: false,
      type: '',
      head: '',
      body: '',
    })
  }


  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Input pokeNames={pokeNames} handleAddPoke={handleAddPoke} />
      <div className="bg-gray-300 p-4 w-full mx-auto grid grid-cols-2 justify-items-center gap-5 xs:grid-cols-3 sm:w-4/5 lg:grid-cols-6 lg:w-fit">
        {arr.map(elem => {
          return currentTeam[elem].canBeReplaced
            ? <Card key={`empty${elem}`} />
            : <Card key={`poke${elem}`} poke={currentTeam[elem]} handleDeletePoke={handleDeletePoke} />
        })}
      </div>

      <div className='text-center my-1'>
        <button className='border-solid border-2 border-[#74b9ff] hover:bg-[#74b9ff] cursor-pointer hover:text-white text-gray-700 rounded px-2 py-1'
          onClick={handleSaveTeamLocal}>Save team</button>
      </div>

      {notif.show && <Notification typeOfNotif={notif.type} messageHead={notif.head} messageBody={notif.body} onNotifClick={handleNotifClick}/>}

      <DroppableCard isDropped={isDropped} pokeInHole={pokeInHole} onSaveMoves={handleSaveMoves} />

    </DndContext>
  )
}

export default Team

