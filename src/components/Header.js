import React from "react";
import resume from "../Images/Resume_Gallagher.pdf"
import script from "./script"
function Header(){
    return(
        <header className="header">
            <h3 className="header-name">Will Gallagher</h3>
         
            <a href="#About">About</a>
            <a href="#Skills">Skills</a>
            <a href="#Projects">Projects</a>
            <a href="#Contact Me">Contact Me</a>
            <a href = {resume} download="resume-gallagher">Resume</a>
            
            
        </header>
        

    );
}
export default Header;