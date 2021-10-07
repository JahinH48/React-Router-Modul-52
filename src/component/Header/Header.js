import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
     
      <div className="blue">
      <NavLink
  to="/faq"
  activeStyle={{
    fontWeight: "bold",
    color: "White"
  }} className="border" to="/home"
  >Home</NavLink>
      <NavLink
  to="/faq"
  activeStyle={{
    fontWeight: "bold",
    color: "White"
  }} className="border" to="/friends"
  >Friends</NavLink>
      <NavLink
  to="/faq"
  activeStyle={{
    fontWeight: "bold",
    color: "White"
  }} className="border"
   to="/about"
  >About</NavLink>
      <NavLink
  to="/faq"
  activeStyle={{
    fontWeight: "bold",
    color: "White"
  }} className="border" to="/dos"
  >Doc</NavLink>
      </div>

       
    );
};

export default Header;