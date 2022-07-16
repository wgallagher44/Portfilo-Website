
import React from "react";
import gitLogo from "../Images/github_logo.png"
import linkedin from "../Images/linkin_logo.png"
export default function Footer(){

    return (
        <Footer>
        
        <button><img src={gitLogo}></img></button>
        <button><img src = {linkedin}></img></button>
        <div>Last Updated 7/8/2022</div>
        </Footer>
    );
}