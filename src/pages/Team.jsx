//import './Team.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import axios from 'axios';
import { DndContext } from '@dnd-kit/core';

import Card from '../components/Card';
import Input from '../components/Input';
import DroppableCard from '../components/DroppableCard';

import { alreadyInTeam, teamIsNotFull, inputIsValid, makePokeObject, findFirstReplaceable } from '../assets/helper';


const arr = [0, 1, 2, 3, 4, 5];

function Team({ pokeNames, onSaveTeam, globalCurrentTeam }) {
  const [isDropped, setIsDropped] = useState(false);
  const [pokeInHole, setPokeInHole] = useState(null);
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
        console.log(poke)
        setCurrentTeam(oldTeam => {
          let replaceableIndex = findFirstReplaceable(oldTeam);
          poke.cardIndex = replaceableIndex;
          let copy = [...oldTeam];
          copy[replaceableIndex] = poke;
          return copy;
        });
      } catch (err) {
        console.log(err.message)
      } finally {
        console.log(value)
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
    console.log(moves);
    console.log(pokeInHole);
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



  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Input pokeNames={pokeNames} handleAddPoke={handleAddPoke} />
      <div className="bg-gray-400 p-4 w-full mx-auto grid grid-cols-2 justify-items-center gap-5 xs:grid-cols-3 sm:w-4/5 lg:grid-cols-6 lg:w-fit">
        {arr.map(elem => {
          return currentTeam[elem].canBeReplaced
            ? <Card key={`empty${elem}`} />
            : <Card key={`poke${elem}`} poke={currentTeam[elem]} handleDeletePoke={handleDeletePoke} />
        })}
      </div>

      <div className='text-center my-1'>
        <button className='bg-blue-200 ml-2 rounded p-1 px-4 text-gray-500 hover:bg-blue-300'
          onClick={() => onSaveTeam(currentTeam, teamIsNotFull)}>Save team</button>
      </div>

      <DroppableCard isDropped={isDropped} pokeInHole={pokeInHole} onSaveMoves={handleSaveMoves}/>

    </DndContext>
  )
}

export default Team

