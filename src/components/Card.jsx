//import './Card.css';
import questionMark from '../assets/questionMark.png'

function Card() {
   return (
       <div className='Card w-36 h-48 bg-white text-center rounded shadow-lg'>
           <p>Pikachu</p>
           <div className='flex justify-center bg-blue-100'>
                <img className='scale-125' src={questionMark} alt="mon" />
           </div>
           <div>
                <p>Poison</p>
           </div>
       </div>
   )
}

export default Card