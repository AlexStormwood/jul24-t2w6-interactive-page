// Let the user request a team size
// teamSize = number
// requestedName = string 

import React from "react";

export class PokemonTeamBuilder extends React.Component {
	constructor(){
		super();

		this.state = {
			teamSize: 6,
			requestName: ""
		}
	}

	formSubmitHandler (event) {
		event.preventDefault();
		console.log("Event stopped! Form submission being handled now.");
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
							if (event.target.value > 6) {
								event.target.value = 6;
							} else if (event.target.value < 1) {
								event.target.value = 1;
							}
							this.setState({
								teamSize: Number.parseInt(event.target.value)
							});
						}}
					/>
					<button type="submit">Submit</button>
				</form>
			</section>
		)
	}
}