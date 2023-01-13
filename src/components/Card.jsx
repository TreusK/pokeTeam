//import './Card.css';
import {nanoid} from 'nanoid';
import questionMark from '../assets/questionMark.png'

const typesColors = {
    normal: 'bg-gray-300',
    electric: 'yellow-200',
    fire: 'orange-300',
    water: 'blue-400',
    grass: 'lime-400',
    ice: 'sky-200',
    fighting: 'red-400',
    poison: 'purple-400',
    ground: 'amber-200',
    rock: 'yellow-700',
    flying: 'violet-300',
    psychic: 'pink-400',
    bug: 'lime-600',
    ghost: 'deep-purple-900',
    dark: 'grey-800',
    dragon: 'indigo-500',
    steel: 'grey-500',
    fairy: 'pink-100'
}

function Card({poke}) {

    if(!poke) {
        return(
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
        let bgColor = `bg-${typesColors[poke.types[0]]}`;
        return (
       <div className={`Card w-36 h-48 text-center rounded shadow-lg group ${bgColor}`}>
            <div className='flex relative overflow-hidden'>
                <p className='mx-auto'>{poke.name[0].toUpperCase() + poke.name.slice(1)}</p>
                <div className={`w-[26px] h-[26px] absolute -right-3 -top-3 rotate-45 group-hover:bg-red-500`}></div>
            </div>
            <div className='h-24 flex justify-center bg-gray-100'>
                    <img className='scale-125' src={poke.sprite} alt="mon" />
            </div>
            <div>
                {poke.types.map(elem => <p className='font-["Bakbak"]' key={nanoid()}>{elem}</p>)}
            </div>
       </div>
   )}
}

export default Card