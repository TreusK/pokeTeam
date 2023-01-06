//import './Home.css';
import { Link } from 'react-router-dom';

function Home() {

   return (
       <div className='flex justify-center bg-red-100 flex-1'>
           <div className='bg-green-200 w-96 h-96 mt-8 flex flex-col items-center'>
                <div>
                    <h1>Make team and blablabla</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <h2>Click here and blablablablabla</h2>
                    <div className='bg-blue-300 my-32 p-2 flex justify-center rounded w-40'>
                        <Link className='text-white text-center' to='/team'>To team maker</Link>
                    </div>              
                </div>
           </div>
       </div>
   )
}

export default Home