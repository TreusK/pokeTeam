import './Card.css';
import { useDraggable } from '@dnd-kit/core';
import questionMark from '../assets/questionMark.png'
import { typesColors, createGradient } from '../assets/helper';

function Card({ poke, handleDeletePoke }) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({id: poke ? poke.name : 'none'});

  let bgColor = '#A8A77A';
  if(poke) {
    if(poke.types.length > 1) {
      let color1 = typesColors[poke.types[0]];
      let color2 = typesColors[poke.types[1]];
      bgColor = createGradient(color1, color2);
    } else {
      bgColor = typesColors[poke.types[0]];
    }
  }

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
            <p className='CardPokeName mx-auto' {...listeners} {...attributes}>{poke.name ? poke.name[0].toUpperCase() + poke.name.slice(1) : ''}</p>
            <div onClick={() => handleDeletePoke(poke)} className={`w-[26px] h-[26px] absolute -right-3 -top-3 rotate-45 cursor-pointer group-hover:bg-red-500`}></div>
          </div>
          <div className='CardImgPattern h-24 flex justify-center' {...listeners} {...attributes}>
            <img className='scale-125' src={poke.sprite} alt="mon" />
          </div>
          <div className='pt-2' {...listeners} {...attributes}>
            {poke.types.map(elem => <p className='CardTypes' key={`pokeTypes${elem + poke.name}`}>{elem}</p>)}
          </div>
        </div>
    )
  }
}

export default Card 