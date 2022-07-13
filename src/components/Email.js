import React from "react";
import gitImage from "../Images/github_logo.png"
import linkedIn from "../Images/linkedIn_icon.png"




function Email (){
    return (
        <section id = "Contact Me"className="email">
           <h3 className="email-heading">Contact Me</h3> 
           <div className="email-media">
            <a href="https://www.linkedin.com/in/will-gallagher-6820b81b5/" className="email-linked"><img src={linkedIn} width = "50"></img></a>
            <a href="https://github.com/wgallagher44/" className="email-git"> <img src = {gitImage} width = "50"></img></a>

           </div>
           <div className="email-contact">willgallagher0702@gmail.com/ 717-209-1084</div> 
           <div className="email-section">
            <div className="email-info">
                  <input type="text" className="email-name" placeholder="Your Name"></input>
            <input type="text" className="email-subject" placeholder="Subject"></input>
            </div>
            <textarea type="text" className="email-message" placeholder="Message"></textarea>
           </div>
            
          <button className="email-send">Send</button>

        </section>
    );
}
export default Email;