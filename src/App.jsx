import { useState, useEffect } from "react";
import CharacterCard from "./components/character-card/character-card";

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
    <div>
      {characters.map((character) => (
        <CharacterCard
          imagen={character.imageUrl}
          titulo={character.name}
          key={character._id}
        />
      ))}
    </div>
  );
}

export default App;
