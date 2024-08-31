/* eslint-disable react/prop-types */
const PokemonCard = ({ actualPokemon }) => {

  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={actualPokemon.sprites.other.dream_world.front_default}
          className="pokemon-image"
          alt={actualPokemon.name}
        />
      </figure>
      <h1 className="pokemon-name">{actualPokemon.name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>{actualPokemon.types.map((currType) => {
          return currType.type.name
        }).join(',   ')}</p>
      </div>

      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span> Height: {actualPokemon.height}</span>
        </p>
        <p className="pokemon-info">
          <span> Weight: {actualPokemon.weight}</span>
        </p>
        <p className="pokemon-info">
          <span> speed: {actualPokemon.stats[5].base_stat}</span>
        </p>
      </div>

      <div className="grid-three-cols">
        <div className="pokemon-info">
          <span> Experience: </span>
          <p className="exp">{actualPokemon.base_experience}</p>
        </div>
        <div className="pokemon-info">
          <span >Attack:</span>
          <p className="fire"> {actualPokemon.stats[1].base_stat}</p>
        </div>
        <div className="pokemon-info">
          <span> Abilities: </span>
          <p className="ability">{actualPokemon.abilities.map((abilityInfo) => abilityInfo.ability.name).slice(0,1).join(",")}</p>
          
        </div>
      </div>
    </li>
  );
};
export default PokemonCard;
