import React from "react";
import Coding from './Coding'
import JavaLogo from "../Images/java_logo.jpeg"
import CLogo from "../Images/c_logo.png"
import CppLogo from "../Images/c++_logo.png"
import firebaseLogo from "../Images/firebase_logo.png"
import HtmlLogo from "../Images/html_logo.jpg"
import KotlinLogo from "../Images/kotlin_logo.png"
import mySqlLogo from "../Images/mysql_logo.png"
import PythonLogo from "../Images/python_logo.png"
import ReactLogo from "../Images/react_logo.png"
function Skills(){        
    return (
        <div className="skills">
            <Coding logo = {JavaLogo} title = "Java" desc = "This is a cool language" />
            <Coding logo = {CLogo} title = "C" desc = "This is a cool language" />
            <Coding logo = {CppLogo} title = "C++" desc = "This is a cool language" />
            <Coding logo = {firebaseLogo} title = "Firebase" desc = "This is a cool language" />
            <Coding logo = {HtmlLogo} title = "Html + CSS" desc = "This is a cool language" />
            <Coding logo = {KotlinLogo} title = "Kotlin" desc = "This is a cool language" />
            <Coding logo = {mySqlLogo} title = "mySQL" desc = "This is a cool language" />
            <Coding logo = {PythonLogo} title = "Python" desc = "This is a cool language" />
            <Coding logo = {ReactLogo} title = "React" desc = "This is a cool language" />


        </div>

    )


}
export default Skills