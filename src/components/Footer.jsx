/** @format */

import React from 'react';
import Style from '../assets/Footer.module.css';

const Footer = () => {
	return (
		<div className={`${Style.footer}`}>
			<p className={`${Style.text}`}>
				Built with ❤️ by
				<a
					href='https://github.com/FayVik'
					target='_blank'
					className='ml-2 mr-2 text-blue-600'
					rel='noreferrer'>
					Favour-Vivian-Woka
				</a>
				&copy; melvin-manni
			</p>
		</div>
	);
};
export default Footer;
