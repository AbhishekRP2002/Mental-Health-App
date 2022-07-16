import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import "./css/home.css"
import {Link} from "react-router-dom";

function Share(){
    return (<div className="share">
        <h1>It's okay to Share!</h1>
        <div class="card">
            <div class="card-body">
              <h5 class="card-title">It's okay to share! You are not alone, we are all part of the family!</h5>
              <p>Tell us about your journey, your experience, your sufferings and how you managed to move on from it.</p>
              <h5>Don't be shy.</h5>
              <h6>Your experience might be a valuable lesson for others.</h6>
              <Link class="btn btn-dark btn-lg " to="/chatspace">
                Share!
              </Link>
            </div>
        </div>
    </div>

    )
}

export default Share;

