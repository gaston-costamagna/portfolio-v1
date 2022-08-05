import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs';


const Experience = () => {
  return (
    <section id='experience'>

      <h5>Mis habilidades</h5>
      <h2>Mi Experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experiencie__details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Intermedio</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experiencie__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermedio</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experiencie__details-icon'/>
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Experiencia</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experiencie__details-icon'/>
            <div>
            <h4>Boostrap</h4>
            <small className='text-light'>Experiencia</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experiencie__details-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Experiencia</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experiencie__details-icon'/>
            <div>
            <h4>Wordpress</h4>
            <small className='text-light'>Intermedio</small>
            </div>
            </article>
          </div>
        </div>

 {/*------------- Termine Front end -------------*/ }

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experiencie__details-icon'/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Intermedio</small>
            </div>
            </article>
            
            <article className='experience__details'>
            <BsPatchCheckFill className='experiencie__details-icon'/>
            <div>
            <h4>DER</h4>
            <small className='text-light'>Intermedio</small>
            </div>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill className='experiencie__details-icon'/>
            <div>
            <h4>Node JS</h4>
            <small className='text-light'>Experiencia</small>
            </div>
            </article>
        </div>
      </div>
    </div>
    </section>
  )
}


export default Experience