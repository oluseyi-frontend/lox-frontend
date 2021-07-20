
import React from 'react';
import styles from './workRequest.module.css'
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router';


const Total = () => {
     const history = useHistory()
    const handleClose = () =>{
        history.push('/home/order')
    }
    return (
        <div className={styles.total_content} >
            <div className={styles.total_amount}>
                <Typography>
                    Total Amount: 
                </Typography>
                 <Typography>
                    #2000
              </Typography>
            </div>
            <button onClick={handleClose}>
                CLOSE
            </button>
        </div>
     );
}
 
export default Total;