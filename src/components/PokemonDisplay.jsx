

export function PokemonDisplay({name, sprite}){

	return(
		<section className="pokemonDisplay">
			<h1>{name}</h1>
			<img src={sprite} alt={`Front default sprite for ${name}`} />
		</section>
	)
}