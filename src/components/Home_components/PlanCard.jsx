import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import psychiatristImg from "../images/Psychiatrist.jpg"
import "./css/home.css";
import {Link} from "react-router-dom";

function PriceCard(props){
    return(
        <div class="pricing-column col-lg-4">

        <div class="card">
          <div class="card-header">
            <h3>{props.plan}</h3>
          </div>

          <div class="card-body">
            <h3>{props.price}</h3>
            <p>6 session / month</p>
            <p>Duration 30 minutes</p>
            <p>Group meetting</p>
            <p>{props.feature1}</p>
            <p>{props.feature2}</p>
            <Link class="btn btn-dark btn-lg " to="/signup">
                       Sign Up
            </Link>
          </div>

        </div>
    </div>
    )
}
export default PriceCard;