import { Container, Typography } from "@material-ui/core";
import React, {useContext, useState} from "react";
import styles from "./Navbar.module.css";
import burger from "./images/Menu (1).svg";
import logo from "./images/LOGO.svg";
import Menu from './../menu/Menu';
import { dataCentral } from './../../context';


const Navbar = () => {

 const {open, setOpen} = useContext(dataCentral)


  const handleClick = () => {
    setOpen(true)
  }
  return (
    <>
      <Menu open={open} setOpen={setOpen}/>
      <div className={styles.nav}>
        <div className={styles.nav_content}>
          <div className={styles.burger}>
            <img src={burger} alt="" onClick={handleClick} />
          </div>
          <div className={styles.title}>
         
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
