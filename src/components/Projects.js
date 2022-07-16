import React from 'react'
import GeoFood_img from "../Images/geofood_logo.png";
import PdgaLogo from "../Images/pdga_logo.png";
import Sudoku  from "../Images/sudoku.jpg";
import calc from "../Images/calculator.png";
import Project from "./Project"
export default function Projects(){
    return (
        <div className='projects'>
            <h1 className='projects-header'>Coding Projects</h1>
        <section id = "Projects" className='projects-section'>

         <Project projectImage = {GeoFood_img} projectTitle = "GeoFood" 
        projectDesc = "An android app that is used to locate restaurants. You can search by either your current location or you can search by a location that you select on a map. When searching you can specify the price range and radius you want this restaurant in."
        projectTech = "Android Studio XML Google Places API Kotlin Firebase "
        projectNumber = {1}
        projectLink="https://github.com/wgallagher44/GeoFood"
        />
        <Project projectImage = {PdgaLogo} projectTitle = "PDGA Tournament Updater"
        projectDesc ="PDGA Tournament Updater is a python script that scrapes the pdga tournament page and gives back a list of players names and scores. With this data it sends a text message to a specified number with the results of the tournament every Friday, Saturday and Sunday of a tournament."
        projectTech = "Python Replit Uptime Robot Beautiful Soup Twilio Api Flask  "
        projectNumber = {2}
        projectLink = "https://github.com/wgallagher44/PDGA-Tournament-Updater"
        />
        <Project projectImage = {Sudoku} projectTitle = "Sudoku Solver"
        projectDesc = "Sudoku solver is an Android App that has a sudoku board that you can either solve yourself but if you are stuck there is a feature to solve the board for you. It uses recursive backtracking to solve the sudoku board."
        projectTech = "Android Studio Kotlin Java Basic Xml Layouts"
        projectNumber = {1}
        projectLink = "https://github.com/wgallagher44/Sudoku"
        />
        <Project projectImage = {calc} projectTitle = "React Calculator"
        projectDesc = "A React Web app that does simple arithmetic. It has the normal multiply divide, add and subtract. On top of that it also has the ability to convert base 10 numbers to different bases including 16,2 and 8."
        projectTech = "React CSS HTML React Hooks"
        projectNumber = {2}
        projectLink ="https://github.com/wgallagher44/React-Calculator"
        />   
        </section>
        </div>
        
    );
}