import data from "./DoctorData.json";
import { Link,useNavigate } from 'react-router-dom';
import '../App.css';
import React,{useEffect, useState} from 'react'
import {addDoc,collection} from "firebase/firestore";
import {db,auth} from "../firebase-config";
import BookingPage from "./BookingPage.js";

function Doctors(props) {
  const navigate=useNavigate(); 

     const booking = (id) => {
        return (
        navigate("/bookingpage/"+id)
        )
     }
    

    return (
        <>
            {data.map((item) => (
                <div class="container doc-card">
                    <br /><br />
    <div class="card flex-row flex-wrap">
        <div class="card-header border-0">
            <img className="doctor-img" src={item.image} alt="" />
        </div>
        <div class="card-block px-2 card-textpart">
            <h4 class="card-title">{item.name}</h4>
            <p class="card-text">{item.phone}</p>
            <p class="card-text">{item.name} works at {item.address}.</p>
            <button onClick={()=>booking(item.id)} className="btn btn-primary">Book Appointment</button>
        </div>
        <div class="w-100"></div>
        <div class="card-footer w-100 text-muted">
        {item.name} specializes in {item.spec}.
            
        </div>
    </div>
</div>
    ))}
        </>
    );
}

export default Doctors