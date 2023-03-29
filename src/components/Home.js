import React from 'react';

import SocialFollow from './SocialFollow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFloppyDisk,
  faCircleArrowDown,
} from '@fortawesome/free-solid-svg-icons';
// import { gsap } from "gsap";

const Home = () => {
  const handleClickScroll = () => {
    const element = document.getElementById('contactpage');
    if (element) {
      //  Will scroll smoothly to the bottom of the home page
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id='scrollhome'>
      <div id='home'>
        <h1 id='myname'>Ashley Hoath</h1>
        <div>
          <div id='developer'>
            Software Developer <br />
          </div>
          <p id='textone'>
            Striving to enhance a technological future by promoting positive
            social impact
          </p>
          <p id='textwo'>
            In my free time you can find me on the soccer pitch, mountain biking
            or navigating my way through the Colorado backcountry
          </p>
          <SocialFollow></SocialFollow>
          <a
            href='https://drive.google.com/file/d/1Jtcc01emrzne-3fldAu-qgE-5W1yJ2Pg/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button id='resume-button'>
              Resume &nbsp; <FontAwesomeIcon icon={faFloppyDisk} />
            </button>
          </a>
          <button onClick={handleClickScroll} id='contact-button'>
            Contact
          </button>
        </div>
      </div>

      <FontAwesomeIcon
        className='circle-arrow'
        icon={faCircleArrowDown}
        size='2xl'
        onClick={handleClickScroll}
      />

      <div id='photoby'>
        Photo by{' '}
        <a
          id='attribute'
          href='https://unsplash.com/@andrewgloor?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
        >
          Andrew Gloor
        </a>{' '}
        on{' '}
        <a
          id='attribute'
          href='https://unsplash.com/photos/I1RZSDvvStY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
        >
          Unsplash
        </a>
      </div>
    </div>
  );
};

export default Home;
