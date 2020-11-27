import React, { Component } from 'react';
import './AddEntries.css';

class AddEntries extends Component {
	render() {
		return (
			<div className='add-entries card mx-auto'>
				<div className='p-3 bg-dark text-white text-center rounded'>
					<h3>Generate Data</h3>
				</div>

				<div className='bg-light pt-3 pb-3 rounded'>
					<form className='px-3'>
						<p className='text-danger text-center'>
							It will fill up all the blank fields of Gender, Age and Location
							in the database for the selected show name.
						</p>

						<div className='form-group row'>
							<label for='category' className='col-sm-2 col-form-label'>
								Categories :
							</label>
							<div className='col-sm-10'>
								<select className='form-control col-sm-10' id='category'>
									<option>Cartoon</option>
									<option>Comedy</option>
									<option>Crime</option>
									<option>Drama</option>
									<option>Reality</option>
									<option>Romantic</option>
								</select>
							</div>
						</div>

						<div className='form-group row'>
							<label for='category' className='col-sm-2 col-form-label'>
								Show Name :
							</label>
							<div className='col-sm-10'>
								<select className='form-control col-sm-10' id='category'>
									<option>Game of Thrones</option>
									<option>Big Bang Theory</option>
									<option>Breaking Bad</option>
									<option>Dexter</option>
									<option>Avatar: The Last Airbender</option>
									<option>Avatar: The Legend of Korra</option>
								</select>
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

export default AddEntries;
