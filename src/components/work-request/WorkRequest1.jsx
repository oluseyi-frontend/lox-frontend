import React from "react";
import Navbar from "./../navbar/Navbar";
import styles from "./workRequest.module.css";
import { Typography } from "@material-ui/core";

const WorkRequest1 = () => {
  return (
    <>
      <div className={styles.count}>
        <div className={styles.count_content}>
          <div className={styles.count_upper}>
            <div className={styles.second}>
              <Typography>00</Typography>
            </div>
            <div className={styles.dot}>
              <div></div>
              <div></div>
            </div>
            <div className={styles.second}>
              <Typography>01</Typography>
            </div>
          </div>
          <div className={styles.count_lower}>
            <div className={styles.amount}>
              <Typography variant="h6">Amount</Typography>
              <Typography>#1000</Typography>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default WorkRequest1;
