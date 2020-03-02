import React from 'react';
import SearchCity from './components/SearchCity';
import WeatherReport from './components/WeatherReport';
import WeathRelation from './components/WeathRelation';
import axios from 'axios';


class App extends React.Component {
	state = {
		errorMessage: false,
		error: "Please enter a valid city!",
		report: null,
		city: null,
		temp: null,
		humidity: null,
		relation: null,
	}

	fetchen = (e) => {

		console.log(`Send question "${e.inputCity}" to API...`);

		// send request to API
		axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${e.inputCity}&units=metric&appid=a9f6719e37f20890ebff5d91724dec1f`)
			.then(response => {
				console.log(response);

				// on response, update state
				this.setState({
					city: response.data.name,
					temp: response.data.main.temp,
					humidity: response.data.main.humidity,
					report: true,
					errorMessage: false,
					inputQuestion: '',
					relation: response.data.weather[0].main,
				});
			
			})
			.catch(error => {
				this.errorMessage = true;

				if (this.errorMessage) {
					console.log("'" + e.inputCity + "'" + " is not a valid city, please type in a real one!");
				}
			});

			
	}

	

	render() {
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?">🌦❔</span>
					</h1>

					<SearchCity fetchen={this.fetchen}/>
		
					{
						this.state.report
						? (
							<WeatherReport weather={this.state}/>
							)
							: ''
					}
					{
						this.state.report
						? (
							<WeathRelation re={this.state}/>
							)
							: ''
					}
					
					
					
					
						
					
				</div>
			</div>
		)
	}
}

export default App;
