import { useState, useEffect } from "react";
import CharacterCard from "./components/character-card/character-card";
import data from '../src/data/data.json';

function App() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        "https://api.disneyapi.dev/character?pageSize=50"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setCharacters(data.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a href="#" className="brand-logo">
            Logo
          </a>
          <ul className="nav-links">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Eventos</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
            <li>
              <a href="#">Acerca de</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="every-card">
        {characters.map((character) => (
          <CharacterCard
            imagen={character.imageUrl}
            titulo={character.name}
            key={character._id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
