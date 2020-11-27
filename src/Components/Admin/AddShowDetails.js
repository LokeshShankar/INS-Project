import React, { Component } from 'react';
import './AddShowDetails.css';

class AddShowDetails extends Component {
	render() {
		return (
			<div className='add-show-details card mx-auto'>
				<div className='p-3 bg-dark text-white text-center rounded'>
					<h3>Add Show Details</h3>
				</div>

				<div className='bg-light pt-3 pb-3 rounded'>
					<form className='px-3'>
						<p className='text-danger text-center'>
							All the below fields need to be filled
						</p>

						<div className='form-group row'>
							<label for='showName' className='col-sm-2 col-form-label'>
								Show Name :
							</label>
							<div className='col'>
								<input
									type='text'
									readonly
									className='form-control'
									id='showName'
									placeholder='Show Name'
								/>
							</div>
						</div>

						<div className='form-group row'>
							<label for='category' className='col-sm-2 col-form-label'>
								Category :
							</label>
							<div className='col-sm-10'>
								<input
									type='text'
									readonly
									className='form-control'
									id='showName'
									placeholder='Category'
								/>
							</div>
						</div>

						<div className='form-group row'>
							<label for='year' className='col-sm-2 col-form-label'>
								Starting Year :
							</label>
							<div className='col-sm-10'>
								<input
									type='number'
									readonly
									className='form-control'
									id='year'
									placeholder='Year'
								/>
							</div>
						</div>

						<div className='text-center'>
							<button type='button' class='btn btn-outline-dark mx-auto btn-lg'>
								Add Show
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default AddShowDetails;
