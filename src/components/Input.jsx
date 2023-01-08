//import './Input.css';
import { useState } from 'react';

function Input({pokeNames}) {
    const [input, setInput] = useState('');

    function handleInputChange(e) {
        setInput(e.target.value);
        console.log('chaning input');
    }
     
    let filteredPokes = input.length > 0 
        ? pokeNames.results.filter(poke => poke.name.startsWith(input.toLowerCase())).slice(0, 5)
        :[];


   return (
    <div className="mx-auto max-w-3xl text-center">
        <h2 className="p-6 text-2xl">Add a pokemon</h2>

        <div className='p-4'>
            <input type="text" list="pokeNames" value={input} onChange={handleInputChange}
            placeholder="Enter Here"  className='border border-solid'/>
            <datalist id="pokeNames">
                {filteredPokes.map(elem => <option value={elem.name}>{elem.name}</option>)}
            </datalist>
        </div>

    </div>
   )
}

export default Input