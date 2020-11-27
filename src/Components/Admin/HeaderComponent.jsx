import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';

const Header = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar light className='bg-light' expand='md'>
				<NavbarBrand href='/add-show-details'>TVPA</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='mr-auto' navbar>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Add
							</DropdownToggle>
							<DropdownMenu left>
								<DropdownItem>
									<Link to={'./add-entries'}>Entries</Link>
								</DropdownItem>
								<DropdownItem>
									<Link to={'./add-show-details'}>Page Details</Link>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
						<NavItem>
							<NavLink href='/view-graph'>View Graph</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/login'>Logout</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
