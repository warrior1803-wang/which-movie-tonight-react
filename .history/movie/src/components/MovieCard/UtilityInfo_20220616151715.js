import React from 'react'
import {AiFillStar,AiTwotoneCalendar,AiFillTag} from 'react-icons/ai'
export default function UtilityInfo(props) {
  return (
    <div class="utility-info">
    <ul class="utility-list">
      <li>
        <AiFillStar className='licon'></AiFillStar>
       {props.rating}
      </li>
     
      <li>
        <AiTwotoneCalendar class="licon icon-dat"></AiTwotoneCalendar>{props.year}
      </li>
      <li>
        <AiFillTag class="licon icon-tag"></AiFillTag>
       {props.genres}
      </li>
    </ul>
  </div>
  )
}
