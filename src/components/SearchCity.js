import React from 'react';


class SearchCity extends React.Component {

	state = {
		inputCity: '',
	}

	handleFormSubmit = (e) => {
		e.preventDefault();

		this.props.fetchen(this.state);

		this.setState({
			inputCity: '',
		});
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	}

	render() {
		

		return (
			<div id="app" className="container text-center my-5">

				<form className="mb-5" onSubmit={this.handleFormSubmit}>
					<div className="input-group">
						<input
							type="text"
							id="inputCity"
							className="form-control form-control-lg"
							onChange={this.handleInputChange}
							value={this.state.inputCity}
						/>

						<div className="input-group-append">
							<button
								type="submit"
								className="btn btn-lg btn-success"
							>Search</button>
						</div>
					</div>
				</form>


			</div>
		)
	}
}

export default SearchCity;
