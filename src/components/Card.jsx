import './Card.css';
import { useDraggable } from '@dnd-kit/core';
import questionMark from '../assets/questionMark.png'
import { typesColors } from '../assets/helper';

function Card({ poke, handleDeletePoke }) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({id: poke ? poke.name : 'none'});

  let bgColor = poke ? typesColors[poke.types[0]] : '#A8A77A';
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    background: bgColor,
  } : {background: bgColor,};

  if (!poke) {
    return (
      <div className='Card w-36 h-48 bg-white text-center rounded shadow-lg'>
        <p>?</p>
        <div className='h-24 flex justify-center bg-gray-200'>
          <img className='scale-125' src={questionMark} alt="mon" />
        </div>
        <div>
          <p>---</p>
        </div>
      </div>
    )
  } else {
    return (
        <div className={`Card w-36 h-48 text-center rounded shadow-lg group z-10`}
        ref={setNodeRef} style={style}>
          <div className='flex relative overflow-hidden'>
            <p className='mx-auto' {...listeners} {...attributes}>{poke.name ? poke.name[0].toUpperCase() + poke.name.slice(1) : ''}</p>
            <div onClick={() => handleDeletePoke(poke)} className={`w-[26px] h-[26px] absolute -right-3 -top-3 rotate-45 group-hover:bg-red-500`}></div>
          </div>
          <div className='CardImgPattern h-24 flex justify-center' {...listeners} {...attributes}>
            <img className='scale-125' src={poke.sprite} alt="mon" />
          </div>
          <div {...listeners} {...attributes}>
            {poke.types ? poke.types.map(elem => <p className='font-["Bakbak"]' key={`pokeTypes${elem + poke.name}`}>{elem}</p>) : 'hola'}
          </div>
        </div>
    )
  }
}

export default Card 