import React from 'react'

export default function MovieTitle(props) {
    const changeHandler=()=>{
        props.chooseMovie();
        props.setLoadMovie(true)
    }
  return (
    <div class="title-content"  onClick={changeHandler}>
        <h3>
         {!props.loadMovie&& <a href="#">Which movie for tonight?</a>}
         {props.loadMovie&&<a href="#">Which movie for tonight?</a>}
        </h3>
        <div class="intro">
          {" "}
          <a href="#" >Click for inspriation</a>{" "}
        </div>
      </div>
  )
}
