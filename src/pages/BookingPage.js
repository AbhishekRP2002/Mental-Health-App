import React,{useEffect, useState} from 'react'
import {addDoc,collection} from "firebase/firestore";
import {db,auth} from "../firebase-config";
import {useParams,useNavigate} from "react-router-dom";

function BookingPage(isAuth) {
  const docid = useParams();
  const navigate=useNavigate();

  const [time,setTime]=useState("");
  const [date,setDate]=useState("");
  
  const collectionReference = collection(db,"appointments");

  const createAppointment = async() => {
     await addDoc(collectionReference,{
      docid:docid.id,
      time:time,
      date:date,
      patient: { name: auth.currentUser.displayName ,id:auth.currentUser.uid } 
    });
    alert("Appointment booked on the "+date+" at "+time);
    navigate("/");
  }

  useEffect(() =>{
    if(!isAuth)
    {
    navigate("/login");
    }
  }, []);


  return (
    <div className="createPage">
      <div className="cpContainer">
        <h1>
          Book An Appointment
        </h1>
        <div className="inputGrp">
              <label>Date:</label>
              <input type="date" onChange={(e)=>{setDate(e.target.value)}}/>
        </div>
        <div className="inputGrp">
              <label>Time:</label>
              <input type="time" onChange={(e)=>{setTime(e.target.value)}}/>
        </div>
        <button onClick={createAppointment}>Book</button>
      </div>
    </div>
  )
}

export default BookingPage