import React from 'react';
// import images
import WomanImg from '../img/about/woman.png';
// import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions';

const About = () => {
  //definindo cor de fundo
  return (
  <motion.section 
        initial={{opacity:0, y: '100%'}}
        animate={{opacity:1, y: 0}}
        exit={{opacity:0, y: '100%'}}
        transition={transition1}
        className='section'>
    <div className='container mx-auto h-full relative'>
      {/* text & img wrapper */}
      <div className='flex flex-col lg:flex-row h-full
      items-center justify-center gap-x-24 text-center
      lg:text-left lg:pt-16'>
        {/*img */}
        <div className='flex-1 max-h-96 lg:max-h-max
        order-2 lg:order-none overflow-hidden'>
          <motion.img 
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              src={WomanImg} alt='' />
        </div>
        {/* text */}
        <motion.div 
            initial={{opacity:0, y: '-80%'}}
            animate={{opacity:1, y: 0}}
            exit={{opacity:0, y: '-80%'}}
            transition={transition1}
            className='flex-1 pt-36 pb-14 lg:pt-0
        lg:w-auto z-10 flex flex-col justify-center
        items-center lg:items-start'>
          <h1 className='h1'>Sobre mim</h1>
          <p className='mb-12 max-w-sm'>Sou apaixonada por gente, vida e
            movimento. Ávida por encontrar o
            real significado das coisas e a essência
            do que realmente importa.
            <br />
            <br />
            Vejo a fotografia como um meio para
            isso.
            <br />
            <br />
            Fotografa a 6 anos, cristã e louca por
            viagens
            <br />
            <br />
            Fotografar não é apenas minha
            profissão, é o meu estilo de vida.
          </p>
          <Link to={'/Portfolio'} className='btn'>Meus trabalhos</Link>
        </motion.div>
      </div>
    </div>
  </motion.section>
  );
};

export default About;
