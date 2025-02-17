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
					<label htmlFor="teamSize">Number of Pokemon to show:</label>
					<input type="number" name="teamSize" id="teamSize" />
					<button type="submit">Submit</button>
				</form>
			</section>
		)
	}
}