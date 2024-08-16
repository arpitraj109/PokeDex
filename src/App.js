import React, { useEffect, useState } from 'react';
import PokemonThumbnail from "./components/PokemonThumbnail";

function App() {
  const [allPokemon, setAllPokemons] = useState([]);
  const [loadPokemon, setLoadPokemon] = useState('https://pokeapi.co/api/v2/pokemon?limit=15');

  const getAllPokemons = async () => {
    try {
      const res = await fetch(loadPokemon);
      
      // Check if the response is OK and contains JSON
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setLoadPokemon(data.next);

      function createPokemon(result) {
        result.forEach(async (pokemon) => {
          try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            
            // Check if the response is OK and contains JSON
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            setAllPokemons((curr) => [...curr, data]);
          } catch (error) {
            console.error("Error fetching individual Pokémon data:", error);
          }
        });
      }

      createPokemon(data.results);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="app-container">
      <h1 className="h1">Pokedex</h1>
      <div className="Pokemon-container">
        <div className="all-container">
          {allPokemon.map((pokemon, index) => (
            <PokemonThumbnail
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              key={index}
              height={pokemon.height}
              weight={pokemon.weight}
              type={pokemon.types[0].type.name}
              stat1={pokemon.stats[0].stat.name}
              stat2={pokemon.stats[1].stat.name}
              stat3={pokemon.stats[2].stat.name}
              stat4={pokemon.stats[3].stat.name}
              stat5={pokemon.stats[4].stat.name}
              stat6={pokemon.stats[5].stat.name}
              bs1={pokemon.stats[0].base_stat}
              bs2={pokemon.stats[1].base_stat}
              bs3={pokemon.stats[2].base_stat}
              bs4={pokemon.stats[3].base_stat}
              bs5={pokemon.stats[4].base_stat}
              bs6={pokemon.stats[5].base_stat}
            />
          ))}
        </div>
        <button className="Load" onClick={getAllPokemons}>More</button>
      </div>
    </div>
  );
}

export default App;
