//import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
   return (
       <div className='p-2 bg-gray-200 flex border-b-4 space-x-4'>
            <NavLink to='/' style={({ isActive }) => 
                      (isActive ? {borderBottom: 'solid 4px #606060'} : {})}
                      className='border-4 text-[#2d3436] px-2 py-1 hover:bg-[#606060] hover:border-b-[#606060] hover:text-white'>Home</NavLink>
            <NavLink to='/team' style={({ isActive }) => 
                      (isActive ? {borderBottom: 'solid 4px #606060'} : {})}
                      className='border-4 text-[#2d3436] px-2 py-1 hover:bg-[#606060] hover:border-b-[#606060] hover:text-white'>Team</NavLink>
            <NavLink to='/about' style={({ isActive }) => 
                      (isActive ? {borderBottom: 'solid 4px #606060'} : {})}
                      className='border-4 text-[#606060] px-2 py-1 hover:bg-[#606060] hover:border-b-[#606060] hover:text-white'>About</NavLink>
       </div>
   )
}

export default Navbar