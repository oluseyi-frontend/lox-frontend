import { Container } from "@material-ui/core";
import React from "react";
import styles from "./Reset.module.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <div className={styles.reset}>
      <Container className={styles.my_container} maxWidth="sm">
        <div className={styles.reset_content}>
          <div className={styles.reset_title}>
            <Typography>LOX SERVICES</Typography>
          </div>
          <div className={styles.reset_form}>
            <form action="">
              <input type="text" placeHolder="Phone" />
              <button>RESET</button>
              <Typography>
                Don’t have an account? <Link to='/signup'> Sign Up</Link>
              </Typography>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Reset;
