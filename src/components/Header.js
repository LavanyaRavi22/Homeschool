import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<header>
		<h2> A1 and A2's homeschool </h2>
		<ul>
			<li><Link to='/'> Home </Link></li>
			<li><Link to='/gallery'> Gallery </Link></li>
			<li><Link to='/classes'> Classes </Link></li>
			<li><Link to='/printables'> Printables </Link></li>
		</ul>
	</header>
);

export default Header;