/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Style from '../Assets/Nav.module.css';
import { ButtonNav } from './Button';

const Nav = () => {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};
	return (
		<nav className={`flex items-center flex-wrap w-full z-40 ${Style.nav}`}>
			<Link to='/'>
				<p className={`inline-flex items-center p-2 mr-4 ${Style.brand} `}>
					dec
					<span className='text-xl text-white font-bold'>FundMe</span>
				</p>
			</Link>
			<button
				className={`inline-flex p-3 rounded lg:hidden text-white ml-auto outline-none ${Style.toggle}`}
				onClick={handleClick}>
				{/* mobile hamburger icon */}
				<svg
					className='w-6 h-6'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M4 6h16M4 12h16M4 18h16'
					/>
				</svg>
			</button>

			<div
				className={`${
					active ? '' : 'hidden'
				}   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
				<div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
					<Link to='/FormView'>
						<ButtonNav className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-300 hover:text-black'>
							Connect
						</ButtonNav>
					</Link>
				</div>
			</div>
		</nav>
	);
};
export default Nav;
