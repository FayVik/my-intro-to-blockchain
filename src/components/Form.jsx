/** @format */

import React from 'react';
import Style from '../assets/FormView.module.css';
import { ButtonNav } from './Button';

const Form = () => {
	return (
		<div>
			<form className={`${Style.formContainer} rounded-lg p-4`}>
				<div className='mb-6'>
					<input
						type='text'
						placeholder='Enter your name'
						className='rounded'
					/>
				</div>
				<div className='mb-6'>
					<input
						type='text'
						placeholder='Enter title of fund request'
						className='rounded'
					/>
				</div>
				<div className='mb-6'>
					<input type='text' placeholder='Enter Amount' className='rounded' />
				</div>

				<textarea
					name=''
					id=''
					cols='30'
					rows='5'
					className='rounded'
					placeholder='Enter Description'></textarea>

				<div className='mb-6'>
					<span className={`${Style.spanForm}`}>
						Upload fund request image/proof
					</span>
					<input type='file' className='rounded' />
				</div>
				<div className='m'>
					<ButtonNav>Submit</ButtonNav>
				</div>
			</form>
		</div>
	);
};
export default Form;
