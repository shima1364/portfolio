import React from 'react';
import {faBars} from '@fortawesome/fontawesome-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Header.css'





export default function Header() {
  return (
    <div>
      <div className='header-container'>
        <div className='header-parent'>
          <div className='header-hamburger'>
          <FontAwesomeIcon className='header-hamburger-bars' icon={faBars}/>
          </div>
          <div className={showHeaderOption
          ? 'header-option show-hambergur-option'
        :'header-option'}></div>
        </div>
      </div>
    </div>
  )
}
