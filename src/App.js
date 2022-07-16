import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ChatSpace from './pages/ChatSpace';
import AboutUs from './pages/AboutUs';
import LogIn from './pages/LogIn.js';
import Create from './pages/Create.js';
import BookAppointment from './pages/BookAppointment.js';
import Footer from './pages/Footer.js';
import Doctors from './pages/Doctors.js';
import BookingPage from './pages/BookingPage.js';

function App() {
  
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  
  
  
  return (
    <>
      <Router>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>   
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/chatspace" element={<ChatSpace isAuth={isAuth} />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/login' element={<LogIn setIsAuth={setIsAuth} />} />
          <Route path='/book-appointment' element={<BookAppointment/>} />
          <Route path='/create' element={<Create isAuth={isAuth} />} />
          <Route path='/bookingpage/:id' element={<BookingPage isAuth={isAuth} />} />
        </Routes>

      <Footer /> 
      </Router>

    </>
  );
}

export default App;
