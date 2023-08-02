import "./Contact.css"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { BsGithub, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import NotificationOkay from "../../Components/Notification/NotificationOkay";
import NotificationError from "../../Components/Notification/NotificationError";
const Contact = ()=>{
    const control = useAnimation()
    const [ref, inView] = useInView()
    let visible = document.getElementById("container")
    let [viewBoolean, setViewBoolean] = useState(false)
    const [notification, setNotification] = useState("off")
    const [notificationError, setNotificationError] = useState("off")

  const form = useRef();



  const sendEmail = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
    if(email !=="" || subject !== "" || message !== ""){
    emailjs.sendForm('service_sdktioa', 'template_rfeoefx', form.current, 'yZIizqFPuunaW9Mpb')
      
    .then((result) => {
        
        
        setNotification("on")
        setTimeout(()=>{setNotification("off")}, 7000);   
        
           
      }, (error) => {
          console.log("erro");
          setNotificationError("on")
          setTimeout(()=>{setNotificationError("off")}, 7000);   
      });
    }};
  useEffect(() => {
    if (inView) {
        console.log(inView)
        visible.classList.add("show")
        setViewBoolean(true)
    } 
    else{
        
        if(viewBoolean){
            console.log("a")
            visible.classList.remove("show")
        }

    }
    
  }, [control, inView]);

    return(
        <section id="contact" ref={ref}>
            <NotificationError state={notificationError}></NotificationError>
            <NotificationOkay state={notification}></NotificationOkay>
            <div id="container" className="hidden" >
                <div className="contactInfo">
                    <div className="tittle">
                        <h2 >Contate-me</h2>
                    </div>
                  
                    <div className="info">
                        <div className="myInformation">
                        <div className="iconContainer">
                            <AiOutlineMail color="white" size={35}/>
                        </div>
                        <h4> guiqsassi@gmail.com </h4>
                        </div>
                        <div className="myInformation">
                        <div className="iconContainer">
                            <BsWhatsapp color="white" size={35}/>
                        </div>
                        <h4> +55 (48) 99108 - 5884 </h4>
                        </div>

                    </div>

                    <div className="linkBar">
                        <a href="https://www.linkedin.com/in/guiqsassi/" target="Blank">
                            <BsLinkedin className="icon" size={40}/>
                        </a>

                        <a href="https://github.com/guiqsassi" target="Blank">
                        <BsGithub  className="icon" size={40}/>
                        </a>
                        
                    </div>
                </div>
                <div className="emailForm">
                    <div className="formContainer">
                        <div className="subTittle">
                            <h2>Fale comigo 👇</h2>
                        </div>
                        <form ref={form} onSubmit={sendEmail}>
                        <div className="formInputs">
                            
                            <input id="email" name="user_email" type="text" className="email" placeholder="Your Email"/>
                            <input id="subject" name="user_subject" type="text" placeholder="Subject"/>
                            <textarea rows="6" id="message" name="message" type="text" placeholder="Message" className="message"/>
                           
                        </div>
                        <div className="button">
                            <button type="submit" value="Send" className="submitButton">Enviar</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
export default Contact