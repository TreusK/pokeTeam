//import './Team.css';
import {useState} from 'react';
import {nanoid} from 'nanoid';
import axios from 'axios';

import Card from '../components/Card';
import Input from '../components/Input';

let poke1 = {
    name: 'Pikachu',
    id: 25,
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
}

let arr = [0, 1, 2, 3, 4, 5];

function Team({pokeNames}) {
    const [currentTeam, setCurrentTeam] = useState([poke1]);

    async function handleAddPoke(value) {
        if(value && value[0] !== ' ' && currentTeam.length < 6) {
            try {
                const pokeInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`);
                let poke = {
                    name: pokeInfo.data.name,
                    id: pokeInfo.data.id,
                    sprite: pokeInfo.data.sprites.front_default
                };
                setCurrentTeam(oldTeam => [...oldTeam, poke]);

            } catch(err) {
                console.log(err.message)
            } finally {
                console.log(value)
            }
        }
    }

   return (
       <div>
            <Input pokeNames={pokeNames} handleAddPoke={handleAddPoke}/>
            <div className="bg-gray-400 p-2 max-w-4xl mx-auto grid grid-cols-2 xs:grid-cols-3 justify-items-center gap-10">
                {arr.map((elem, index) => {
                    return currentTeam[index] 
                        ? <Card key={nanoid()} poke={currentTeam[index]}/>
                        : <Card key={nanoid()}/>
                })}
            </div>    
        </div>
   )
}

export default Team

{/* <div class="container">
        <h1>GeeksforGeeks</h1>
        <h3>HTML <datalist> Tag</h3>
        <label for="programmingLanguages">
            Choose Your Favourite Programming Language:
        </label>
        <div class="text-container">
            <input type="text" list="programmingLanguages" 
                        placeholder="Enter Here" />
            <datalist id="programmingLanguages">
                <option value="Objective C">Objective C</option>
                <option value="C++">C++</option>
                <option value="C#">C#</option>
                <option value="Cobol">Cobol</option>
                <option value="Go">Go</option>
                <option value="Java">Java</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="PHP">PHP</option>
                <option value="Pascal">Pascal</option>
                <option value="Perl">Perl</option>
                <option value="R">R</option>
                <option value="Swift">Swift</option>
            </datalist>
        </div>
    </div> */}