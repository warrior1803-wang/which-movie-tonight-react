import React from 'react'
import films from '../films_data/films.json'
export default function MovieSelect() {


  return (
    <div>
        <h1>which movie for tonight?</h1>
        <button onClick={choose}>Choose</button>
    </div>
  )
}