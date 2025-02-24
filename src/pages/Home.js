
import React from 'react';
//import images
import WomanImg from '../img/home/woman.png';
//import link
import { Link } from 'react-router-dom';

const Home = () => {
  //definindo cor de fundo
  return( 
    <section className='section'>
      <div className='container mx-auto h-full relative'>
        {/* text e img wrapper */}
        <div className='flex flex-col justify-center'>
          {/* text */}
          <div className='w-full pt-36 pb-64 lg:pt-0
          lg:w-auto z-10  lg:translate-x-2 lg:absolute flex flex-col
          justify-center items-center lg:items-start'>
            <h1 className='h1'>
              photographer<br /> & film maker
            </h1>
            <p className='text-[26px] lg:text-[36px]
            font-primary mb-4 lg:mb-12'>
              Los Angeles, USA
            </p>
            <Link to={'/contact'} className='btn mb-[30px]'>
            hire me
            </Link>
          </div>
          {/* image */}   
          <div className='flex justify-end max-h-96
          lg:max-h-max'>
            <div className='relative lg:-right-10
             overflow-hidden '>
              <img src={ WomanImg} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;