import React, { useState, useEffect } from "react";
import Website from "./Website";

export default function MovieWebsites() {
  const [websites, setWebsites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/movieWebsites`);
        if (!response.ok) {
          throw Error("Fetch failed");
        }
        const data = await response.json();
        setWebsites(data);
        setIsLoading(false);
      } catch (err) {
        console.log("catch ", err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <li> Loading... </li>
      ) : (
        <>
        <p><em>Interesting external movie websites:</em></p>
          {websites.map((item) => (
            <Website key={item._id} website={item} />
          ))}
        </>
      )}
    </>
  );
}