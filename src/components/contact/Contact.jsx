import React from 'react'
import './contact.css'
import { MdOutlineEmail} from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jgj9gyb', 'template_3r1zjnb', form.current, 'PhEWoQckODU_7Hq78')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h3>Contactame</h3>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Gaston.Costamagna@gmail.com</h5>
            <a href="mailto:gaston.costamagna@gmail.com">Enviar mensaje</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+54 (2942) 527440</h5>
            <a href='https://wa.me/5492942527440'>Enviar mensaje</a>
          </article>
          
        </div>
        {/* Termina contactos */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Tu Nombre' required />
          <input type='email' name='email' placeholder='Tu Email' required />
          <textarea name="message"  rows="10" placeholder='Tu Mensaje' required></textarea>
        <button type='submit' className='btn btn-primary'> Enviar Mensaje </button>
        </form>
      </div>
    </section>
  )
}

export default Contact