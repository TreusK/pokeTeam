import { useDroppable } from '@dnd-kit/core';
import { typesColors, createGradient } from '../assets/helper';

import BaseStats from './BaseStats';
import BaseData from './BaseData';

function DroppableCard({ isDropped, pokeInHole, onSaveMoves }) {
  const { setNodeRef } = useDroppable({ id: 'droppable' });

  let bgColor = '#A8A77A';
  if (pokeInHole) {
    if (pokeInHole.types.length > 1) {
      let color1 = typesColors[pokeInHole.types[0]];
      let color2 = typesColors[pokeInHole.types[1]];
      bgColor = createGradient(color1, color2);
    } else {
      bgColor = typesColors[pokeInHole.types[0]];
    }
  }

  let gradientColor = pokeInHole
    ? { background: `linear-gradient(#ffffff 30%, ${typesColors[pokeInHole.types[0]]} 99%)` }
    : { background: 'white' };
  

  return (
    <div className='py-12' style={gradientColor}>

      <div className='droppableContentContainer mx-auto flex flex-col items-center gap-10 lg:flex-row lg:w-fit'>
        <BaseStats pokeInHole={pokeInHole} />

        <div ref={setNodeRef} className='select-none flex justify-center items-center order-1 lg:order-2 w-40 h-52 bg-white mx-auto border-dashed border-2 rounded border-sky-500' >
          {!isDropped
            ? 'Drop here'
            : <div className={`Card w-36 h-48 text-center rounded shadow-lg group `} style={{ background: bgColor }}>
              <div className='flex relative overflow-hidden'>
                <p className='CardPokeName mx-auto'>{pokeInHole.name[0].toUpperCase() + pokeInHole.name.slice(1)}</p>
              </div>
              <div className='CardImgPattern h-24 flex justify-center'>
                <img className='scale-125' src={pokeInHole.sprite} alt="mon" />
              </div>
              <div className='pt-2'>
                {pokeInHole.types.map(elem => <p className='font-["Bakbak"]' key={`pokeInHoleTypes${pokeInHole.name + elem}`}>{elem}</p>)}
              </div>
            </div>
          }
        </div >

        <BaseData pokeInHole={pokeInHole} onSaveMoves={onSaveMoves} />
      </div>

    </div>
  )
}

export default DroppableCard