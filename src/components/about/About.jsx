import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUser, FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Quien soy</h5>
      <h2>Sobre mí</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='imagen sobre mi' />

          </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experiencia</h5>
              <small>Trabaje en Innova Cad Vision como help desk, programador backend VBScript y SQLserver</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clientes</h5>
              <small>En Innova Cad Vision colaboré con empresas como Pampa Energia, Telefónica, TGS</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Proyectos</h5>
              <small>Diseños web en ReactJS y Wordpress, manipulacion de datos en SQL y tableros PowerBi </small>
            </article>
          </div>

          <p>
            Soy estudiante de 4to año de Ing. Industrial. Trabaje para Innova CadVision como soporte técnico nivel 1 y 2. 
            Además de realizar tareas de programación y de análisis funcional. 
            Actualmente desarrollo productos como programador y tableros en Power Bi para clientes freelance como <bold>TechnyxImport SRL</bold> y <bold>@ruta40alquilerxDía.</bold>
          </p>

          <a href='#contact' className='btn btn-primary'>Hablemos!</a>
        </div>
      </div>
    </section>
  )
}

export default About