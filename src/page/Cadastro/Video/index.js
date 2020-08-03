import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

export default function Video(){

    return(

        <PageDefault>

            <h1>Cadastro de Vídeo</h1>

            <Link to="/Cadastro/Categoria">
                Cadastrar Categoria
            </Link>

        </PageDefault>

    )

}