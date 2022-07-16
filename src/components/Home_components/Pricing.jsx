import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import "./css/home.css"
import {Link} from "react-router-dom";
import PriceCard from './PlanCard';
function Pricing(){
    return (
        <section id="pricing">

        <h2 className='offerHeading'>Pricing Plans</h2>
        <p>Simple and affordable price plans for you.</p>
    
        <div class="row">
            <PriceCard
            price="$100"
            plan="Light session"
            />
            <PriceCard
            price="$150"
            plan="Standard session" 
            feature1= "Personal meeting"
            />
            <PriceCard 
            price="$200"
            plan="Individual session"
            feature1= "Personal meeting"
            feature2= "Support 24 hours"
            />
        </div>
    
      </section>
    )
}

export default Pricing;