import React, { useContext } from 'react';
import context from '../context';
import styled from 'styled-components';

const Logo = styled.img`
  max-width: 180px;
`

export default ({ dark })=> {
  const state = useContext(context);
  return(
      <Logo src={dark ? state.logoDark : state.logo} alt="Logo" />
  )
}