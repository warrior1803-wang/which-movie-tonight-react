import React from 'react'
import {AiFillStar,AiTwotoneCalendar,AiFillTag} from 'react-icons/ai'
export default function UtilityInfo(props) {
  return (
    <div class="utility-info">
    <ul class="utility-list">
      <li>
        <AiFillStar className='licon'></AiFillStar>
        <a href="#">{props.rating}</a>
      </li>
     
      <li>
        <AiTwotoneCalendar class="licon icon-dat">{props.}</AiTwotoneCalendar>03 jun 2017
      </li>
      <li>
        <AiFillTag class="licon icon-tag"></AiFillTag>
        <a href="#">Photos</a>, <a href="#">Nice</a>
      </li>
    </ul>
  </div>
  )
}