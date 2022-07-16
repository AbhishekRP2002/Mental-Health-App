import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import "./css/home.css";
import Card from "./Card.jsx";
import {Link} from "react-router-dom";

function Offers(){
    return (  <section id="pricing">

    <h2 className='offerHeading'>What do we offer</h2>
    <p>We offer these types of Humanistic, Psychoanalysis and Psychodynamic therapies</p>
    <div class="row">
        <Card
            title= "Existential therapy"
            content =" To help the patient find meaning and purpose in their lives. It seeks to end the fear of the unknown." 
        />

        <Card
            title= "Couple therapy"
            content ="Counseling for couples who are in a relationship, married or not. It's often referred to as marriage counseling." 
        />

        <Card
            title= "Cognitive Behavioral Therapy (CBT)"
            content ="Helps an individual identify and change negative thoughts and associated behaviors." 
        />
        <Card
            title= "Domestic violence Counseling and Therapy"
            content ="A form of therapy that may be beneficial for survivors of domestic abuse." 
        />

    </div>

  </section>)
}

export default Offers;
