import React, { Component } from 'react';
import './Chart.css';
import { Pie } from 'react-chartjs-2';

class PieChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData: {
				labels: this.props.labels,
				datasets: [
					{
						label: this.props.datasets[0].label,
						data: this.props.datasets[0].data,
						backgroundColor: [
							'rgb(255,177,193)',
							'rgb(154,208,245)',
							'rgb(255,159,64)',
							'rgb(75,192,192)',
							'rgb(255,99,132)',
							'rgb(255,205,86)',
							'rgb(54,162,235)',
							'#B89685',
							'#BCB6FF',
							'#E7F9A9',
							'#F3E0EC',
							'#F2BEFC',
							'#B3A394',
							'#F4F4F9',
							'#FCF6B1',
							'#F3D8C7',
							'#515B3A',
							'#706993',
						],
					},
				],
			},
		};
	}

	render() {
		return (
			<div className='Chart'>
				<Pie
					data={this.state.chartData}
					width={250}
					height={150}
					options={{
						title: {
							display: true,
							text: this.props.chartTitle,
						},
						maintainAspectRatio: true,
						legend: {
							display: true,
							position: 'right',
						},
					}}
				/>
			</div>
		);
	}
}

export default PieChart;
