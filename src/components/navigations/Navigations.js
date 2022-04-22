import React from 'react'
import './navigations.css'
import LogoGsBlanco from '../../assets/images/logo-gs-blanco.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoLocationSharp } from 'react-icons/io5'
import LogoSinTxt from '../../assets/images/LOGOOO-SINTXT.png'

function Navigations() {
  return (
    <>
    {/* <nav>
        <input type="checkbox" id="check"/>
        <label for="check" classNameName="checkbtn">
            <GiHamburgerMenu />
        </label>
        <a href="#" classNameName="imagen">
          <img src={LogoGsBlanco} alt="" classNameName="l-cout"/>
        </a>
        <ul>
            <li><a href="#" classNameName="link_nav" id="active">Inicio</a></li>
            <li><a href="#" classNameName="link_nav">¿Quiénes Somos?</a></li>
            <li><a href="#" classNameName="link_nav">Actividades</a></li>
            <li><a href="#" classNameName="link_nav">Administración</a></li>
            <li><a href="#" classNameName="link_nav">Productos</a></li>
            <li><a href="#" classNameName="link_nav">Contacto</a></li>
            <li><a target="blank" href="https://goo.gl/maps/RESbGKx8sK6F4eVS8" classNameName="link_nav"><IoLocationSharp /></a></li>
        </ul>
    </nav> */}
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={LogoSinTxt} alt="" width="130" height="130" className="logo-nav"/>
                <span className="titulo-nav">Grupo Scout 662 León Blanco</span> 
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end"  id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">¿Quiénes somos?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Actividades</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Administración
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Iniciar Sesión</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="#">Registrarme</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="#">Miembros Scouts</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://goo.gl/maps/3xtKRSvRhEG4kThS8" target="blank"><IoLocationSharp/></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navigations