import React from 'react';
import styles from './workRequest.module.css'
import { Typography } from "@material-ui/core";
import exclamation from "./imagess/exclamation-mark 1.svg";
import { useHistory } from 'react-router';


const PromptComponent = ({handleWorkRequest}) => {

  const history = useHistory()
    const handleClose = () =>{
        history.push('/home/order')
    }

  
    return (
        <div className={styles.prompt_content}>
          <div className={styles.upper_content}>
            <div className={styles.prompt_img}>
              <img src={exclamation} alt="" />
            </div>
            <div className={styles.prompt_text}>
              <Typography>start Task?</Typography>
            </div>
          </div>
          <div className={styles.lower_content}>
            <div className={styles.prompt_btns}>
            <button onClick={handleClose}>NO</button>
              <button onClick={handleWorkRequest} >YES</button>
            </div>
          </div>
         
        </div>
      );
}
 
export default PromptComponent;