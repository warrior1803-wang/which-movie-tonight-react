import React from 'react'
import {AiFillStar,AiTwotoneCalendar,AiFillTag} from 'react-icons/ai'
export default function UtilityInfo() {
  return (
    <div class="utility-info">
    <ul class="utility-list">
      <li>
        <AiFillStar className='licon'></AiFillStar>
        <a href="#">2</a>
      </li>
     
      <li>
        <AiTwotoneCalendar class="licon icon-dat"></AiTwotoneCalendar>03 jun 2017
      </li>
      <li>
        <AiFillTag class="licon icon-tag"></span>
        <a href="#">Photos</a>, <a href="#">Nice</a>
      </li>
    </ul>
  </div>
  )
}
