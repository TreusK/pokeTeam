import { Link } from 'react-router-dom';
import pokeball from '../assets/pokeball.png';

function Home({ teams, onSeeTeamClick, onDeleteTeamClick, onTeamMakerClick }) {

  return (
    <div className='flex flex-col items-center justify-center bg-red-100 flex-1'>
      <div className='bg-green-200 w-96 h-96 mt-8 flex flex-col items-center'>
        <div>
          <h1>Make team and blablabla</h1>
        </div>
        <div className='flex flex-col items-center'>
          <h2>Click here and blablablablabla</h2>
          <div className='bg-blue-300 my-32 p-2 flex justify-center rounded w-40'>
            <Link className='text-white text-center' onClick={onTeamMakerClick} to='/team'>To team maker</Link>
          </div>
        </div>
      </div>

      {teams.length > 0
        ? <div className='bg-gray-200 w-full pt-10'>
            <h2 className='text-center text-xl'>My teams</h2>
            <div className='flex flex-col items-center bg-blue-200 gap-20 pt-10 pb-20 md:flex-row md:justify-center'>
              {teams.map(elem =>
                <div key={elem.teamName} className='flex flex-col justify-between bg-cover group w-[200px] h-[200px] text-center' style={{backgroundImage: `url(${pokeball})`}}>
                  <p className='relative -top-6'>{elem.teamName}</p>
                  <img className='group-hover:animate-bounce mx-auto' src={elem.team[0].icon} />
                  <div className='relative flex -bottom-10'>
                    <Link className='flex-1 p-2 bg-blue-300 hover:bg-blue-500' onClick={() => onSeeTeamClick(elem.teamName)} to='/team'>See</Link>
                    <button className='flex-1 p-2 bg-red-300 hover:bg-red-500' onClick={() => onDeleteTeamClick(elem.teamName)}>Delete</button>
                  </div>
                </div>)}
            </div>
          </div>
        : ''}
    </div>
  )
}

export default Home