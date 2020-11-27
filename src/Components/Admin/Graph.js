import React, { Component } from 'react';
import './Graph.css';
import BarChart from './BarChart';
import PieChart from './PieChart';

class Graph extends Component {
	render() {
		return (
			<div className='graph'>
				<PieChart
					className='pie-chart-1'
					chartTitle={'Gender'}
					labels={['Female', 'Male']}
					datasets={[{ label: 'Viewers', data: [2426, 3572] }]}
				/>

				<PieChart
					className='pie-chart-2'
					chartTitle={'Comments Feedback'}
					labels={['Negative', 'Positive']}
					datasets={[{ label: 'Comments', data: [638, 723] }]}
				/>

				<PieChart
					className='pie-chart-3'
					chartTitle={'Country Details'}
					labels={['IN', 'AR', 'US', 'UK', 'CA', 'ME', 'AE', 'PL', 'IR', 'CH']}
					datasets={[
						{
							label: 'Country',
							data: [
								9876,
								8876,
								6384,
								5678,
								5432,
								4567,
								4321,
								3456,
								2345,
								1001,
							],
						},
					]}
				/>

				<BarChart
					className='bar-chart-1'
					chartTitle={'Liked'}
					labels={['Post', 'Likes', 'Reaction', 'Comments', 'Share']}
					datasets={[
						{ label: 'Viewers', data: [3000, 14000, 16000, 5000, 4000] },
					]}
				/>

				<BarChart
					className='bar-chart-2'
					chartTitle={'Liked'}
					labels={['None', 'Like', 'Love', 'Haha', 'Sad', 'Angry', 'Thankful']}
					datasets={[
						{
							label: 'Viewers',
							data: [3000, 18000, 10000, 5000, 4000, 7000, 7600],
						},
					]}
				/>

				<div className='show-name bg-light py-4 px-5'>
					<h2 className='text-center mb-3'>Game of Thrones</h2>
					<div className='bg-white p-2'>
						<h4 className='px-1 d-inline-block'>
							Popularity :
							<span className='px-2'>
								<i class='fas fa-fire'></i> 9.3/10
							</span>
						</h4>
						<h4 className='px-1'>
							Rating :
							<span className='px-5'>
								<i class='far fa-star'></i> 9.8/10
							</span>
						</h4>
					</div>
				</div>
			</div>
		);
	}
}

export default Graph;
