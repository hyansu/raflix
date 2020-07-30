import React from 'react'
import "./Menu.css"
import RaflixLogo from '../../assets/image/raflix-logo.png'
import ButtonLink from './components/ButtonLink'

export default function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={RaflixLogo} alt="Raflix Logo"/>
            </a>

            <ButtonLink href="/" className="ButtonLink">
                Novo vídeo
            </ButtonLink>
            

        </nav>
    )
}