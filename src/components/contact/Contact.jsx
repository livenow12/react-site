import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiTelegramLine} from 'react-icons/ri'
import {BsInstagram} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

 
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>dilwodCoder@gmail.com</h5>
            <a href=" ">Send a message</a>
            
          </article>

          <article className="contact__option">
            <RiTelegramLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Telegram</h5>
            <a href=" ">Send a message</a>
            
          </article>

          <article className="contact__option">
            < BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Example.com</h5>
            <a href=" ">Send a message</a>
            
          </article>

        </div>

        <form action="">
          <input type="text"  name='name' placeholder='Your Full Name' required/>
          <input type="email"  name='email' placeholder='Your Email' required/>
          <textarea name="message"  placeholder='Your Message' required rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact