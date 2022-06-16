import React from 'react'

export default function MovieTitle(props) {
  return (
    <div class="title-content"  onClick={props.chooseMovie}>
        <h3>
         {!props.loadMovie&& <a href="#">Which movie for tonight?</a>}
        </h3>
        <div class="intro">
          {" "}
          <a href="#" >Click for inspriation</a>{" "}
        </div>
      </div>
  )
}
