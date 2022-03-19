/** @format */

import React from 'react';
import Style from '../assets/Button.module.css';

export function Button(props) {
	return <button className={`${Style.button}`}>{props.children}</button>;
}

export function ButtonNav(props) {
	return (
		<button className={`${Style.button} ${Style.buttonNav}`}>
			{props.children}
		</button>
	);
}
