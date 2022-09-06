import React from 'react';
import {NavLink} from 'react-router-dom';
import wordmark from '../../assets/wordmark.svg'
import resume from '../../assets/resume-lupepaniagua.pdf'
import './header.css'

export default function Header() {
  return (
    <div className='headerContainer'>
        <img src={wordmark} />
        <div id='navBar'>
            <NavLink to='/' className={({ isActive }) => (isActive ? "activePage" : "inactivePage")}>
                home
            </NavLink>
            <NavLink to='/work' className={({ isActive }) => (isActive ? "activePage" : "inactivePage")}>
                work
            </NavLink>
            <NavLink to='/misc' className={({ isActive }) => (isActive ? "activePage" : "inactivePage")}>
                misc
            </NavLink>
            <NavLink to='/about' className={({ isActive }) => (isActive ? "activePage" : "inactivePage")}>
                about
            </NavLink>
            <a href={resume} className='inactivePage' target='_blank'>
                resume
            </a>
        </div>
    </div>
  )
}
