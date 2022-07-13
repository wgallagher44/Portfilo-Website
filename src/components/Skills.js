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

        <section className="skills" id ="Skills">
        <h1 className="skills-heading">Skills</h1> 
        <div className="skills-section" >
         
            <Coding logo = {JavaLogo} title = "Java" desc = "Java was the first programming language that I learned in college.I have about 2.5 years of experience with Java. I have taken Java 1,2 and 3. I am the most comfortable with Java. The only project with Java that I have done is using servlets and jsp to create a web app in Java. This project was a web banking web app I used MySQL as the database for that " />
            <Coding logo = {KotlinLogo} title = "Kotlin" desc = "I have been doing kotlin for 6 months. I used kotlin mainly for android mobile development along with android studio since it is the recommended language by google. I learned this language in compsci 345 mobile apps which is a class focused on android mobile app development .I created GeoFood and the sudoku solver using kotlin and android studio " />
            <Coding logo = {CLogo} title = "C" desc = "C was the second programming language that I learned.I have coded in C for about 4 months. I took one class in college compsci 240 C+ Assembly." />
            <Coding logo = {CppLogo} title = "C++" desc = "I have been doing C++ for about 4 months during Compsci 255 C++ data structures. During this class I learned how to create template classes,build linked lists and binary trees,iterators and read and write to a file." />
            <Coding logo = {firebaseLogo} title = "Firebase/ Google Console" desc = "I learned how to use these tools for my project GeoFood. I learned how to set up authentication and used a real time database to store users and their saved restaurants. For the google console I learned how to get an api key which then I used to have api calls to the google places nearby search api to get restaurants." />
           
            <Coding logo = {mySqlLogo} title = "MySQL" desc = "I have a year of MySQL experience, first learning it in compsci 357 Database Design which was a class heavily focused on relational databases and using MySQL. I also used it in a web banking app that is connected and used from Java and tomcat. This app simulates banking with the ability to withdraw money and deposit money " />
            <Coding logo = {PythonLogo} title = "Python" desc = "I have 6 months of experience with python learning it on my own. I know the basics of python and doing get requests and web scraping with python. I used those ideas within my project PDGA Tournament Updater " />
            <Coding logo = {ReactLogo} title = "React" desc = "I have some experience with react and am currently learning more about this javascript framework. I am doing my learning through different projects. For example this website is developed in react. Also my first project with react was creating a calculator which you can see below  " />
        </div>
      </section>

    )


}
export default Skills