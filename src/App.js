import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './page/Home'
import CadastroVideo from './page/Cadastro/Video'
import Erro404 from './page/Erro404'


export default function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/cadastro/video" component={CadastroVideo} exact />
                <Route component={Erro404} />
            </Switch>
        </BrowserRouter>
    )
}