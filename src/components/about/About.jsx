import React from 'react'
import './about.css'
import ME from '../../assets/fde.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'


const About = () => {
  return (
    <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>



        <div className="container about__container">
          <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="" />
              </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>

              <article className="about__card">
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>100+ Clients</small>
              </article>

              <article className="about__card">
                <AiOutlineFundProjectionScreen className='about__icon'/>
                <h5>Projects</h5>
                <small>12+ Copleted</small>
              </article>

            </div>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil deserunt esse quo molestiae. Vero molestias quo incidunt dolorem! 
              Sit dicta, architecto quia sapiente itaque ipsa delectus harum eveniet commodi error?
            </p>
            <a href="#contact" className='btn btn-primary'>Let`s Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About