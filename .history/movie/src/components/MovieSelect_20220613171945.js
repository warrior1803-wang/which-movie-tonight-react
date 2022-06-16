import React, {  useState } from "react";
import films from "../films_data/films.json";
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card"
import ListGroup from 'react-bootstrap/ListGroup'

import ListGroupItem from 'react-bootstrap/ListGroupItem'
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
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={IMG_PATH}/>
  <Card.Body>
    <Card.Title>{movie}</Card.Title>
    <Card.Text>
     {intro}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Realse-Year: {year}</ListGroupItem>
    <ListGroupItem>Rating: {rating}</ListGroupItem>
    <ListGroupItem>Genre:{genres.map((gen)=>(
         <p>{gen}</p>
       ))}</ListGroupItem>

   
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
 */}
  );
}
