import React from 'react';
import styles from './workRequest.module.css'
import check from './imagess/Check-big.svg'
import { Typography } from '@material-ui/core';
const Ended = () => {
    return (
        <div className={styles.ended_content}>
            <img src={check} alt="" />
            <Typography>
                ENDED SUCCESFULLY
            </Typography>
        </div>
     );
}
 
export default Ended;