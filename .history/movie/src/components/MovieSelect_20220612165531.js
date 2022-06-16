import React from 'react'
import films from '../films_data/films.json'
export default function MovieSelect() {

const chooseMovie = () =>{
    const loadMovies=[]
    for(const key in films){
    loadMovies.push(
      {
        id:key,
        title:films[key].movie_title,
        link:films[key].link
  
      })

    console.log(loadMovies[1])
    }}
  return (
    <div>
        <h1>which movie for tonight?</h1>
        <button onClick={chooseMovie}>Choose</button>
    </div>
  )
  }
