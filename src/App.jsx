import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
//Components
import Header from './components/Header';
import Navbar from './components/Navbar';
//Pages
import Home from './pages/Home';
import Team from './pages/Team';
import About from './pages/About';
import './App.css';
//Extra


function App() {
    const [teams, setTeams] = useState([]);
    const [pokeNames, setPokeNames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getPokes() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
                setPokeNames(response.data);
            } catch(err) {
                console.log(err.message)
            } finally {
                setLoading(false);
            }
        }
        getPokes();
        console.log('fetchin');
    }, []); 


    return (
        <div className='h-screen flex flex-col'>
            <Header />
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/team' element={<Team pokeNames={pokeNames}/>} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    )
}

export default App