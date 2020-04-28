import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img
        src="https://www.freelogodesign.org/Content/img/logo-ex-7.png"
        alt="logo"
      />

      <div className={style.loginBlock}>
        {props.isAuth ? (
          <div>{props.userLogin}</div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
