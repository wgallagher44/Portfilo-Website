import React from "react";
import Profile from "../Images/profile.jpg"
function Main(){
    return(
        <div className="main">
          
        <img src={Profile} className="main-image" ></img>
         
           
            <h1 className="main-name">Will Gallagher</h1>
            <h3 className="main-title">Computer Science Student At Bloomsburg University </h3>
        </div>

    );
}
export default Main;