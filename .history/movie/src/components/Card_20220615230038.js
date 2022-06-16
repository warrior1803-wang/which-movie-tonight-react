import React from 'react'
import profile from '../images/ashutosh.png'
import styled from 'styled-components';
const Container = styled.div`
   display: inline-block;
padding: 3em;
background: #C7D2FE66;
border-radius: 10px;
z-index: 1;
position: relative;
backdrop-filter: blur(10px);
border: 2px solid transparent;
background-clip: border-box;
cursor: pointer;
`

const StyleImg = styled.img`
width:200px;
height:auto ;
border:2px solid #000;
border-radius:50% ;
`

const StyledH1 = styled.h1`
    line-height: 1.5;
    letter-spacing: 1.5;
    font-family: 'Roboto', sans-serif;
`;

const StyledH3 = styled.h3`
    line-height: 1.5;
    letter-spacing: 1.15;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
`;
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const GlassCard = () => {

const Card =()=>{
    return(
<Container>
    <StyleImg src={profile} alt=""/>
    <StyledH1>movie title</StyledH1>
    <StyledH3>rating</StyledH3>
    <StyledH3>year</StyledH3>
    <StyledH3>movie genere</StyledH3>
    <StyledH3>introduction</StyledH3>
    <StyledH3>IMDB LINK</StyledH3>
</Container>)
}

export default Card