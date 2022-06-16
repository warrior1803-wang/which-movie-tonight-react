import React from "react";
import './MovieCard.css'
import MovieInfo from "./MovieInfo";
import MovieTitle from "./MovieTitle";
export default function MovieCard() {
  return (
    <div class="blog-card spring-fever">
     <MovieTitle></MovieTitle>
     <MovieInfo></MovieInfo>
     
     
      <div class="gradient-overlay"></div>
      <div class="color-overlay"></div>
    </div>
  );
}
