import React from 'react';
import './header.css';
import CTA from './CTA';
import ME3 from '../../assets/ME3.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
  <header>
    <div className="container header__container">
    <h5>Hola yo soy</h5>
    <h1>Gastón Costamagna</h1>
    <h5 className="text-light"> Estudiante de Ingeniería Industrial </h5>
    <h5 className="text-light"> Soporte IT / Analista Funcional </h5>
    <h5 className="text-light"> Data Analytics / Data Scientist (En Curso) </h5>
    <h5 className="text-light"> Desarrollador Front </h5>
    <CTA />
    <HeaderSocials />

    <div className='me'>
      <img src={ME3} alt='me' />
    </div>
    
    <a href='#contact' className='scroll__down'>Ir Abajo</a>

    </div>
  </header>
  )
}

export default Header