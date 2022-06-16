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
   const fetchMovieInfo() {

     fetch(`https://api.themoviedb.org/3/movie/${randomLink}?api_key=a80c67fc26870104bf793102862fb5d2&language=en-US`).then(
       (res)=>{
         return res.json()
       }
     ).then((data)=>{
      // console.log(data);
      setMovie(data.original_title)
     })
    
    
    
   }
    const chooseMovie = () => {
    
    let randomNumber = Math.floor(Math.random()*loadMovies.length)
    let randomLink = loadMovies[randomNumber].link
    console.log(randomLink)
    fetchMovieInfo()
  };
  return (
    <div>
      <h1>which movie for tonight?</h1>
      <button onClick={chooseMovie}>Choose</button>
     <div>{movie}</div>
    </div>
  );
}
