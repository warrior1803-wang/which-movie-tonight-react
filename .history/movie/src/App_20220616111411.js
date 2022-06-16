

import React, { useState } from 'react';
import films from 

import MovieCard from './components/MovieCard/MovieCard';
function App() {
  
  const loadMovies = [];
    const [movie,setMovie] = useState('')
    const [link,setLink]=useState('')
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
    const WEB_IMDB= `https://www.imdb.com/title/${link}`
console.log(randomLink);

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
      setLink(data.imdb_id)
     for (let index = 0; index < data.genres.length; index++) {
      // console.log(data.genres[index].name);
      loadGenres.push(data.genres[index].name)

       
     }
     
     
      setGenres(loadGenres)
      // console.log(loadGenres);
     })
    
    
    
   }
    const chooseMovie = () => {
   
    fetchMovieInfo()
  };

  return (
    <div className="App"
   >
  
  <MovieCard></MovieCard>

    </div>
  );
}

export default App;
