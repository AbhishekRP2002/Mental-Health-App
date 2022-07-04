import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ChatSpace from './pages/ChatSpace';
import AboutUs from './pages/AboutUs';
import LogIn from './pages/LogIn';
import BookAppointment from './pages/BookAppointment';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
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
