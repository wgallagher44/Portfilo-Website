import React from "react";
import "./Coding.css"
function Coding(props){
    return(
        <div className="coding">
            <img className="coding-logo" src = {props.logo}></img>
            <h3 className="coding-title">{props.title}</h3>
            <div className="coding-desc">{props.desc}</div>
        </div>
    );
}
export default Coding

