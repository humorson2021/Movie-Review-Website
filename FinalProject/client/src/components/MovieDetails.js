// import React from 'react'

// export default function TaskDetails() {
//   return (
//     <div>You are Vieweing Task details</div>
//   )
// }

import { useParams } from 'react-router-dom';
import React, { useState, useEffect, useRef } from "react";

export default function TaskDetails({ onAddTaskClicked, showForm }) {
  const headingRef = useRef(null);
    const {movieTitle} = useParams();
    console.log(movieTitle);
    // headingRef.current.focus()

    // const [user, setUser] = useState([]);
    // useEffect(() => {
    //     async function fetchUser() {
    //       try {
    //         const response = await fetch(`http://localhost:5000/users?task=${taskId}`);
    //         if (!response.ok) {
    //           throw Error("Fetch failed");
    //         }
    //         const user = await response.json();
         
    //         console.log(user)
    //       } catch (err) {
    //         console.log("catch ", err);
    //       }
    //     }
    //     fetchUser();
    //   }, [taskId]);
    // console.log (params)
  return (
    <div tabIndex={-1} ref={headingRef}>
      You are Viewing movie {movieTitle}'s details
      <button onClick={onAddTaskClicked}>
        {showForm? "Close" :"Add Comment"}
      </button>
    </div>
  )
}