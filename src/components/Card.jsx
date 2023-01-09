//import './Card.css';
import questionMark from '../assets/questionMark.png'

function Card({poke}) {
    if(!poke) {
        return(
            <div className='Card w-36 h-48 bg-white text-center rounded shadow-lg'>
                <p>?</p>
                <div className='flex justify-center bg-blue-100'>
                        <img className='scale-125' src={questionMark} alt="mon" />
                </div>
                <div>
                        <p>Poison</p>
                </div>
            </div>
        )
    }
    return (
       <div className='Card w-36 h-48 bg-white text-center rounded shadow-lg'>
           <p>{poke.name}</p>
           <div className='flex justify-center bg-blue-100'>
                <img className='scale-125' src={poke.sprite} alt="mon" />
           </div>
           <div>
                <p>Poison</p>
           </div>
       </div>
   )
}

export default Card