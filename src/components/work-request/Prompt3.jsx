import React from 'react';
import styles from './workRequest.module.css'
import { Typography } from "@material-ui/core";
import exclamation from "./imagess/exclamation-mark 1.svg";
const Prompt3Component = ({ handleWorkRequestEnd2, handleWorkRequestContinue2}) => {
    return (
        <div className={styles.prompt_content}>
          <div className={styles.upper_content}>
            <div className={styles.prompt_img}>
              <img src={exclamation} alt="" />
            </div>
            <div className={styles.prompt_text}>
              <Typography>End Task?</Typography>
            </div>
          </div>
          <div className={styles.lower_content}>
            <div className={styles.prompt_btns}>
              <button onClick={handleWorkRequestContinue2}>NO</button>
              <button onClick={handleWorkRequestEnd2}>YES</button>
            </div>
          </div>
         
        </div>
      );
}
 
export default Prompt3Component;