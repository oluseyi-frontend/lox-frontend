import { Container } from "@material-ui/core";
import React from "react";
import styles from "./Menu.module.css";
import cancel from "./images/cancel 1.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataCentral } from './../../context';

const Menu = () => {
  const {open, setOpen} = useContext(dataCentral)
  const closeAside = () => {
    setOpen(false)
  }
  return (
    <div className={open? styles.menu_active: styles.menu}>
      <Container maxWidth='sm' className={styles.menu_container}>
        <div className={styles.menu_content}>
          <div className={styles.cancel}>
            <img src={cancel} alt="" onClick={closeAside} />
          </div>
          <div className={styles.menu_links}>
            <ul>
              <li>
                <Link to='/home/edit' onClick={closeAside}>Edit profile</Link>
              </li>
              <li>
                <Link to='/home/order' onClick={closeAside}>Home</Link>
              </li>
              <li>
                <Link to='/home/location' onClick={closeAside}>Check location</Link>
              </li>
            </ul>
          </div>
          <div className={styles.sign_out}>
            <Link to='/login'>Sign Out</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
