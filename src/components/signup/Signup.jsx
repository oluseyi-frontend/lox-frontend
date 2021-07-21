import { Container, Typography, CircularProgress } from "@material-ui/core";
import React, {useState} from "react";
import styles from "./Signup.module.css";

import { Link } from "react-router-dom";
import { useHistory } from 'react-router';
import axios from 'axios'
const Signup = () => {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [progress, setProgress]= useState(false)
  const history = useHistory()
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "password") {
      setPassword(value);
     }
      if (name === 'phone') {
        setPhone(value)
         
     }
    
  };


  const handleSubmit = (e) => {
  e.preventDefault()
    if (phone && password) {
      console.log('yes')
       setProgress(true)
    axios.post('https://lox-services.herokuapp.com/api/auth/register', {
      phone: phone,
      password: password,
    
    }).then((data) => {
    
        if(data.data.msg=='registered'){
          setProgress(false)
          history.push('/login')
          
        } else {
        
          setProgress(false)
           if (data.data.joimsg) {
            setMessage('Please input a valid phone number without the first "0"')
          }if (data.data.msg) {
            setMessage(data.data.msg)
          } 
      }
    }).catch((err) => {
      console.log(err)
       setProgress(false)
    })
    } else {
    
       setMessage('Please fill both fields correctly')
    }
   
  }



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
              <input name='phone' onChange={handleChange}  type="text" placeHolder="Phone" />
              <input  name='password' onChange={handleChange} type="text" placeholder="Password" />
              <input name='referral' onChange={handleChange}  type="text" placeholder="Referral code (optional)" />
                <Typography variant="overline" color='secondary' display="block" gutterBottom>
        {message}
      </Typography>
              <button onClick={handleSubmit}>
                 {progress? <CircularProgress className={styles.circular_progress} /> : 'REGISTER'}      
              </button>
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
