/** @format */

import React from 'react';
import { Button } from './Button';
import img from '../assets/images/card.6d4ee846.png';
import Style from '../assets/Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className={`flex flex-row flex-wrap items-center ${Style.homeView}`}>
			<div class='flex-2 lg:w-3/6 min-h-54 sm:w-full md:w-1/2 xs:w-full w-full p-4'>
				<h1 className='text-3xl font-bold'>Decentralized Fund Me,</h1>
				<p className='pb-0'>
					A new way for requesting
					<span className={`${Style.span}`}>funding</span> from friends and the
					public.
				</p>
				<p className='m-0'>To get started click the button below.</p>
				<Link to='/FormView'>
					<Button className={`${Style.button}`}>Connect</Button>
				</Link>
				<span>we rise by lifting others.</span>
			</div>
			<div class='flex-2 lg:w-3/6 min-h-54 sm:w-full md:w-1/2 xs:w-full w-full p-4'>
				<img src={img} alt='card' className='w-100' />
			</div>
		</div>
	);
};
export default Home;
