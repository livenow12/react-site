import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaTelegram} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://t.me/L1veNow" target="_blank"><FaTelegram /></a>
        <a href="https://df059669@gmail.com" target="_blank"><SiGmail /></a>
    </div>
  )
}

export default HeaderSocials