import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import "./css/home.css"
import {Link} from "react-router-dom";

function Card(props){
    return(
        <div class="col-lg-6 col-md-6">

            <div class="card" >
                <div class="card-body">
                    <h3 class="card-title">{props.title}</h3>
                    <p class="card-text">{props.content}</p>
                    <Link class="btn btn-dark btn-md " to="/book-appointment">
                        Book an Appiontment
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Card;