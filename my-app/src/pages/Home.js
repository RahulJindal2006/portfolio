import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from "../assets/Codingimage.jpg"
import "../styles/Home.css"
function Home() {
  return (
    <div className = "home" style={{backgroundImage: `url(${BannerImage})`}}>
      <div className = "headerContainer">
        <h1> RAHUL'S PORTFOLIO </h1>
        <p> TURNING IDEAS INTO REALITY </p>
        <Link to="/projects">
        <button> PROJECTS </button>
        </Link>
      </div>
    </div>
  )
}

export default Home;
