import { NavLink } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import pokeball from '../assets/pokeball.png';

function Home({ teams, onSeeTeamClick, onDeleteTeamClick, onTeamMakerClick }) {

  return (
    <div className='flex flex-col items-center justify-center flex-1'>
      <div className='mt-8 flex flex-col items-center'>
        <h1 className='text-4xl text-center font-bold pt-16'>Build your dream pokemon team!</h1>
        <div className='bg-gray-200 p-36 py-20 my-10'>
          <p className='text-2xl mb-8'>Using the latest web technology available to humans you can now </p>
          <ul className='list-disc leading-loose pl-8'>
            <li><span className='font-semibold text-green-500'>Add pokemon</span> to your team!</li>
            <li><span className='font-semibold text-red-500'>Remove pokemon</span> from your team!</li>
            <li><span className='font-semibold text-blue-500'>Check</span> your pokemon base stats!</li>
            <li>Save up to 4 <span className='font-semibold text-purple-500'>(FOUR!)</span> moves per pokemon!</li>
            <li>And last but not least, you can save <span className='text-amber-400 font-semibold'>THREE whole teams</span> to memory!</li>
          </ul>
        </div>

        <div className='flex flex-col items-center justify-center h-96'>
          <h2 className='text-3xl mb-16'>What are you waiting for!?</h2>
          <div className='border-solid border-2 border-[#74b9ff] hover:bg-[#74b9ff] cursor-pointer hover:text-white text-gray-700 p-2 flex justify-center rounded w-40'>
            <NavLink className='text-center' onClick={onTeamMakerClick} to='/team'>Start Now</NavLink>
          </div>
        </div>
      </div>

      {teams.length > 0
        ? <div className='w-full mt-10'>
          <h2 className='py-5 text-center border-t-4 border-[#2d3436] sm:w-[500px] mx-auto text-xl'>My teams</h2>
          <div className='flex flex-col items-center bg-[#2d3436] gap-28 md:gap-20 pt-10 pb-20 lg:px-20 md:flex-row md:justify-center'>
            {teams.map(elem =>
              <div key={elem.teamName} className='flex flex-col justify-between bg-cover group w-32 h-32 text-center' style={{ backgroundImage: `url(${pokeball})` }}>
                <p className='self-center w-fit border-x-2 border-sky-400 bg-sky-300 relative -top-6 px-3'>{elem.teamName}</p>
                <img className='group-hover:animate-bounce mx-auto' src={elem.team[0].icon} />
                <div className='relative flex -bottom-10'>
                  <NavLink className='flex-1 p-2 bg-blue-300 hover:bg-blue-500' onClick={() => onSeeTeamClick(elem.teamName)} to='/team'>See</NavLink>
                  <button className='flex-1 p-2 bg-red-300 hover:bg-red-500' onClick={() => onDeleteTeamClick(elem.teamName)}>Delete</button>
                </div>
              </div>)}
          </div>
        </div>
        : <Testimonials />}
        </div>
  )
}

      export default Home