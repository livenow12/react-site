import React from 'react'
import './services.css'
import {BsCheck2All} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="service">
      <h5>I Offer to You</h5>
      <h2>Services</h2>


      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Desktop Programms</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2All  className='service__list-icon'/>
              <p>I will create you Desktop Proggramms to your company</p>
            </li>

            <li>
              <BsCheck2All  className='service__list-icon'/>
              <p>Farmacy Desktop Programms</p>
            </li>

            <li>
              <BsCheck2All  className='service__list-icon'/>
              <p>School Programms</p>
            </li>
          </ul>

          
        </article>

        <article className="service">
            <div className="service__head">
              <h3>AI</h3>
            </div>
            <ul className="service__list">
              <li>
                <BsCheck2All  className='service__list-icon'/>
                <p>I made Online-Attendance programm to my University</p>
              </li>

              <li>
                <BsCheck2All  className='service__list-icon'/>
                <p>Robots</p>
              </li>

              <li>
                <BsCheck2All  className='service__list-icon'/>
                <p>Recording with Open CV</p>
              </li>

              <li>
                <BsCheck2All  className='service__list-icon'/>
                <p>Others</p>
              </li>
            </ul>

            
        </article>

        <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <BsCheck2All  className='service__list-icon'/>
                <p>Web sites</p>
              </li>

              <li>
                <BsCheck2All  className='service__list-icon'/>
                <p>Work with DataBases</p>
              </li>

              <li>
                <BsCheck2All  className='service__list-icon'/>
                <p>Create interactive Web pages</p>
              </li>
            </ul>

          
        </article>


      </div>
    </section>
  )
}

export default Services