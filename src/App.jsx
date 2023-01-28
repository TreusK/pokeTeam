import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
//Components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
//Pages
import Home from "./pages/Home";
import Team from "./pages/Team";
import About from "./pages/About";
//Extra

function App() {
  const [teams, setTeams] = useState([]);
  const [pokeNames, setPokeNames] = useState([]);
  const [loading, setLoading] = useState(true);

  //Fetch the names of pokemon to populate search bar
  useEffect(() => {
    async function getPokes() {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon-species/?limit=20000"
        );
        setPokeNames(response.data.results);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }
    getPokes();
  }, []);

  const handleSaveTeam = (currentTeam, teamIsNotFull) => {
    if (!teamIsNotFull(currentTeam)) {
      setTeams((oldTeams) => [...oldTeams, currentTeam]);
      console.log("Saved!");
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/team"
          element={<Team pokeNames={pokeNames} onSaveTeam={handleSaveTeam} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
