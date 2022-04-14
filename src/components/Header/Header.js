import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import CustomLink from "./Active link";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="links w-1/5">
        <CustomLink to="/shop">Shop</CustomLink>
        <CustomLink to="/orders">Orders</CustomLink>
        <CustomLink to="/inventory">Inventory</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
      </div>
    </nav>
  );
};

export default Header;
