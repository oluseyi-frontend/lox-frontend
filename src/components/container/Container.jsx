import React from "react";
import styles from "./Container.module.css";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MyApp from "./../afterAuth/MyApp";
import Home from "./../home/Home";
import Login from "./../login/Login";
import Menu from "./../menu/Menu";
import Navbar from "./../navbar/Navbar";
import Order from "./../order/Order";
import Reset from "./../reset/Reset";
import Signup from "./../signup/Signup";
import { Container } from "@material-ui/core";
import EditProfile from './../profile/EditProfile';
import Location from './../location/Location';

import GeneralWorkRequest from "./../work-request/GeneralWorkRequest";
const AppContainer = () => {
  return (
    <Container maxWidth='sm' className={styles.my_container}>
      <div className={styles.app_container}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/reset" component={Reset} />
            <Route path="/home/order" component={Order} />
            <Route path="/home/edit" exact component={EditProfile} />
            <Route path="/home/location" component={Location} />
            <Route path="/home/work-request" component={GeneralWorkRequest} />
            {/* <Route path="/home/work-request" component={WorkRequest1} /> */}
          </Switch>
        </Router>
      </div>
    </Container>
  );
};

export default AppContainer;
