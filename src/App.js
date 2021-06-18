import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/home.css'
import './assets/css/festival.css'
import './assets/css/pelicula.css'
import "./assets/css/usuario.css"

import { Switch, BrowserRouter, Route } from "react-router-dom"
import Home from "./views/home/Home"
import Festival from "./views/Festival/Festival"
import Pelicula from "./views/pelicula/Pelicula"
import Usuario from "./views/usuario/Usuario"

const App = () => (
    <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/teatro' component={Festival}/>
      <Route exact path='/pelicula' component={Pelicula}/>
      <Route exact path='/usuario' component={Usuario}/>
      </Switch>
    </BrowserRouter>
)

export default App