import React, {  useState } from "react";
import films from "../films_data/films.json";
import Button from 'react-bootstrap/Button'
import './MovieSelect.css'
export default function MovieSelect() {
    const loadMovies = [];
    const [movie,setMovie] = useState('')
    const [poster, setPoster]= useState('')
    const [intro,setIntro]= useState('')
    const [rating, setRating]=useState('')
    const [year,setYear]=useState('')
    const [genres,setGenres]=useState([])
    const loadGenres =[]

    const IMG_PATH = `https://image.tmdb.org/t/p/w500${poster}`

    for (const key in films) {
      loadMovies.push({
        id: key,
        title: films[key].movie_title,
        link: films[key].link,
      });
    }
    const randomNumber = Math.floor(Math.random()*loadMovies.length)
    const randomLink = loadMovies[randomNumber].link
   const fetchMovieInfo=()=> {

     fetch(`https://api.themoviedb.org/3/movie/${randomLink}?api_key=a80c67fc26870104bf793102862fb5d2&language=en-US`).then(
       (res)=>{
         return res.json()
       }
     ).then((data)=>{
      console.log(data);
      setMovie(data.original_title)
      setPoster(data.poster_path)
      setIntro(data.overview)
      setRating(data.vote_average)
      setYear(data.release_date)
     for (let index = 0; index < data.genres.length; index++) {
      // console.log(data.genres[index].name);
      loadGenres.push(data.genres[index].name)

       
     }
     
     
      setGenres(loadGenres)
      console.log(loadGenres);
     })
    
    
    
   }
    const chooseMovie = () => {
   
    fetchMovieInfo()
  };
  return (
    <div>
      <h1>which movie for tonight?</h1>
      
      <Button variant="outline-primary" size="md" onClick={chooseMovie}>Choose</Button>
      <C
     <div>
       <h2>{movie}</h2>
       <h3>Realse-Year: {year}</h3>
       <h3>Rating: {rating}</h3>
       <h3>Genre:</h3>
       <h4>{genres.map((gen)=>(
         <h4>{gen}</h4>
       ))}</h4>
     <img src={IMG_PATH} alt="" />
     <p>{intro}</p></div>
     
    </div>
  );
}
