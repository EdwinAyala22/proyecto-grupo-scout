import React from 'react'
import './footer.css'
import LogoBlanco from '../../assets/images/LogoGsBlanco1.png'
import { FaYoutube } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'


const FooterPage = () => {
  return (
    <>
    <footer className="pie-pagina">
        <div className="grupo-1">
            <div className="box">
                <figure>
                    <a href="">
                        <img src={LogoBlanco} alt="" />
                    </a>
                </figure>
            </div>
            <div className="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>Un grupo de adultos deseando proporcionar a la ciudad un grupo Scout nuevo, 
                    dinámico y como otra alternativa a los grupos ya existentes, decidieron en 
                    una tarde formar el grupo Scout León Blanco.</p>
                
            </div>
            <div className="box">
                <h2>SÍGUENOS</h2>
                <div className="red-social">
                    <a href="#" className="fa fa-facebook"><FaFacebookF/></a>
                    <a href="#" className="fa fa-instagram"><FaInstagram/></a>
                    <a href="#" className="fa fa-twitter"><FaTwitter/></a>
                    <a href="#" className="fa fa-youtube"><FaYoutube/></a>
                </div>
            </div>
        </div>
        <div className="grupo-2">
            <small> © 2022 <b>Grupo Scout</b> - Todos los Derechos Reservados</small>
        </div>
    </footer>
    </>
  )
}

export default FooterPage