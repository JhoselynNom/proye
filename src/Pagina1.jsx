import React, { useState } from 'react';
import { Button, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import logo from './logoo.png'; 

function Example(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <h1>HOLA! {props.saludo} </h1>
      <Button color="danger">:D</Button>
      <Navbar color="faded" light>
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={logo}
            style={{
              height: 90,
              width: 90
            }}
          />
          CANAL DE NOTICIAS
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#">NOTICIAS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                ESPECTACULOS
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Nav
        justified
        pills
      >
        <NavItem>
          <NavLink
            active
            href="#"
          >
            Inicio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://www.futbolperuano.com/partidos-por-tv/">
            Deportes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://www.lasestrellas.tv/telenovelas">
            Musica
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            disabled
            href="/workspaces/codespaces-react/src/Musica.js"
          >
            Novelas
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Example;

