import React from 'react';
// import icons
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from 'react-icons/im';
const Socials = () => {
  return (
    <div className='hidden xl:flex ml-24 '> {/*  */}
      <ul className='flex gap-x-4'>
        <li>
          <a href='http://www.facebook.com'
          target='_blank' >
            <ImFacebook className='text-xl bg-white-100 text-white-900 w-6 h-6 flex justify-center items-center rounded-full mb-6 mx-auto'/>
          </a>
        </li>
        <li>
          <a href='http://www.pinterest.com'
          target='_blank'>
            <ImPinterest className='text-xl bg-white-100 text-white-900 w-6 h-6 flex justify-center items-center rounded-full mb-6 mx-auto'/>
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/eloperfeitoph?igsh=cmNzNjdqZWV4a2ll'
          target='_blank'>
            <ImInstagram className='text-xl bg-white-100 text-white-900 w-6 h-6 flex justify-center items-center rounded-full mb-6 mx-auto'/>
          </a>
        </li>
      </ul>
    </div> 
  );
};

export default Socials;
