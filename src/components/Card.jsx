//import './Card.css';

function Card() {
   return (
       <div className='w-36 h-52 bg-blue-100 text-center'>
           <p>Pikachu</p>
           <div className='flex justify-center'>
                <img className='scale-125' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png" alt="mon" />
           </div>
           <div>
                <p>Poison</p>
           </div>
       </div>
   )
}

export default Card