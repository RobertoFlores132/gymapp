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
        <div className='form'>
              <h3>¡Contáctanos!</h3>
                <p>Nombre completo*</p>
                <input
                  required
                  minLength={7}
                  maxLength={50}
                  placeholder='Jhon Duan'
                  autoComplete='none' 
                  className='name' 
                  type="text" 
                  name="user_name"/>
                <p>Correo*</p>
                <input
                  required
                  autoComplete='none' 
                  className='email' 
                  type="email" 
                  placeholder='examle@example.com'
                  name="user_email"/>
                <p>Asunto*</p>
                <input
                  required
                  placeholder='Membresia' 
                  autoComplete='none'
                  className='topic' 
                  type="text" 
                  name='topic'/>
                <p>Mensaje*</p>
                <textarea 
                  required
                  maxLength={100}
                  minLength={10}
                  placeholder='Tu mensaje máximo 100 caracteres'
                  autoComplete='none'
                  className='message' 
                  name="message" 
                  cols="35" 
                  rows="5"/> 
        </div>
        <button>Enviar</button>
      </form>
    );
  };

export default Contact;