//import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
   return (
       <div className='p-2 pl-8 bg-[#525252] text-white flex space-x-4'>
            <NavLink to='/' style={({ isActive }) => 
                      (isActive ? {borderBottom: 'solid 2px white'} : {})}
                      className='text-white px-2 py-1 hover:bg-white hover:text-black'>Home</NavLink>
            <NavLink to='/team' style={({ isActive }) => 
                      (isActive ? {borderBottom: 'solid 2px white'} : {})}
                      className='text-white px-2 py-1 hover:bg-white hover:text-black'>Team</NavLink>
            <NavLink to='/about' style={({ isActive }) => 
                      (isActive ? {borderBottom: 'solid 2px white'} : {})}
                      className='text-white px-2 py-1 hover:bg-white hover:text-black'>About</NavLink>
       </div>
   )
}

export default Navbar