import React,{useEffect, useState} from 'react';
import {getDocs,collection,doc, deleteDoc} from "firebase/firestore";
import {db,auth} from "../firebase-config";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ChatSpace(isAuth) {
  
  const [allPosts,setAllPosts]=useState([]);

  const collectionReference = collection(db,"posts");

  useEffect(() => {
   const getPosts = async () => {
    const data = await getDocs(collectionReference);
    setAllPosts(data.docs.map((doc)=> ({ ...doc.data(), id: doc.id })));
   };
  getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  const [query, setQuery] = useState("");
  const keys = ["title", "post"];
  const Search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <>
    <div className="row">
    <div className="blogPage col-sm-8">
      {allPosts.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer"> {post.post} </div>
            <div className="authorname">
              <h3>@{post.author.name}</h3>
            </div>
          </div>
        );
      })}
    </div>
    <div className='right col-sm-3'>
     <div className="right-box-top">      
        <h1>Let Us Know About Your Story!</h1>
        <Link to="/create"> <button className='btn btn-primary'>Create Post</button> </Link>
     </div>
    
     
    </div>
    </div>
    </>
  );
}

export default ChatSpace;
