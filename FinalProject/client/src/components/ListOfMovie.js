import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function ListOfMovie(props) {
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

    const filteredMovies = movies.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.title.toLowerCase().includes(props.input);
        }
    })
    return (
        <>
      {isLoading ? (
        <li> Loading... </li>
        ):(
          <>
        <ul>
            {filteredMovies.map((item) => (
                <li key={item.id}><Link to={`../${item.title}`}>{item.title}</Link></li>
            ))}
        </ul>
        </>
      )}
        </>
    );
}