import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import cwlogo from "../../assets/logo/logo.png"
import {NavigationContainer,
    NavLink, NavLinks, LogoContainer, LogoImg}
    from  "./nav.styled.js"


const NavBar = () => {
  return (
    <>
        <NavigationContainer>

            <LogoContainer to='/'>
                <LogoImg src={cwlogo} className='logo' to='/' />
            </LogoContainer>

            <NavLinks>

                
                    <NavLink to='/'>Home</NavLink>
                

                
                    <NavLink to="/about">About</NavLink>
                

                
                    <NavLink to="/articles">Article</NavLink>
                

            </NavLinks>

        </NavigationContainer>
    
    <Outlet />
    </>
   
  )
}

export default NavBar
