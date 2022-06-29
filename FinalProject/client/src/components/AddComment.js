// import res from "express/lib/response";
import React, { useState, useRef } from "react";
import { useNavigate} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function AddComment() {
  const [comments, setComments] = useState([]);
  // const [inputText, setInputText] = useState("");
  let navigate = useNavigate();
  // let history = useHistory();
  const commentRef = useRef(null);

  const { isAuthenticated, loginWithRedirect } = useAuth0();
  if (!isAuthenticated) {
    loginWithRedirect(
      {appState: {
      returnTo: window.location.pathname
    }
  });
  }

  let inputHandler = (e) => {
    setComments(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {comments:comments };
    console.log("submitted ", newComment);

    try {

      const response = await fetch("/:movieTitle", {
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
      <div className="form-control">
        <label htmlFor="comment" ref={commentRef}>Comment</label>   
                  {/* htmlFor and id for accessibility */}
        <input
          id="comment"
          required
          type="text"
          value={comments}
          onChange={inputHandler}
          //still working on
        ></input>
      </div>
      <input type="submit" value="Submit your comment" />
    </form>
  );
}