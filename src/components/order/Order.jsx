import { Container } from "@material-ui/core";
import React from "react";
import styles from "./Order.module.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import burger from "./images/Menu.svg";
import girl from "./images/girls_PNG6462-removebg-preview 2.svg";
import Navbar from "./../navbar/Navbar";
import { useHistory } from "react-router";
import { useContext } from "react";
import { dataCentral } from './../../context';
import Menu from './../menu/Menu';


const Order = () => {
  const history = useHistory()
  const { open, setOpen } = useContext(dataCentral)
  

  const handleAside = () => {
    setOpen(true)
   };
  
  const handleProceed = () => {
    history.push('/home/work-request')
  }

  return (
    <>
      <Menu/>
        <div className={styles.order}>
      <div className={styles.order_content}>
        <div className={styles.order_banner}>
          <div className={styles.order_banner_content}>
            <img src={burger} alt="" onClick={handleAside} />
            <img src={girl} alt="" />
            <Typography>Order from lox services now</Typography>
          </div>
        </div>
        <div className={styles.order_title}>
          <Typography>Order Now</Typography>
        </div>
        <div className={styles.order_form}>
          <label htmlFor="">
            Task Title <span>*</span> <br />
            <input type="text" placeholder="Hair service" />
          </label>
          <label htmlFor="">
            Time estimate <span>*</span> <br />
            <select name="" id="">
              <option value="">2Hrs - 3Hrs</option>
            </select>
          </label>
          <button onClick={handleProceed} >POCEEED</button>
        </div>
        <div className={styles.hori_line}>
          <div className={styles.line}></div>
        </div>
      </div>
    </div>
      </>
  
  );
};

export default Order;
