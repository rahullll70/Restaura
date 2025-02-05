import React from 'react';
import { SOCIAL_MEDIA_LINKS } from '../constants';

const Footer = () => {
  return (
    <div className='mb-8 mt-20 '>
      <div className='flex items-center justify-center gap-8 '>
        {SOCIAL_MEDIA_LINKS.map((links, index) => (
          <a
            key={index}
            href={links.href}
            target='_blank'
            rel='noopener noreferrer'
          >
            {links.icon}
          </a>
        ))}
      </div>
      <p className='mt-8 text-center tracking-tighter text-neutral-500'>
        &copy;restaura. All right reserved.
      </p>
    </div>
  );
};

export default Footer;
