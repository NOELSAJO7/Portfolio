import'./contact.css';
import './fontawesomeicon.css';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,faLocationPin,faPhone} from '@fortawesome/free-solid-svg-icons';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact=()=>{

    const form = useRef();


    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'template_9a3b1av', form.current, '5ljl9ANCrM9BzaYg6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset();
    }


    document.title="Noel Saj|Contact me";


    
return(
    <>
    <form className="contactthrough" ref={form} onSubmit={sendEmail}>
        <div className='toptext'>Interested in working together ? Fill out the form below with some info about the project and i will get back to you as soon as possible. </div>
        <div className='fontawesomelogos'> 
        <div><FontAwesomeIcon icon={faLocationPin}className='reachicon' /><div className='label lbl'>NIT Srinagar</div></div>
        <div><FontAwesomeIcon icon={faPhone}className='reachicon'/><div className='label lbl'>6282545631</div></div>
        <div><FontAwesomeIcon icon={faEnvelope} className='reachicon'/><div className='label lbl'>noelsaj5@gmail.com</div></div>
        </div>

    <div className="fonmailaddress">
       <div className='detailmsg'>
       <div><div className='label'>Your Name</div>
          <input type="text"  name="name"/> 
       </div>
       <div><div className='label'>Mail</div>
          <input type="email" name='email'/> 
       </div>
       <div><div className='label'>Phone</div>
          <input type="number" name='phone'/> 
       </div>
   </div>
   <div className="message">
      <div className='label'>Message</div>
    <textarea name="message" id="" cols="30" rows="10" className='label'></textarea>
   </div>
   </div>
<Button className='label' type='submit'>Send Message</Button>
    </form>
</>
);
}

export default Contact;