import React from 'react'

export default function MovieInfo(props) {
  return (
    <div class="card-info">
       {props.intro}
        <a href={props.link} target="_blank" rel='norefer'>
          Read more<span class="licon icon-arr icon-black"></span>
        </a>
      </div>
  )
}