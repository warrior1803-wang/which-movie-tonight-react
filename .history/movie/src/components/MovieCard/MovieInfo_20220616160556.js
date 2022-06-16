import React from 'react'
import {AiOutlineArrowRight} from'react-icons/ai'
export default function MovieInfo(props) {
  return (
    <div class="card-info" onClick={props.chooseMovie}>
       {props.intro}
        <a href={props.link} target="_blank" rel='noreferrer'>
          Read more<AiOutlineArrowRight class="licon icon-arr icon-black"></AiOutlineArrowRight>
        </a>
      </div>
  )
}
