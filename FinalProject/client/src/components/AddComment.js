// import res from "express/lib/response";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function AddComment() {
  const [comments, setComments] = useState([]);
  // const [inputText, setInputText] = useState("");
  let navigate = useNavigate();
  const params = useParams();
  const commentRef = useRef(null);

  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  if (!isAuthenticated) {
    loginWithRedirect(
      {appState: {
      returnTo: window.location.pathname
    }
  });
  }

  useEffect(() => commentRef.current.focus());
  //   useEffect(() => {
  //   async function fetchComments() {
  //     try {
  //       const response = await fetch(`/api/comment/${params.movieTitle}`);
  //       if (!response.ok) {
  //         throw Error("Fetch failed");
  //       }
  //       const data = await response.json();
  //       setComments(data.comments);
  //     } catch (err) {
  //       console.log("catch ", err);
  //     }
  //   };
  //   fetchComments();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {comments: comments};
    // setComments(newComment);

    try {
      console.log(newComment);
      console.log(params.movieTitle);
      const response = await fetch(`/api/comment/${params.movieTitle}`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newComment),
      });
      if (!response.ok) {
        throw Error("POST request failed");
      }
      const data = await response.json();
      console.log(data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control" id="commentForm">
        <label htmlFor="comment" ref={commentRef}>Comment</label>   
                  {/* htmlFor and id for accessibility */}
        <input
          id="comments"
          ref={commentRef}
          required
          type="text"
          value={comments}
          onChange={(e)=> setComments(e.target.value)}
          //still working on
        ></input>
      </div>
      <input type="submit" value="Submit your comment" />
    </form>
  );
}
