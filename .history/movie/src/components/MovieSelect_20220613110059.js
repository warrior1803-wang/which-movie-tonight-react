import React, { useCallback, useState } from "react";
import films from "../films_data/films.json";
export default function MovieSelect() {
    const loadMovies = [];
    const [movie,setMovie] = useState('')

    for (const key in films) {
      loadMovies.push({
        id: key,
        title: films[key].movie_title,
        link: films[key].link,
      });
    }
   const fetchMovieInfo = useCallback(async()=>{
     const response = await fetch('')
     fetch('')
     if(!response.ok){
      throw new Error('something went wrong!')
     }
     const data = await response.json();
     setMovie(data)
   })
    const chooseMovie = () => {
    
    let randomNumber = Math.floor(Math.random()*loadMovies.length)
    console.log(loadMovies[randomNumber].link)
    fetchMovieInfo()
  };
  return (
    <div>
      <h1>which movie for tonight?</h1>
      <button onClick={chooseMovie}>Choose</button>
      <p>{movie}</p>
    </div>
  );
}
