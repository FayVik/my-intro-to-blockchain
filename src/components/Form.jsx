/** @format */

import React from 'react';
import Style from '../Assets/FormView.module.css';
import { ButtonNav } from './Button';

const Form = () => {
	return (
		<div>
			<form>
				<div
					className={`${Style.formContainer} rounded-lg p-4 lg:w-2/5 md:w-full items-center flex flex-wrap`}>
					<div className='mb-4 w-full'>
						<input
							type='text'
							placeholder='Enter your name'
							className='rounded'
						/>
					</div>
					<div className='mb-4 w-full'>
						<input
							type='text'
							placeholder='Enter title of fund request'
							className='rounded'
						/>
					</div>
					<div className='mb-4 w-full'>
						<input type='text' placeholder='Enter Amount' className='rounded' />
					</div>
					<textarea
						name=''
						id=''
						cols='30'
						rows='5'
						className='rounded w-full'
						placeholder='Enter Description'></textarea>
					<div className='mb-4 w-full'>
						<span className={`${Style.spanForm}`}>
							Upload fund request image/proof
						</span>
						<input type='file' className='rounded' />
					</div>
					<div className='w-full'>
						<ButtonNav>Submit</ButtonNav>
					</div>
				</div>
			</form>
		</div>
	);
};
export default Form;
