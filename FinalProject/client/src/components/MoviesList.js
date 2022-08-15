import React, { useState, useEffect } from "react";
import Movie from "./Movie";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/movies`);
        if (!response.ok) {
          throw Error("Fetch failed");
        }
        const data = await response.json();
        setMovies(data);
        setIsLoading(false);
      } catch (err) {
        console.log("catch ", err);
      }
    }
    fetchData();
  }, []);

  // async function deleteClicked(deletedId) {
  //   console.log("clicked", deletedId);
  //   try {
  //     const response = await fetch(`/movies/${deletedId}`, {
  //       method: "DELETE",
  //     });
  //     console.log(response);

  //   } catch (err) {
  //     console.log(err);
  //   }
  //   const updatedMoives = movies.filter((item) => item.title !== deletedId);
  //   setMovies(updatedMoives);
  // }
  return (
    <>
      {isLoading ? (
        <li> Loading... </li>
      ) : movies.length > 0 ? (
        <>
        <li><em>Movies' title and rate</em></li>
          {movies.map((item) => (
            <Movie key={item._id} movie={item} />
          ))}
        </>
      ) : (
        <li>No Movies Left</li>
      )}
    </>
  );
}
// async function deleteClicked(deletedId) {
//     console.log("clicked", deletedId);
//     const response = await fetch(`https://localhost:5000/tasks/${deletedId}`, {
//       method: "DELETE",
//     });
//     const updatedTasks = tasks.filter((item) => item.id !== deletedId);
//     setTasks(updatedTasks);
//   }
//   ;

