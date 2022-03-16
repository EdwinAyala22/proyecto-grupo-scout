import React from 'react'
import './navigations.css'
import LogoGsBlanco from '../../assets/images/logo-gs-blanco.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoLocationSharp } from 'react-icons/io5'


function Navigations() {
  return (
    <>
    <nav>
        <input type="checkbox" id="check"/>
        <label for="check" className="checkbtn">
            <GiHamburgerMenu />
        </label>
        <a href="#" className="imagen">
          <img src={LogoGsBlanco} alt="" className="l-cout"/>
        </a>
        <ul>
            <li><a href="#" className="link_nav" id="active">Inicio</a></li>
            <li><a href="#" className="link_nav">¿Quiénes Somos?</a></li>
            <li><a href="#" className="link_nav">Actividades</a></li>
            <li><a href="#" className="link_nav">Administración</a></li>
            <li><a href="#" className="link_nav">Productos</a></li>
            <li><a href="#" className="link_nav">Contacto</a></li>
            <li><a target="blank" href="https://goo.gl/maps/RESbGKx8sK6F4eVS8" className="link_nav"><IoLocationSharp /></a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navigations