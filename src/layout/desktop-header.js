import React, { useContext, useState, Fragment } from 'react';
import context from '../context';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import AniLink from "gatsby-plugin-transition-link/AniLink";

import RateBar from './ratebar';
import Logo from './logo';
import { NavLink, NavButton } from '../styled-components';

const Header = styled.header`
  
`
const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${props => props.horizontal ? "flex" : "block"};
  text-align: center;
`
const NavItem = styled.li`
  
`

export default ()=> {
  const state = useContext(context);

  return(
    <Header className="d-none d-lg-block">
      <RateBar />
      <Container>
        <Navigation>
          <AniLink paintDrip hex={state.primaryColor} to="/" duration={.5}>
            <Logo />
          </AniLink>
          <NavList horizontal>
            <NavItem>
              <AniLink paintDrip hex={state.primaryColor} to="/properties" duration={.5}>
                <NavLink dark first>
                  Propiedades
                </NavLink>
              </AniLink>            
            </NavItem>
            <NavItem>
              <AniLink paintDrip hex={state.primaryColor} to="/about" duration={.5}>
                <NavLink dark>
                  Nosotros
                </NavLink>
              </AniLink>            
            </NavItem>
            <NavItem>
              <AniLink paintDrip hex={state.primaryColor} to="/contact" duration={.5}>
                <NavLink dark>
                  Contacto
                </NavLink>
              </AniLink>                                    
            </NavItem>
          </NavList>
          <a href={`http://app.clasihome.com/login?logo=${state.logo}&primaryColor=${state.primaryColor.substring(1)}`} target="_blank" rel="noopener" duration={.5}>
            <NavButton primary outlined>
              Login
            </NavButton>
          </a>
        </Navigation>
      </Container>
    </Header>    
  )
}