// import res from "express/lib/response";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddComment() {
  const [comments, setComments] = useState([]);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {comments:comments };
    console.log("submitted ", newComment);
    try {
      const response = await fetch("http://localhost:5000/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newComment),
      });
      if (!response.ok) {
        throw Error("POST request failed");
      }
      const data = await response.json();
      // console.log(data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Review</label>
        <input
          required
          type="text"
          value={comments}
          onChange={(e) => setComments(arr => [...arr, e.target.value])}
          //still working on
        ></input>
      </div>
      <input type="submit" value="Submit your comment" />
    </form>
  );
}