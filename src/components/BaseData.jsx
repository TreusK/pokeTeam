import { useState, useEffect } from 'react';


function BaseData({ pokeInHole, onSaveMoves }) {
  const [move1, setMove1] = useState('');
  const [move2, setMove2] = useState('');
  const [move3, setMove3] = useState('');
  const [move4, setMove4] = useState('');

  useEffect(() => {
    setMove1(pokeInHole?.moves[0] || '');
    setMove2(pokeInHole?.moves[1] || '');
    setMove3(pokeInHole?.moves[2] || '');
    setMove4(pokeInHole?.moves[3] || '');
  }, [pokeInHole])

  function handleInputChange(e) {
    switch (e.target.id) {
      case 'moveInput1': setMove1(e.target.value);
        break;
      case 'moveInput2': setMove2(e.target.value);
        break;
      case 'moveInput3': setMove3(e.target.value);
        break;
      case 'moveInput4': setMove4(e.target.value);
        break;
    }
  }

  function handleClick() {
    onSaveMoves([move1, move2, move3, move4]);
  }

  return (
    <div className='w-[350px] flex items-center justify-center ml-6'>
      {pokeInHole
        ? <div className='flex flex-col gap-1'>
          <input placeholder='Move 1' id='moveInput1' value={move1 ? move1[0].toUpperCase() + move1.slice(1) : ''} onChange={handleInputChange} type="text" list="move1" className='p-1 border border-solid' />
          <datalist id="move1">
            {pokeInHole.allMoves.map(elem => <option>{elem.move.name}</option>)}
          </datalist>

          <input placeholder='Move 2' id='moveInput2' value={move2 ? move2[0].toUpperCase() + move2.slice(1) : ''} onChange={handleInputChange} type="text" list="move2" className='p-1 border border-solid' />
          <datalist id="move2">
            {pokeInHole.allMoves.map(elem => <option>{elem.move.name}</option>)}
          </datalist>

          <input placeholder='Move 3' id='moveInput3' value={move3 ? move3[0].toUpperCase() + move3.slice(1) : ''} onChange={handleInputChange} type="text" list="move3" className='p-1 border border-solid' />
          <datalist id="move3">
            {pokeInHole.allMoves.map(elem => <option>{elem.move.name}</option>)}
          </datalist>

          <input placeholder='Move 4' id='moveInput4' value={move4 ? move4[0].toUpperCase() + move4.slice(1) : ''} onChange={handleInputChange} type="text" list="move4" className='p-1 border border-solid' />
          <datalist id="move4">
            {pokeInHole.allMoves.map(elem => <option>{elem.move.name}</option>)}
          </datalist>
          <button onClick={handleClick}>Save moves</button>
        </div>
        : ''
      }
    </div>
  )
}

export default BaseData