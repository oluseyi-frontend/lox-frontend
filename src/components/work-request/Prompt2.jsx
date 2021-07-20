import React from 'react';
import styles from './workRequest.module.css'
import { Typography } from "@material-ui/core";
import exclamation from "./imagess/exclamation-mark 1.svg";
const Prompt2Component = ({ handleWorkRequestEnd, handleWorkRequestContinue}) => {
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
              <button onClick={handleWorkRequestContinue}>NO</button>
              <button onClick={handleWorkRequestEnd}>YES</button>
            </div>
          </div>
         
        </div>
      );
}
 
export default Prompt2Component;