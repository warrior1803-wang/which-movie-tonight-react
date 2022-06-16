import React from 'react'

export default function MovieTitle(props) {
    const changeHandler=()=>{
        props.chooseMovie();
        props.setLoadMovie(true)
    }
  return (
    <div class="title-content"  onClick={changeHandler}>
        <h3>
         {!props.loadMovie&& <p>Which movie for tonight?</p>}
         {props.loadMovie&&<p>{props.title}</p>}
        </h3>
        <div class="intro">
          {" "}
          <p>Click for inspriation</a>{" "}
        </div>
      </div>
  )
}