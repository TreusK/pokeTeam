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
import {teamAlreadyExists} from './assets/helper';


function App() {
    const [teams, setTeams] = useState([]);
    const [pokeNames, setPokeNames] = useState([]);
    const [globalCurrentTeam, setGlobalCurrentTeam] = useState([])
    const [loading, setLoading] = useState(true);

    //Fetch the names of pokemon to populate search bar
    useEffect(() => {
        async function getPokes() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon-species/?limit=20000');
                setPokeNames(response.data.results);
            } catch(err) {
                console.log(err.message)
            } finally {
                setLoading(false);
            }
        }
        getPokes();
    }, []); 

    //Event functions
    function handleSaveTeam(currentTeam, teamIsNotFull) {
        if(!teamIsNotFull(currentTeam) && !teamAlreadyExists(teams, currentTeam)) {
            if(teams.length > 4) {
              alert('4 is the maximum amount of teams, please delete one to add another');
              return;
            }
            let teamsNumber = teams.length + 1;
            let obj = {
              teamName: 'Team ' + teamsNumber,
              team: [...currentTeam],
            }
            setTeams(oldTeams => [...oldTeams, obj])
            setGlobalCurrentTeam(currentTeam);
            console.log('Saved!')
        }
    }

    function handleSeeClick(teamName) {
      let foundTeam = teams.find(team => team.teamName === teamName);
      setGlobalCurrentTeam(foundTeam.team);
    }

    function handleTeamMakerClick() {
      console.log('clicked')
      setGlobalCurrentTeam([]);
    }


    return (
        <div className='min-h-screen flex flex-col'>
            <Header />
            <Navbar />
            <Routes>
                <Route path='/' element={<Home teams={teams} onSeeClick={handleSeeClick} onTeamMakerClick={handleTeamMakerClick} />}  />
                <Route path='/team' element={<Team pokeNames={pokeNames} onSaveTeam={handleSaveTeam} globalCurrentTeam={globalCurrentTeam}/>} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    )
}

export default App