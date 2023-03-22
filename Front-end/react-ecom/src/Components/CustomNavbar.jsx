import React, { useContext, useState } from 'react';
import {NavLink as ReactLink} from 'react-router-dom'
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
  NavbarText,
  Button,
} from 'reactstrap';
import {checkLogin,getCurrentUser,logout,adminLogin}from '../auth'
import { context1 } from './Context';



function CustomNavbar(value) {
    const [isOpen, setIsOpen] = useState(false);
    const value1=useContext(context1)

  const toggle = () => setIsOpen(!isOpen);
  const htmlData=()=>{
    return(
      <div>
      <Navbar color='light' expand="md"  ClassName='px-5 shadow-sm' 
      fixed='top'
      >
        <NavbarBrand tag={ReactLink} to="/">Happy Pet Care</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink  tag={ReactLink} to="/store/all">Store</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink  tag={ReactLink} to="/about">About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Contact us
              </DropdownToggle>
              <DropdownMenu right>
                <NavLink tag={ReactLink} to="www.google.com"><DropdownItem >FaceBook</DropdownItem></NavLink>
                <DropdownItem>WhatApps</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Instgram</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <Nav Navbar>
          <NavItem>
          <NavLink tag={ReactLink} to="/user/cart">
               <b>Cart({value1.cart.iteam.length})</b> 
              </NavLink>
              </NavItem>
             
             {(!checkLogin()) && (
              <>
              <NavItem>
          <NavLink tag={ReactLink} to="/login">
                login
              </NavLink>
              </NavItem>

              <Nav>
          <NavItem Navbar>
          <NavLink tag={ReactLink} to="/signup">
                Signup
              </NavLink>
              </NavItem>
              </Nav>
              </>
             )}

            

             {checkLogin() && (
              <> {
                (adminLogin() &&
                (
                  <>
                  <NavItem>
                    <NavLink tag={ReactLink} to="/admin-dashboard/home">
                      Admin DashBoard
                    </NavLink>
                  </NavItem>
                  </>
                ))
               }


                <NavItem>
          <NavLink tag={ReactLink} to="/user/dashboard">
              <h5>{getCurrentUser().name}</h5>

              </NavLink>
              </NavItem>

              <NavItem>
          <NavLink tag={ReactLink} to="/">
               <Button color='danger' onClick={logout}>Logout</Button>
              </NavLink>
              </NavItem>
              
              </>
             )}
              </Nav>

           
        </Collapse>
      </Navbar>
    </div>
    )
  }
  return (
          <context1.Consumer>
            {
              (value)=>htmlData(value)
              
            }
         </context1.Consumer>
            
  );
}

export default CustomNavbar