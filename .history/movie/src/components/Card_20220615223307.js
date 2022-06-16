import React from 'react'
import profile from '../images/ashutosh.png'
import styled from 'styled-component'

const StyleImg = styled.img`
width:200px;
height:auto ;
`



const Card =()=>{
    return(
<div>
    <img src={profile} alt=""/>
    <h1>movie title</h1>
    <h3>rating</h3>
    <h3>year</h3>
    <h3>movie genere</h3>
    <h3>introduction</h3>
    <h3>IMDB LINK</h3>
</div>)
}
export default Card