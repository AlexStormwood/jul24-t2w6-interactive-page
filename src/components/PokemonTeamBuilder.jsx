// Let the user request a team size
// teamSize = number
// requestedName = string 

import React from "react";
import { PokemonDisplay } from "./PokemonDisplay";

export class PokemonTeamBuilder extends React.Component {
	constructor(){
		super();

		this.state = {
			teamSize: 6,
			requestName: ""
		}

		this.formSubmitHandler = this.formSubmitHandler.bind(this);
	}

	formSubmitHandler (event) {
		event.preventDefault();
		console.log("Event stopped! Form submission being handled now.");

		// Make an array of fetch requests based on this.state.teamSize
		const requestArray = [];
		for (let index = 0; index < this.state.teamSize; index++) {
			requestArray.push(this.getRandomPokemonData());
		}

		Promise.all(requestArray).then((totalData) => {
			this.setState({
				teamData: totalData
			});
		});
	}

	async getRandomPokemonData() {
		let targetPokemonId = Math.floor(Math.random() * 1025);
		let response = await fetch("http://pokeapi.co/api/v2/pokemon/" + targetPokemonId);
		return response.json();
		
	}

	render () {
		return(
			<section className="teamBuilderContainer">
				{/*   onSubmit={(event) => this.formSubmitHandler(event)} */}
				<form onSubmit={this.formSubmitHandler}>
					<label htmlFor="teamSize">Number of Pokemon to show, currently {this.state.teamSize}:</label>
					<input 
						type="range" 
						name="teamSize" 
						id="teamSize" 
						value={this.state.teamSize}
						min={1}
						max={6}
						onChange={(event) => {
							// if (event.target.value > 6) {
							// 	event.target.value = 6;
							// } else if (event.target.value < 1) {
							// 	event.target.value = 1;
							// }
							this.setState({
								teamSize: Number.parseInt(event.target.value)
							});
						}}
					/>
					<button type="submit">Submit</button>
				</form>

				{
					this.state.teamData && this.state.teamData.map((individualPokemon, index) => {
						return <PokemonDisplay 
							key={individualPokemon.name + index }
							sprite={individualPokemon.sprites.front_default} 
							name={individualPokemon.name} 
						/>
					})
				}
			</section>
		)
	}
}