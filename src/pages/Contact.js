import React from 'react';
//import images
import WomanImg from '../img/contact/woman.png';

const Contact = () => {
  //definindo cor de fundo
  return ( 
  <section className='section bg-white'>
    <div className='container mx-auto h-full'>
      <div className='flex flex-col lg:flex-row h-full
      items-center justify-start pt-36 gap-x-8 text-center
      lg:text-left'>
        {/* text */}
        <div className='hidden lg:flex bg-[#eef7f9]
        absolute bottom-0 left-0 right-0 top-72 -z-10'></div>
        {/* text e from */}
        <div className='lg:flex-1 lg:pt-32 px-4'>
          <h1 className='h1'>Contact me</h1>
          <p className='mb-12'>I would love to get
            suggestions from you.
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
                placeholder='Your Name'
                />
                <input 
                className='outline-none border-b
                border-b-primary h-[60px] bg-transparent
                font-secondary w-full pl-13
                placeholder:text-[#757879]'
                type='text'
                placeholder='Your Email Address'
                />
            </div>
            <input 
                className='outline-none border-b
                border-b-primary h-[60px] bg-transparent
                font-secondary w-full pl-13
                placeholder:text-[#757879]'
                type='text'
                placeholder='Your message'
                />
                <button className='btn mb-[30px] mx-auto
                lg:mx-0 self-start'>Send it</button>
          </form>
        </div>
        {/* img */}
        <div className='lg:flex-1 '>
          <img src={WomanImg} alt=''/>
        </div>
      </div>
    </div>
  </section >
  );
};

export default Contact;
