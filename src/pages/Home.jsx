//import './Home.css';
import { Link } from 'react-router-dom';

function Home({ teams, onSeeClick, onTeamMakerClick }) {

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
        ? <div>
          <h2 className='text-center'>My teams</h2>
          <div className='flex gap-2 pt-10 pb-20'>
            {teams.map(elem =>
              <div className='w-40 border border-red-500 hover:border-blue-500 text-center'>
                <p>{elem.teamName ? elem.teamName : ''}</p>
                <img className='mx-auto' src={elem.team[0].icon} />
                <div className='flex'>
                  <Link className='flex-1 p-2 bg-blue-300' onClick={() => onSeeClick(elem.teamName)} to='/team'>See</Link>
                  <button className='flex-1 p-2 bg-red-300'>Delete</button>
                </div>
              </div>)}
          </div>
        </div>
        : ''}
    </div>
  )
}

export default Home