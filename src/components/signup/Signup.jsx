import { Container } from "@material-ui/core";
import React from "react";
import styles from "./Signup.module.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className={styles.signup}>
      <Container className={styles.my_container} maxWidth="sm">
        <div className={styles.signup_content}>
          <div className={styles.signup_title}>
            <Typography>LOX SERVICES</Typography>
          </div>
          <div className={styles.btn_link}>
                      <Link to='/login'>
                      <button>LOG IN</button>
                      </Link> 
          </div>
          <div className={styles.signup_form}>
            <form action="">
              <Typography>OR</Typography>
              <input type="text" placeHolder="Phone" />
              <input type="text" placeholder="Password" />
              <input type="text" placeholder="Referral code (optional)" />
              <button>SIGN UP</button>
              <Typography>
                By joing you agree to our <br /> <Link> Terms and Privacy.</Link>
              </Typography>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
