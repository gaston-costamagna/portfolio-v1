import React from 'react';
import './footer.css';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>GASTON COSTAMAGNA</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Acerca de</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className='footer__socials'>
          <a href="https://linkedin.com/"><FaLinkedin/></a>
      </div> 

      <div className="footer__copyright">
        <small>&copy; Gaston Costamagna. Todos Los Derechos Reservados</small>
      </div>
    </footer>
  )
}

export default Footer