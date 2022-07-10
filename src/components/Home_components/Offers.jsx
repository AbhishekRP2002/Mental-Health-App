import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import psychiatristImg from "../images/Psychiatrist.jpg"
import "./css/home.css"
import {Link} from "react-router-dom";

function Offers(){
    return (  <section id="pricing">

    <h2>What do we offer</h2>
    <p>Make a card component for these cards</p>
    
    <div class="row">


        <div class="pricing-column col-lg-6 col-md-6">

            <div class="card" >
                <div class="card-body">
                    <h2 class="card-title">Al-qaeeda training</h2>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

        </div>

        <div class="pricing-column col-lg-6 col-md-6">

            <div class="card" >
                <div class="card-body">
                    <h2 class="card-title">Anti-BTS training</h2>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

        </div>

        <div class="pricing-column col-lg-6 col-md-6">

            <div class="card" >
                <div class="card-body">
                    <h2 class="card-title">Couples Divorcing</h2>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

        </div>

        <div class="pricing-column col-lg-6 col-md-6">
    
            <div class="card" >
                <div class="card-body">
                    <h2 class="card-title">Depression Therapy</h2>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
    
        </div>    

    </div>

  </section>)
}

export default Offers;