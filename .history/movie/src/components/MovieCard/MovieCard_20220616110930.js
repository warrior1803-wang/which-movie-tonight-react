import React from "react";
import './MovieCard.css'
import MovieInfo from "./MovieInfo";
import MovieTitle from "./MovieTitle";
import UtilityInfo from "./UtilityInfo";
export default function MovieCard() {
  return (
    <div class="blog-card spring-fever">
     <MovieTitle></MovieTitle>
     <MovieInfo></MovieInfo>
     
     <UtilityInfo></UtilityInfo>
     
      
    </div>
  );
}
