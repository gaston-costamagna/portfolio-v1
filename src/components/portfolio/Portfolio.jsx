import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolioPizza.jpg'
import IMG2 from '../../assets/portfoliobanco.jpg'
import IMG3 from '../../assets/portfoliorealstate.jpg'
import IMG4 from '../../assets/portfoliossn.jpg'

//Acordarse de cambiar imagenes de portfolio

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Webpage Restaurant Pizza',
    github: 'https://github.com/gaston-costamagna/pizza-website-v1',
    demo:'https://relaxed-crepe-0db548.netlify.app',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Webpage Virtual Bank',
    github: 'https://github.com/gaston-costamagna/virtual-bank',
    demo:'https://beautiful-banoffee-de3072.netlify.app',
  },
  {
    id: 3,
    image: IMG3,
    title: 'WebPage Venta de Propiedades',
    github: 'https://github.com/gaston-costamagna/real-state',
    demo:'https://extraordinary-torte-1c9f22.netlify.app',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Tablero Comision Nacional de Seguros',
    github: '#',
    demo:'https://dribbble.com/shots/18969853-Tablero-Power-Bi-Presentaci-n-a-SSN',
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> Mis trabajos recientes </h5>
      <h2> Portfolio </h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3> {title} </h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
              </article>
            )
          })
        }



      </div>
    </section>
  )
}

export default Portfolio