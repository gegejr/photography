import React from 'react';
// import components
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes'; //IMportando dados do arquivo AnimRoutes.js
//import router
import { BrowserRouter as Router } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
 
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
  );
  // Tudo que está dentro desse return ira retornar o conteudo no nosso site... 

};

export default App;
