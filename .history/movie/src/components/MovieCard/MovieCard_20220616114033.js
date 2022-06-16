import React from "react";
import Backgroud from "../Overlay/Backgroud";
import Gradient from "../Overlay/Gradient";
import './MovieCard.css'
import MovieInfo from "./MovieInfo";
import MovieTitle from "./MovieTitle";
import UtilityInfo from "./UtilityInfo";
export default function MovieCard(props) {
  return (
    <div class="blog-card spring-fever">
     <MovieTitle  
     title={props.movie}
  intro={intro}
  rating={rating}
  year={year}
  genres={genres}
  link ={WEB_IMDB}
  poster={IMG_PATH}
  loadMovie={loadMovie}
  chooseMovie={props.chooseMovie}></MovieTitle>
     <MovieInfo></MovieInfo>
     
     <UtilityInfo></UtilityInfo>
     <Gradient>

     </Gradient>
     <Backgroud></Backgroud>
      
    </div>
  );
}
