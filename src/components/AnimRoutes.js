import React from 'react';
//importando as paginas
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

//importando as rotas rota e suas locação
import { Routes, Route, useLocation} from 'react-router-dom';
const AnimRoutes = () => {
  return ( 
    //Rotas das paginas
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
};

export default AnimRoutes;
