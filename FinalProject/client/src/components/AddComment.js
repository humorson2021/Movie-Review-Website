// import res from "express/lib/response";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddNewReview() {
  const [reviews, setReviews] = useState([]);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = {reviews: reviews };
    console.log("submitted ", newReview);
    try {
      const response = await fetch("http://localhost:5000/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newReview),
      });
      if (!response.ok) {
        throw Error("POST request failed");
      }
      const data = await response.json();
      // console.log(data);
      navigate(`/tasks/${data.Insertedid}`);
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
          value={reviews}
          onChange={(e) => setReviews(arr => [...arr, e.target.value])}
          //still working on
        ></input>
      </div>
      <input type="submit" value="Save movie" />
    </form>
  );
}