import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";

const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [page,setPage] = useState(0)

  const fetchingApi = async () => {
    try {
      const fetchedData = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=9`
      );
      const jsonData = await fetchedData.json();
      const urlData = jsonData.results.map(async (curElm) => {
        const otherFetchData = await fetch(curElm.url);
        const otherJsonData = await otherFetchData.json();

        return otherJsonData;
      });

      const detailedResponse = await Promise.all(urlData);
      setPokemonData(detailedResponse);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingApi();
  }, [page]);

  const searchPokemon = pokemonData.filter((currPokemon) =>
    currPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (error) {
    return (
      <div className="section">
        <h1 className="error">404</h1>
        <div className="page">
          Ooops!!! The page you are looking for is not found
          <br />
          <h3>{error}</h3>
        </div>
        <img src="../public/error.gif" alt="" />
      </div>
    );
  }

  if (loading) {
    return (
      // <!-- LOADING DOTS... -->
      <div className="spinner-box">
        <div className="pulse-container">
          <div className="pulse-bubble pulse-bubble-1"></div>
          <div className="pulse-bubble pulse-bubble-2"></div>
          <div className="pulse-bubble pulse-bubble-3"></div>
        </div>
      </div>
    );
  }

  return (
    <section className="container">
      <header>
        <h1> Lets Catch Pokémon</h1>
      </header>
      <div className="pokemon-search">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="search Pokemon"
        />
      </div>
      <div>
        <ul className="cards">
          {searchPokemon.map((pokemon, index) => {
            return <PokemonCard key={index} actualPokemon={pokemon} />;
          })}
        </ul>
      </div>

      <Pagination page={page} setPage={setPage}/>
    </section>
  );
};
export default Pokemon;
