import { Container } from "@material-ui/core";
import React from "react";
import styles from "./Login.module.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className={styles.login}>
      <Container className={styles.my_container} maxWidth="sm">
        <div className={styles.login_content}>
          <div className={styles.login_title}>
            <Typography>LOX SERVICES</Typography>
          </div>
          <div className={styles.btn_link}>
            <Link to='/signup'>
               <button>SIGN UP</button>
            </Link>
         
          </div>
          <div className={styles.login_form}>
            <form action="">
              <Typography>OR</Typography>
              <input type="text" placeHolder="Phone" />
              <input type="text" placeholder="Password" />
              <button>LOG IN</button>
              <Link to='/reset'>Forgot Password?</Link>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
