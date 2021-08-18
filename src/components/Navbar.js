import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";


const Navbar = () => {
  return (
    <>
     <Nav>
         <NavLink to='/'>
             <h4>Silckiness</h4>
         </NavLink>
         <NavMenu>
            <NavLink to='/'>
                <h4>Home</h4>
            </NavLink>
            <NavLink to='/'>
                <h4>Services</h4>
            </NavLink>
            <NavLink to='/'>
                <h4>Portfolio</h4>
            </NavLink>
            <NavLink to='/sign-in'>
                <h4>SignIn</h4>
            </NavLink>
            <NavLink to='/'>
                <h4>Contact</h4>
            </NavLink>
         </NavMenu>         
     </Nav>
    </>
  );
};

export default Navbar;
