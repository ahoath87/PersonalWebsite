import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGoogle,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

export default function SocialFollow() {
  return (
    <div id='social-container'>
      <div id='social-links'>
        <a href='https://github.com/ahoath87'>
          <FontAwesomeIcon
            className='github-social'
            icon={faGithub}
            color='black'
            size='2x'
          />
        </a>
        <a href='https://www.instagram.com/ahoath15/?hl=en'>
          <FontAwesomeIcon
            className='instagram-social'
            icon={faInstagram}
            size='2x'
            color='black'
          />
        </a>
        <a href='https://www.linkedin.com/in/ashleyhoath/'>
          <FontAwesomeIcon
            className='linkedIn-social'
            icon={faLinkedinIn}
            color='black'
            size='2x'
          />
        </a>
        <a href='mailto:ahoath87@gamil.com'>
          <FontAwesomeIcon
            className='google-social'
            icon={faGoogle}
            color='black'
            size='2x'
          />
        </a>
        <a href='mailto:ahoath87@gamil.com'>
          <FontAwesomeIcon
            className='facebook-social'
            icon={faFacebook}
            color='black'
            size='2x'
          />
        </a>
      </div>
    </div>
  );
}
