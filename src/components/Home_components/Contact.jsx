import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import "./css/home.css";
import {Link} from "react-router-dom";

function Contact(){
    return (
        <div>
            <footer id="footer">
        <h4>Follow Us!</h4>
        <i className="footer-icon fab fa-2x fa-twitter"></i>
        <i className="footer-icon fab fa-2x fa-instagram"></i>
        <i className="footer-icon fab fa-2x fa-facebook"> </i>
        <i className="footer-icon fas fa-2x fa-envelope"></i>
        <p className='endText' >Made by TeamHackBitX</p>
      </footer>
      
        </div>
        
    )
}

export default Contact;