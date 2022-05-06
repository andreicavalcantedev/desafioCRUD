import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';


//CSS
import './global.css';

//Pages
import { Home } from './Pages/Home/home';
import { Usuario } from './Pages/Usuario/usuario'
import { Filmes } from './Pages/Filmes/filmes';
import { Genero } from './Pages/Genero/genero';

const Rotas = () =>{

  return(
      <BrowserRouter>
          <Routes>
              <Route element={<Home/>} path="/"/>
              <Route element={<Usuario/>} path="/Usuario"/>
              <Route element={<Filmes/>} path="/Filmes"/>
              <Route element={<Genero/>} path="/Genero"/>
          </Routes>
      </BrowserRouter>
  );

}

ReactDOM.render(<Rotas/> , document.getElementById('root'));