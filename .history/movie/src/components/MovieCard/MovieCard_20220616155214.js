import React from "react";
import Backgroud from "../Overlay/Backgroud";
import Gradient from "../Overlay/Gradient";
import './MovieCard.css'
import MovieInfo from "./MovieInfo";
import MovieTitle from "./MovieTitle";
import UtilityInfo from "./UtilityInfo";
import back from ".."
export default function MovieCard(props) {
  return (
    <div class="blog-card spring-fever">
      <img src={back} alt="" />
     <MovieTitle  
     title={props.title}
    loadMovie={props.loadMovie}
    setLoadMovie={props.setLoadMovie}
  chooseMovie={props.chooseMovie}></MovieTitle>
     {props.loadMovie&& <MovieInfo
     intro={props.intro}
     link={props.link}></MovieInfo>}
    
     
     <UtilityInfo
     rating={props.rating}
     year={props.year}
     genres={props.genres}></UtilityInfo>
     <Gradient>

     </Gradient>
     <Backgroud></Backgroud>
      
    </div>
  );
}
