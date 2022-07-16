import React from "react";
import AboutPhoto from "../Images/about_photo.jpg"
function AboutMe(){

return (
    <section id = "About" className="about">
        <img src={AboutPhoto} className = "about-photo"></img>
        <div className="about-section">

       
        <h1 className="about-title">About Me</h1>

        <div className="about-desc">I’m a Computer Science major and math minor at Bloomsburg University
            . My interests 
            include software design and development
            ,web development and mobile development. 
            In my free time I like to work on coding projects
            , play disc golf and play video games.</div>
        <h2 className="about-act">Activities</h2> 
        <ul className="about-list">
         <li>Captain of Bloomsburg Club Ultimate Frisbee team </li>   
         <li>Treasure of Association for Computing Machinery </li>
         <li>Placed 15th in CCSCNE programming competition </li>  
         <li>Placed 6th in PACISE programming competition </li> 
         <li>Judge Bloomsburg High School programing competition  </li>
         <li>Concert Choir</li>
         <li>Leading tones</li>
            
        </ul>   
        </div>

    </section>

);
}
export default AboutMe