import React from 'react'
import profile from '../images/ashutosh.png'
import styled from 'styled-components';

const StyleImg = styled.img`
width:200px;
height:auto ;
border:2px solid #000;
border-radius:50% ;
`

const StyledH1 = styled.h1`
    line-heright: 1.5;
    letter-spacing: 1.5;
    font-family: "Gilroy";
`;

const StyledH3 = styled.h3`
    line-heright: 1.5;
    letter-spacing: 1.15;
    font-family: "Gilroy";
    font-size: 20px;
`;


const Card =()=>{
    return(
<div>
    <StyleImg src={profile} alt=""/>
    <h1>movie title</h1>
    <h3>rating</h3>
    <h3>year</h3>
    <h3>movie genere</h3>
    <h3>introduction</h3>
    <h3>IMDB LINK</h3>
</div>)
}
export default Card