import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaTelegram} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com"><BsLinkedin /></a>
        <a href="https://t.me/L1veNow" ><FaTelegram /></a>
        <a href="https://df059669@gmail.com" ><SiGmail /></a>
    </div>
  )
}

export default HeaderSocials