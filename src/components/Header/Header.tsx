'use client';

import logo from '../../assets/img/UNMSM.png';

import { Navbar } from 'flowbite-react';

import { Link } from '../NavLink';

/* const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: 'bg-'
    }
  }
}; */

export function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img alt="Flowbite React Logo" className="mr-3 h-6 sm:h-9" src={logo} />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/" className="" activeClassName="">
          Home
        </Link>
        <Link to="/repository" className="" activeClassName="">
          Repositorio
        </Link>
        <Link to="/events" className="" activeClassName="">
          Eventos
        </Link>
        <Link to="/" className="" activeClassName="">
          Novedades
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
