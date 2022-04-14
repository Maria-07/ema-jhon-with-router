import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import CustomLink from "./Active link";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="links w-1/5">
        <CustomLink to="/shop">Shop</CustomLink>
        <CustomLink to="/orders">Orders</CustomLink>
        <CustomLink to="/inventory">Inventory</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        {user ? (
          <button onClick={logout}>Sign OUt</button>
        ) : (
          <CustomLink to="/login">Login</CustomLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
