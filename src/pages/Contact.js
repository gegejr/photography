import React from 'react';
//import images
import WomanImg from '../img/contact/woman.png';
//import motion
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions';

const Contact = () => {
  //definindo cor de fundo
  return ( 
  <motion.section 
    initial={{opacity:0, y: '100%'}}
    animate={{opacity:1, y: 0}}
    exit={{opacity:0, y: '100%'}}
    transition={transition1}
    className='section bg-white'>
    <div className='container mx-auto h-full'>
      <div className='flex flex-col lg:flex-row h-full
      items-center justify-start pt-36 gap-x-8 text-center
      lg:text-left'>
        {/* text */}
        <motion.div 
          initial={{opacity:0, y: '100%'}}
          animate={{opacity:1, y: 0}}
          exit={{opacity:0, y: '100%'}}
          className='hidden lg:flex bg-[#eef7f9]
          absolute bottom-0 left-0 right-0 top-72 -z-10'
        ></motion.div>
        {/* text e from */}
        <div className='lg:flex-1 lg:pt-32 px-4'>
          <h1 className='h1'>Contate-me</h1>
          <p className='mb-12'>Eu adoraria transformar 
            seus momentos em memórias!
          </p>
          {/* form */}
          <form className='flex flex-col gap-y-4'>
            <div className='flex gap-x-10'>
              <input 
                className='outline-none border-b
                border-b-primary h-[60px] bg-transparent
                font-secondary w-full pl-13
                placeholder:text-[#757879]'
                type='text'
                placeholder='Seu nome'
                />
                <input 
                className='outline-none border-b
                border-b-primary h-[60px] bg-transparent
                font-secondary w-full pl-13
                placeholder:text-[#757879]'
                type='text'
                placeholder='Seu email'
                />
            </div>
            <input 
                className='outline-none border-b
                border-b-primary h-[60px] bg-transparent
                font-secondary w-full pl-13
                placeholder:text-[#757879]'
                type='text'
                placeholder='Sua mensagem'
                />
                <button className='btn mb-[30px] mx-auto
                lg:mx-0 self-start'>Enviar</button>
          </form>
        </div>
        {/* img */}
        <motion.div 
          initial={{opacity:0, y: '100%'}}
          animate={{opacity:1, y: 0}}
          exit={{opacity:0, y: '100%'}}
          transition={{transition: transition1, duration:
            1.5 }}
          className='lg:flex-1 '>
          <img src={WomanImg} alt=''/>
        </motion.div>
      </div>
    </div>
  </motion.section >
  );
};

export default Contact;
