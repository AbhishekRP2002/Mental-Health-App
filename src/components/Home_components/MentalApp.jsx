import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import psychiatristImg from "../images/Psychiatrist.jpg"
import "./css/home.css";
import {Link} from "react-router-dom";

function MentalApp(){
    return(<div class ="container-fluid topContainer">
        <div class="row ">
        <div class="col-lg-6">
          <h1 class="big-heading" >Mind Care</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum nisi. Curabitur ut magna volutpat, consequat felis nec, rutrum nisi. Nullam ac efficitur libero. Sed auctor accumsan nunc, quis fringilla lacus aliquam a. Phasellus vel est eu metus feugiat commodo at at elit. Integer et mattis massa.</p>
          <Link class="btn btn-dark btn-lg " style={
            {
              borderRadius : "50px"
            }
          }
           to="/book-appointment">
          Book an Appiontment
          </Link>
          <Link class="btn btn-primary btn-lg " style={
            {
              borderRadius : "50px"
            }
          } to="/aboutus">
          Learn More
          </Link>
        </div>

        <div class="col-lg-6">
          <img className= 'top-img' src={psychiatristImg} />
        </div>
      </div>
    </div>)
}
export default MentalApp;
