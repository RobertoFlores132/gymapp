import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './Contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ema7shr', 'template_x8kgw6u', form.current, '77ENNKVfp-fZUeZDz')
        .then((result) => {
            Swal.fire('Éxito', 'Mensaje enviado', 'success');
        }, (error) => {
            Swal.fire('Error', 'inténtalo más tarde', 'error');
        });
        e.target.reset();
    };
  
    return (
      <form className='contact' ref={form} onSubmit={sendEmail}>
            <h3>¡Contáctanos!</h3>
        <div className='form'>
                <p>Nombre completo*</p>
                <input className='name' type="text" name="user_name"/>
                <p>Correo*</p>
                <input className='email' type="email" name="user_email"/>
                <p>Asunto*</p>
                <input className='topic' type="text" />
                <p>Mensaje*</p>
                <textarea className='message' name="message" cols="35" rows="5"/> 
        </div>
        <button>Enviar</button>
      </form>
    );
  };

export default Contact;