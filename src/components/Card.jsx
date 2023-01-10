//import './Card.css';
import {nanoid} from 'nanoid';
import questionMark from '../assets/questionMark.png'

const typesColors = {
    normal: 'bg-gray-300',
    electric: 'bg-yellow-200',
    fire: 'bg-orange-300',
    water: 'bg-blue-400',
    grass: 'bg-lime-400',
    ice: 'bg-sky-200',
    fighting: 'bg-red-400',
    poison: 'bg-purple-400',
    ground: 'bg-amber-200',
    rock: 'bg-yellow-700',
    flying: 'bg-violet-300',
    psychic: 'bg-pink-400',
    bug: 'bg-lime-600',
    ghost: 'bg-deep-purple-900',
    dark: 'bg-grey-800',
    dragon: 'bg-indigo-500',
    steel: 'bg-grey-500',
    fairy: 'bg-pink-100'
}

function Card({poke}) {
    if(!poke) {
        return(
            <div className='Card w-36 h-48 bg-white text-center rounded shadow-lg'>
                <p>?</p>
                <div className='flex justify-center bg-gray-200'>
                        <img className='scale-125' src={questionMark} alt="mon" />
                </div>
                <div>
                        <p>---</p>
                </div>
            </div>
        )
    }
    return (
       <div className={`Card w-36 h-48 bg-white text-center rounded shadow-lg ${typesColors[poke.types[0].type.name]}`}>
           <p>{poke.name[0].toUpperCase() + poke.name.slice(1)}</p>
           <div className='h-24 flex justify-center bg-gray-100'>
                <img className='scale-125' src={poke.sprite} alt="mon" />
           </div>
           <div>
            {poke.types.map(elem => <p key={nanoid()}>{elem.type.name}</p>)}
           </div>
       </div>
   )
}

export default Card