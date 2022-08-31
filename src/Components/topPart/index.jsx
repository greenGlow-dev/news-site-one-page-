import React from 'react'
import './top.css'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

export const TopBar = () => {
  return (
    <div className='Container-TopBar'>

      <div className='Container-TopBar-top'>


        <div className='TopBar-top'>

          <p>juma, 28-avgust ,2022</p>
          <p><a>Kirish/Azo bo'lish</a></p>
          <p>Obuna 2022</p>

        </div>

        <div className='TopBar-top-icons'>

        <label className="switch">
            <input type="checkbox"/>
              <span className="slider round"></span>
          </label>

          <FaFacebookF className='Icons' />
          <FaInstagram className='Icons' />
          <FaYoutube className='Icons' />

        
        </div>

      </div>

      <div className='Container-TopBar-bottom'>

        <div className='TopBar-bottom'>

          <h1>O'zbekiston matbuoti</h1>

        </div>
        <div className='TopBar-bottom'>

          <div className='Banner'>
            <span>Reklama banner</span>
            <p> jurnal va saytga reklama beruvchilar uchun joy</p>
          </div>

        </div>

      </div>

    </div>
  )
}
export default TopBar
