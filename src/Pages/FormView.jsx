/** @format */

import React from 'react';
import Form from '../components/Form';
import Style from '../assets/FormView.module.css';

export default function FormView() {
	return (
		<main className={`${Style.form}`}>
			<Form />
		</main>
	);
}
