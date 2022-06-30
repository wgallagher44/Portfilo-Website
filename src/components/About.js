import React from "react";
import AboutPhoto from "../Images/about_photo.jpg"
function AboutMe(){

return (
    <div>
        <img src={AboutPhoto}></img>
        <div>

       
        <h1>About Me</h1>

        <div>I’m a Computer Science major and math minor at Bloomsburg University
            . My interests 
            include software design and development
            ,web development and mobile development. 
            In my free time I like to work on coding projects
            , play disc golf and play video games.</div>
        <h2>Activities</h2> 
        <ul>
         <li>Captain of Bloomsburg Club Ultimate Frisbee team </li>   
         <li>Treasure of Association for Computing Machinery </li>
         <li>Placed 15th in CCSCNE programming competition </li>  
         <li>Placed 6th in PACISE programming competition </li> 
         <li>Judge Bloomsburg High School programing competition  </li>
         <li>Concert Choir</li>
         <li>Leading tones</li>
            
            </ul>   
        </div>

    </div>

);
}
export default AboutMe