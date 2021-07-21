import React, {useEffect, useContext} from "react";
import styles from "./Location.module.css";
import Navbar from "./../navbar/Navbar";
import { Typography } from "@material-ui/core";
import thumbnail from "./images/thumbnail 1.svg";
import droplet from "./images/droplet.svg";
import { Link } from "react-router-dom";
import { dataCentral } from "../../context";
import { useHistory } from "react-router";


const Location = () => {
const { open, setOpen, jwt } = useContext(dataCentral)
  const history = useHistory()
  useEffect(() => {
  checkJwt()
  }, [])
  
  const checkJwt = () => {
    if (jwt) {
      
    } else {
      history.push('/login')
    }
  }

  return (
    <>
      <Navbar />
      <div className={styles.location}>
        <div className={styles.location_content}>
          <div className={styles.location_title}>
            <Typography variant="h6">Live Location</Typography>
            <Typography>Here you can change your location</Typography>
          </div>
          <div className={styles.location_date}>
            <Typography variant="h6">08.07.2021 9:23 AM</Typography>
            <Typography>Jack Miami</Typography>
          </div>
          <div className={styles.location_img}>
            <img src={thumbnail} alt="" />
          </div>
          <div className={styles.location_yours}>
            <div className={styles.oval}></div>
            <Typography>Your Location</Typography>
          </div>
          <div className={styles.location_change}>
            <div className={styles.oval}></div>
            <Typography>Change Location</Typography>
          </div>
          <div className={styles.location_name}>
            <img src={droplet} alt="" />
            <Typography>AGUNGI RD</Typography>
          </div>
          <div className={styles.location_btn}>
            <Link to='/home/order'>
               <button>HOME</button>
            </Link>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
