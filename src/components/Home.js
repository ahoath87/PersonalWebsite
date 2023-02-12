import React from 'react';
import SocialFollow from './SocialFollow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFloppyDisk,
  faCircleArrowDown,
} from '@fortawesome/free-solid-svg-icons';
// import { gsap } from "gsap";

const Home = () => {
  return (
    <div>
      <div id='home'>
        <h1 id='myname'>Ashley Hoath</h1>
        <div>
          <p id='developer'>Software Developer</p>
          <p id='textone'>
            Striving to enhance a technological future by promoting positive
            social impact.
          </p>
          <p id='textwo'>
            In my free time you can find me on the soccer pitch, mountain biking
            with my girl squad or husband and getting into the backcountry both
            on skis and on foot (depending on the season) with my badass
            labrador Stella.
          </p>
          <SocialFollow></SocialFollow>
          <a href='https://drive.google.com/file/d/12v7lXmRzqhDs9Yr3zg_0xZcPdUC56wli/view?usp=sharing'>
            <button id='resume-button'>
              Resume &nbsp; <FontAwesomeIcon icon={faFloppyDisk} />
            </button>
          </a>
          <button id='contact-button'>Contact</button>
        </div>
      </div>
      <FontAwesomeIcon
        className='circle-arrow'
        icon={faCircleArrowDown}
        size='2xl'
      />
    </div>
  );
};

export default Home;
