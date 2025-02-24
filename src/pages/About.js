import React from 'react';
// import images
import WomanImg from '../img/about/woman.png';
// import link
import { Link } from 'react-router-dom';

const About = () => {
  //definindo cor de fundo
  return (
  <section className='section'>
    <div className='container mx-auto h-full relative'>
      {/* text & img wrapper */}
      <div className='flex flex-col lg:flex-row h-full
      items-center justify-center gap-x-24 text-center
      lg:text-left lg:pt-16'>
        {/*img */}
        <div className='flex-1 max-h-96 lg:max-h-max
        order-2 lg:order-none overflow-hidden'>
          <img src={WomanImg} alt=''/>
        </div>
        {/* text */}
        <div className='flex-1 pt-36 pb-14 lg:pt-0
        lg:w-auto z-10 flex flex-col justify-center
        items-center lg:items-start'>
          <h1 className='h1'>About me</h1>
          <p className='mb-12 max-w-sm'>Lorem ipsum dolor sit amet consascxt xaknsd
            askfnc lajsldml oxkop kc asndkn pásdf mapnf 
            labngflk mp paosnf jpom,
          <br />
          <br />
          0lkapo lkgnp npn pk
          ladnhgk angpnpoangoapnjghop naponpvpiahniogna
          </p>
          <Link to={'/Portfolio'} className='btn'>View My York</Link>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
