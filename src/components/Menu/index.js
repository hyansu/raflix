import React from 'react'
import "./Menu.css"
import { Link } from 'react-router-dom'
import RaflixLogo from '../../assets/image/raflix-logo.png'
//import ButtonLink from './components/ButtonLink'
import Button from '../Button'

export default function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={RaflixLogo} alt="Raflix Logo"/>
            </Link>

            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo vídeo
            </Button>
            
        </nav>
    )
}