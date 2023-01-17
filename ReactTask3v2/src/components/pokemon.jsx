import { useState, useEffect } from "react";

function GetPokeAPI() {
  const [pokemonsList, setPokemonsList] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10${id}")
      .then((response) => response.json())
      .then((data) => {
        setPokemonsList(data);
        console.log(data);
      });
  }, []);

  if (!pokemonsList) return <h1>Loading API data...</h1>;

  return (
    <>
      <h1>PokemonList</h1>
      {pokemonsList.results.map((pokemon, index) => {
        return (
          <div key={index}>
            <div id="container">
              <h3>
                {pokemon.name} {pokemon.id}
              </h3>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default GetPokeAPI;
