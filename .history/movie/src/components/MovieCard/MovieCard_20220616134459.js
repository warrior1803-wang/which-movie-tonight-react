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
     title={props.title}
    loadMovie={props.loadMovie}
    setLoadMovie={props.setLoadMovie}
  chooseMovie={props.chooseMovie}></MovieTitle>
     {props.is}
     <MovieInfo
     intro={props.intro}></MovieInfo>
     
     <UtilityInfo></UtilityInfo>
     <Gradient>

     </Gradient>
     <Backgroud></Backgroud>
      
    </div>
  );
}
