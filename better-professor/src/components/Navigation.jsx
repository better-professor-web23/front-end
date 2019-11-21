import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   background-color: blue;
   color: white;
   
`;

const TitleWrapper = styled.div`
   display: flex;
   justify-content: center;
   width: 30%;
`;

const HeaderTitle = styled.h1`

`;

const NavWrapper = styled.div`
   display: flex;
   justify-content: space-evenly;
   width: 30%;

   a {
      color: white;
      text-decoration: none;
      font-size: 1.5rem;
   }
`;

const NavigationHeader = () => {
   return (
      <Header>
         <NavWrapper>
            <Link to='/login'>Log In</Link>
            <Link to='/signup'>Sign Up</Link>
         </NavWrapper>
         <TitleWrapper>
            <HeaderTitle>Better Professor</HeaderTitle>
         </TitleWrapper>
         <NavWrapper>
            <Link to='/'>Dashboard</Link>
         </NavWrapper>
      </Header>
   )
}

export default NavigationHeader