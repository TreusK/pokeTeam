import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
//Components
import Header from './components/Header';
import Navbar from './components/Navbar';
//Pages
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import './App.css';
//Extra

let isFirstRender = true;

function App() {
  const [teams, setTeams] = useState(JSON.parse(localStorage.getItem('teams')));
  const [pokeNames, setPokeNames] = useState([]);
  const [globalCurrentTeam, setGlobalCurrentTeam] = useState([]);

  //Fetch the names of pokemon to populate search bar
  useEffect(() => {
    async function getPokes() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon-species/?limit=20000');
        setPokeNames(response.data.results);
      } catch (err) {
        console.log(err.message)
      }
    }
    getPokes();
  }, []);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    localStorage.setItem('teams', JSON.stringify(teams));
  }, [teams])

  //Event functions
  function handleSaveTeam(currentTeam) {
    let teamsNumber = teams.length + 1;
    let obj = {
      teamName: 'Team ' + teamsNumber,
      team: [...currentTeam],
    }
    setTeams(oldTeams => [...oldTeams, obj])
    setGlobalCurrentTeam(currentTeam);
  }

  function handleEditTeam(currentTeam, index) {
    setTeams(oldTeams => {
      let copy = [...oldTeams];
      copy[index].team = [...currentTeam];
      return copy; 
    })
    setGlobalCurrentTeam(currentTeam);
  }

  function handleSeeTeamClick(teamName) {
    let foundTeam = teams.find(team => team.teamName === teamName);
    setGlobalCurrentTeam(foundTeam.team);
  }

  function handleDeleteTeamClick(teamName) {
    setTeams(oldTeams => {
      let oldTeamsCopy = [...oldTeams];
      let filteredCopy = oldTeamsCopy.filter(team => team.teamName !== teamName);
      filteredCopy.map((elem, index) => elem.teamName = `Team ${index + 1}`);
      return filteredCopy;
    })
    setGlobalCurrentTeam([]);
  }

  function handleTeamMakerClick() {
    setGlobalCurrentTeam([]);
  }


  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' index element={<Home teams={teams} onSeeTeamClick={handleSeeTeamClick}
          onDeleteTeamClick={handleDeleteTeamClick} onTeamMakerClick={handleTeamMakerClick} />} />
        <Route path='/team' element={<Team pokeNames={pokeNames} teams={teams} onSaveTeam={handleSaveTeam} 
          globalCurrentTeam={globalCurrentTeam} onEditTeam={handleEditTeam}/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App