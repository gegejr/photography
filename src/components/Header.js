import React from 'react';
//import components
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';

//import link
import { Link } from 'react-router-dom';

const Header = () => {
  return (
     
    <header className='fixed w-full px-[30px]
    lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex
    items-center'>
      <div className='flex fle-col lg:flex-row
      lg:items-center w-full justify-between'>
        {/*Logo*/}
        <Link to={'/'} className='max-w-[200px]'>
         
        </Link>          
        {/* nav - iniciando hidden - show on desktop mode */}
        <nav className='hidden lg:flex gap-x-12 font-extrabold '> {/* hidden lg:flex - Posiciona os itens e centraliza // gap-x-12 - Distancia entre os itens // font-semibold - Negrito */}
          <Link to={'/'} 
          className='text-[#000000] px-4 py-2 border border-blue-500/50 rounded-full hover:bg-blue-500/20 
           transition duration-700 ease-in-out' // O home muda de cor quando o mouse passa por cima
          >
            Inicio
          </Link>
          <Link to={'/about'} 
          className='text-[#000000] px-4 py-2 border border-blue-500/50 rounded-full hover:bg-blue-500/20 hover:text-primary 
          transition' // O about muda de cor quando o mouse passa por cima
          >
            Sobre
          </Link>
          <Link to={'/portfolio'} 
          className='text-[#000000] px-4 py-2 border border-blue-500/50 rounded-full hover:bg-blue-500/20 hover:text-primary 
          transition' // O portfolio muda de cor quando o mouse passa por cima
          >
            Portfolio
          </Link>
          <Link to={'/contact'} 
          className='text-[#000000] px-4 py-2 border border-blue-500/50 rounded-full hover:bg-blue-500/20 hover:text-primary 
          transition' // O contact muda de cor quando o mouse passa por cima
          >
            Contato
          </Link>
        </nav>
      </div>
        {/*Redes Socias */}
        <Socials />
        {/*Navegador para mobile */}
        <MobileNav />
    </header>
    ); // bg-pink-200 Definindo a cor do cabeçalho; fixed // fixando o elemento // w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center' //tamanho do espaço ( menu de navegação)
};

export default Header;
