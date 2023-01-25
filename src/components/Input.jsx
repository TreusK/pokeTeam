//import './Input.css';
import { useState } from 'react';
import {nanoid} from 'nanoid';

function Input({pokeNames, handleAddPoke}) {
    const [input, setInput] = useState('');

    function handleInputChange(e) {
        setInput(e.target.value);
    }
     
    let filteredPokes = input.length > 0 
        ? pokeNames.filter(poke => (poke.name.startsWith(input.toLowerCase()) && poke.name.length !== input.length)).slice(0, 5)
        : [];


   return (
    <div className="mx-auto max-w-3xl text-center">
        <h2 className="p-6 text-2xl">Add a pokemon</h2>

        <div className='p-4'>
            <input type="text" list="pokeNames" value={input} onChange={handleInputChange}
            placeholder="Pikachu"  className='p-2 border border-solid'/>
            <datalist id="pokeNames">
                {filteredPokes.map(elem => <option key={nanoid()} value={elem.name}>{elem.name}</option>)}
            </datalist>
            <button className='bg-blue-200 ml-2 rounded p-2 px-6 text-gray-500 hover:bg-blue-300'
                    onClick={() => handleAddPoke(input)}>Add</button>
        </div>

    </div>
   )
}

export default Input