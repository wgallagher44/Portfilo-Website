import React from "react";
import gitImage from "../Images/github_logo.png"
import "./project.css"
export default function Project(props){
    console.log(props)
    if(props.projectNumber == 1){
        return (
        <div className="project1">
           {/* <div className="overlay">
            <img src = {props.projectImage} className="project-img" ></img> 
            </div>  */}
            <div className="project-section">
                 <h3 className="project-title">{props.projectTitle}</h3>
            <div className="project-desc">{props.projectDesc}</div>
            <div className="project-tech">{props.projectTech}</div>
              <a href={props.projectLink} className="project-git"  ><img src={gitImage} width = "30"></img></a>
                </div>   
           
          
        </div>
        )
    }
    return (
         <div className="project2">
           {/* <div className="overlay">
            <img src = {props.projectImage} className="project-img" ></img> 
            </div>  */}
            <div className="project-section">
                 <h3 className="project-title">{props.projectTitle}</h3>
            <div className="project-desc">{props.projectDesc}</div>
            <div className="project-tech">{props.projectTech}</div>
            <a href={props.projectLink} className="project-git"  ><img src={gitImage} width = "30"></img></a>
                </div>   
           
          
        </div>
    )


    
    
}

