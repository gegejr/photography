import React, { useState } from 'react';
// Import icons
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
// Link
import { Link } from 'react-router-dom';
// Import motion
import { motion } from 'framer-motion';

// Variáveis de animação do menu
const menuVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9], // Correção dos valores do array ease
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="text-primary xl:hidden">
      {/* Botão para abrir o menu */}
      <div onClick={() => setOpenMenu(true)} className="text-3xl cursor-pointer">
        <CgMenuRight />
      </div>

      {/* Menu lateral */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? 'show' : 'hidden'} // Corrigido para garantir animação correta
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        {/* Ícone para fechar o menu */}
        <div
          onClick={() => setOpenMenu(false)} // Agora o clique fecha o menu
          className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>

        {/* Lista de links do menu */}
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
