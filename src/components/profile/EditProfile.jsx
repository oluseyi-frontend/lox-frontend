import React, { useContext, useEffect } from "react";
import styles from "./EditProfile.module.css";
import Navbar from "./../navbar/Navbar";
import { Typography } from "@material-ui/core";
import upload from "./images/Group 2043.svg";
import { dataCentral } from "./../../context";
import { useHistory } from "react-router";

const EditProfile = () => {
  const { open, setOpen, jwt } = useContext(dataCentral);
  const history = useHistory();
  useEffect(() => {
    checkJwt();
  }, []);

  const checkJwt = () => {
    if (jwt) {
    } else {
      history.push("/login");
    }
  };
  return (
    <>
      <Navbar />
      <div className={styles.edit_profile}>
        <div className={styles.edit_content}>
          <div className={styles.edit_title}>
            <Typography>Get Started</Typography>
          </div>
          <div className={styles.upload}>
            <img src={upload} alt="" />
          </div>
          <form>
            <label htmlFor="">
              Full Name <span>*</span> <br />
              <input type="text" placeholder="AMINA LATEEF" />
            </label>
            <label htmlFor="">
              Date of Birth <span>*</span> <br />
              <input type="date" />
            </label>
            <label htmlFor="">
              <select name="" id="">
                <option value="">Add Debit/Credit Card</option>
              </select>
            </label>
            <button>SAVE</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
