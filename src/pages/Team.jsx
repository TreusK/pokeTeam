//import './Team.css';
import {useState} from 'react';
import {nanoid} from 'nanoid';
import axios from 'axios';

import Card from '../components/Card';
import Input from '../components/Input';


const arr = [0, 1, 2, 3, 4, 5];

function Team({pokeNames, handleSaveTeam}) {
    const [currentTeam, setCurrentTeam] = useState([]);

    async function handleAddPoke(value) {
        if(value && value[0] !== ' ' && currentTeam.length < 6 && !alreadyInTeam(currentTeam, value)) {
            try {
                const pokeInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`);
                let poke = makePokeObject(pokeInfo.data);
                console.log(poke)
                setCurrentTeam(oldTeam => [...oldTeam, poke]);
            } catch(err) {
                console.log(err.message)
            } finally {
                console.log(value)
            }
        }
    }

    function alreadyInTeam(teamArr, name) {
        return teamArr.length > 0 
            ? teamArr.some(elem => elem.name == name)
            : false;
    }

    function getTypes(arrOfTypes) {
        return arrOfTypes.map(typeObj => typeObj.type.name);
    }

    function makePokeObject(data) {
        return {
            id: data.id, 
            name: data.name,    
            sprite: data.sprites.front_default, 
            types: getTypes(data.types),
            baseStats: data.stats,
        }
    }

   return (
       <div>
            <Input pokeNames={pokeNames} handleAddPoke={handleAddPoke}/>
            <div className="bg-gray-400 p-4 w-full mx-auto grid grid-cols-2 justify-items-center gap-5 xs:grid-cols-3 sm:w-4/5 lg:grid-cols-6 lg:w-fit">
                {arr.map((elem, index) => {
                    return currentTeam[index] 
                        ? <Card key={nanoid()} poke={currentTeam[index]}/>
                        : <Card key={nanoid()}/>
                })}
            </div>   
            <div className='text-center my-2'>
                <button className='bg-blue-200 ml-2 rounded p-2 px-6 text-gray-500 hover:bg-blue-300' onClick={() => handleSaveTeam(currentTeam)}>Save team</button>
            </div> 
            
        </div>
   )
}

export default Team

