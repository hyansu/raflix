import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

export default function Categoria(){

    return(

        <PageDefault>

            <h1>Cadastro de Categoria</h1>

            <Link to="/">
                Ir pra Home
            </Link>

        </PageDefault>

    )

}