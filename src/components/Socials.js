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
            <ImFacebook className='text-xl bg-purple-100 text-white-900 w-6 h-6 flex justify-center items-center rounded-full mb-6 mx-auto'/>
          </a>
        </li>
        <li>
          <a href='http://www.twitter.com'
          target='_blank' >
            <ImTwitter className='text-xl bg-purple-100 text-white-900 w-6 h-6 flex justify-center items-center rounded-full mb-6 mx-auto'/>
          </a>
        </li>
        <li>
          <a href='http://www.pinterest.com'
          target='_blank'>
            <ImPinterest className='text-xl bg-purple-100 text-white-900 w-6 h-6 flex justify-center items-center rounded-full mb-6 mx-auto'/>
          </a>
        </li>
        <li>
          <a href='http://www.instagram.com'
          target='_blank'>
            <ImInstagram className='text-xl bg-purple-100 text-white-900 w-6 h-6 flex justify-center items-center rounded-full mb-6 mx-auto'/>
          </a>
        </li>
        <li>
          <a href='http://www.youtube.com'
          target='_blank'>
            <ImYoutube className='text-xl bg-purple-100 text-white-900 w-6 h-6 flex justify-center items-center rounded-full mb-6 mx-auto'/>
          </a>
        </li>
      </ul>
    </div> 
  );
};

export default Socials;
