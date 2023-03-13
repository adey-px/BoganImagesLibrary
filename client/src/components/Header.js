import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
	return (
		<Navbar
			bg='dark'
			variant='dark'
		>
			<Navbar.Brand href='/'>
				Image Galleria
			</Navbar.Brand>
		</Navbar>
	);
};

export default Header;
