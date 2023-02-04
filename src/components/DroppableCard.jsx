import { useDroppable } from '@dnd-kit/core';
import { typesColors } from '../assets/helper';

import BaseStats from './BaseStats';
import BaseData from './BaseData';

function DroppableCard({ isDropped, pokeInHole, onSaveMoves }) {
  const { setNodeRef } = useDroppable({ id: 'droppable' });
  let bgColor = pokeInHole ? typesColors[pokeInHole.types[0]] : '#A8A77A';
  let gradientColor = pokeInHole
    ? { background: `linear-gradient(#ffffff 30%, ${bgColor} 99%)` }
    : { background: 'white' };

  return (
    <div className='py-12' style={gradientColor}>

      <div className='droppableContentContainer mx-auto flex flex-col items-center gap-10 lg:flex-row lg:w-fit'>
        <BaseStats pokeInHole={pokeInHole} />

        <div ref={setNodeRef} className='flex justify-center items-center order-1 lg:order-2 w-40 h-52 bg-white mx-auto border-dashed border-2 rounded border-sky-500' >
          {!isDropped
            ? 'Drop here'
            : <div className={`Card w-36 h-48 text-center rounded shadow-lg group `} style={{ background: bgColor }}>
              <div className='flex relative overflow-hidden'>
                <p className='mx-auto'>{pokeInHole.name[0].toUpperCase() + pokeInHole.name.slice(1)}</p>
              </div>
              <div className='CardImgPattern h-24 flex justify-center'>
                <img className='scale-125' src={pokeInHole.sprite} alt="mon" />
              </div>
              <div>
                {pokeInHole.types.map(elem => <p className='font-["Bakbak"]' key={`pokeInHoleTypes${pokeInHole.name + elem}`}>{elem}</p>)}
              </div>
            </div>
          }
        </div >

        <BaseData pokeInHole={pokeInHole} onSaveMoves={onSaveMoves}/>
      </div>

    </div>
  )
}

export default DroppableCard