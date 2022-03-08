//Import dependencies
import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
//Import pages
import { Home } from '@pages/Home';
import { NotFound } from '@pages/NotFound';
import { Pruebas } from '@pages/Pruebas';
//Import styles
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element= {<Home />}/>
        <Route exact path="/home" element= {<Home />}/>
        <Route exact path="/pruebas" element= {<Pruebas />}/>
        <Route path="*" element={< NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export {App};