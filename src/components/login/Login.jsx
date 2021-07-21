import { Container, Typography, CircularProgress } from "@material-ui/core";
import React, {useState} from "react";
import styles from "./Login.module.css";

import { Link } from "react-router-dom";


import { useHistory } from 'react-router';
import axios from 'axios'
import { useContext } from "react";
import { dataCentral } from './../../context';




const Login = () => {
    const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [progress, setProgress]= useState(false)
  const history = useHistory()
  const {setJwt} = useContext(dataCentral)

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
    axios.post('https://lox-services.herokuapp.com/api/auth/login', {
      phone: phone,
      password: password,
    
    }).then((data) => {
  
      if (data.data.token) {
            setJwt(data.data.token)
          history.push('/home/order')
          setProgress(false)
        
        } else {
          //console.log('no token came back')
          setProgress(false)
          // setMessage(data.data.msg)
          if (data.data.joimsg) {
            setMessage('Please input a valid phone number without the first "0"')
          }if (data.data.msg) {
            setMessage(data.data.msg)
          } else {
            
          } {
            
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
              <input onChange={handleChange} name='phone' type="text" placeHolder="Phone" />
              <input onChange={handleChange} name='password' type="text" placeholder="Password" />
              <Typography variant="overline" color='secondary' display="block" gutterBottom>
        {message}
      </Typography>
              <button onClick={handleSubmit}>
                 {progress? <CircularProgress className={styles.circular_progress} /> : 'LOG IN'}  
              </button>
              <Link to='/reset'>Forgot Password?</Link>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
