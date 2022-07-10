import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import ChatSpace from './pages/ChatSpace.js';
import AboutUs from './pages/AboutUs.js';
import LogIn from './pages/LogIn.js';
import BookAppointment from './pages/BookAppointment.js';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/chatspace' component={ChatSpace} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/sign-up' component={LogIn} />
          <Route path='/book-appointment' component={BookAppointment} />
         
        </Switch>

        <Footer/>
      </Router>
    </>
  );
}

export default App;
