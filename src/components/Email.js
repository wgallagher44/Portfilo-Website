
import gitImage from "../Images/github_logo.png"
import linkedIn from "../Images/linkedIn_icon.png"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



function Email (){
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_jox4d45', 'template_aiqf1iu', form.current, 'LF4pDJ8XbTOG0mpjT')
        .then((result) => {
            alert("Message Has been sent to Will")
            console.log(result.text);
            console.log("message sent")
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
    return (
        <section id = "Contact Me"className="email">
           <h3 className="email-heading">Contact Me</h3> 
           <div className="email-media">
            <a href="https://www.linkedin.com/in/will-gallagher-6820b81b5/" className="email-linked"><img src={linkedIn} width = "50"></img></a>
            <a href="https://github.com/wgallagher44/" className="email-git"> <img src = {gitImage} width = "50"></img></a>

           </div>
           <div className="email-contact">willgallagher0702@gmail.com/ 717-209-1084</div> 
           <form ref ={form} onSubmit = {sendEmail}>
            <div className="email-section">

            <div className="email-info">
            <input type="text" className="email-name" placeholder="Your Name" name="name" id = "name"></input>
            <input type="text" className="email-subject" placeholder="Subject" name="subject" id = "subject"></input>
            </div>
            <textarea type="text" className="email-message" placeholder="Message" name="message" id = "message"></textarea>
           </div>
            
          <input type="submit" className="email-send" value="Send" />


           </form>
           

        </section>
    );
}
export default Email;