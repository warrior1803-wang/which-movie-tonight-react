import React from "react";
import './MovieCard.css'
import MovieInfo from "./MovieInfo";
import MovieTitle from "./MovieTitle";
export default function MovieCard() {
  return (
    <div class="blog-card spring-fever">
     <MovieTitle></MovieTitle>
     <MovieInfo></MovieInfo>
     <
      <div class="utility-info">
        <ul class="utility-list">
          <li>
            <span class="licon icon-like"></span>
            <a href="#">2</a>
          </li>
          <li>
            <span class="licon icon-com"></span>
            <a href="#">12</a>
          </li>
          <li>
            <span class="licon icon-dat"></span>03 jun 2017
          </li>
          <li>
            <span class="licon icon-tag"></span>
            <a href="#">Photos</a>, <a href="#">Nice</a>
          </li>
        </ul>
      </div>
      <div class="gradient-overlay"></div>
      <div class="color-overlay"></div>
    </div>
  );
}
