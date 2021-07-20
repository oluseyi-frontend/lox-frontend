import React from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Order from './../order/Order';
import Menu from './../menu/Menu';
import Navbar from './../navbar/Navbar';
import EditProfile from './../profile/EditProfile';


const MyApp = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' component={EditProfile} />
                 <Route path='/edit' component={EditProfile} />
            </Switch>
        </Router>
         
     );
}
 
export default MyApp;