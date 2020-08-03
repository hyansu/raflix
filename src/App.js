import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './page/Home'
import CadastroVideo from './page/Cadastro/Video'
import CadastroCategoria from './page/Cadastro/Categoria'
import Erro404 from './page/Erro404'


export default function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/Cadastro/Video" component={CadastroVideo} exact />
                <Route path="/Cadastro/Categoria" component={CadastroCategoria} exact />
                <Route component={Erro404} />
            </Switch>
        </BrowserRouter>
    )
}