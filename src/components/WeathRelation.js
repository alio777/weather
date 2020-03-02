import React from 'react';

const WeathReport = props => {



	return (
		<div id="WeatherReport">
			<div className="card bg-dark text-white">
				<div className="card-body text-center">
                    <h5 className="card-title">Current weather is: {props.re.relation}</h5>
				</div>
			</div>
		</div>
	)
}

export default WeathReport;
