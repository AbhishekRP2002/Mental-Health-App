import React,{useEffect, useState} from 'react'
import {addDoc,collection} from "firebase/firestore";
import {db,auth} from "../firebase-config";
import {useNavigate} from "react-router-dom";

function Create({isAuth}) {

  const navigate=useNavigate();

  const [title,setTitle]=useState("");
  const [post,setPost]=useState("");
  
  const collectionReference = collection(db,"posts");

  const createPost = async() => {
     await addDoc(collectionReference,{
      title:title,
      post:post,
      author: { name: auth.currentUser.displayName ,id:auth.currentUser.uid } 
    });
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
          Create A Post
        </h1>
        <div className="inputGrp">
              <label>Title:</label>
              <input placeholder="Enter The Title Of Your Post" onChange={(e)=>{setTitle(e.target.value)}}/>
        </div>
        <div className="inputGrp">
              <label>Post:</label>
              <textarea placeholder="Tell Us Your Story!" onChange={(e)=>{setPost(e.target.value)}}/>
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  )
}

export default Create
