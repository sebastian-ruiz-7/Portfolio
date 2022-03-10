//Import dependencies
import React from 'react';
import {HashRouter,Route,Routes} from 'react-router-dom'
//Import pages
import { Home } from '@pages/Home';
import { AboutMe } from '../pages/AboutMe';
import { Projects } from '../pages/Projects';
import { Contact } from '../pages/Contact';
import { NotFound } from '@pages/NotFound';
import { Pruebas } from '@pages/Pruebas';
//Import Context
import { AppContext } from '@context/AppContext'
//Import Hooks
import { useInitialState } from '@hooks/useInitialState'
//Import styles
import './App.css'


const App = () => {

  const inititalState=useInitialState()
  return (
    <AppContext.Provider value={inititalState} >
        <Routes>
          <Route exact path="/" element= {<Home />}/>
          <Route exact path="/home" element= {<Home />}/>
          <Route exact path="/about-me" element= {<AboutMe />}/>
          <Route exact path="/projects" element= {<Projects />}/>
          <Route exact path="/contact" element= {<Contact />}/>
          <Route exact path="/pruebas" element= {<Pruebas />}/>
          <Route path="*" element={< NotFound />} />
        </Routes>
    </AppContext.Provider>
  );
};

export {App};