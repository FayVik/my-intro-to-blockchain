/** @format */

import React from 'react';
import Form from '../components/Form';
import Style from '../Assets/FormView.module.css';

export default function FormView() {
	return (
		<main className={`${Style.form}`}>
			<Form />
		</main>
	);
}
