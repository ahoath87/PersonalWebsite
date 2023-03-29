import React from 'react';
import AshAIB from '../assets/images/AshAIB.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBicycle,
  faMountainSun,
  faEarthAmericas,
  faCakeCandles,
  faGraduationCap,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {
  return (
    <div id='about'>
      <img id='me' src={AshAIB}></img>
      <div id='me-info'>
        <div id='me-one'>
          <div id='title-me'>About</div>
          Prior to FullStack Academy, I practiced as a{' '}
          <span id='doctor'> Doctor of Physical Therapy</span> for 10 years.
          While I loved working with patients, I was truly driven by the
          complexity of solving interrelated issues among body systems as well
          as the impact my work had. This is what led me to seek out new ways to
          positively influence peoples lives through other mediums that have a
          larger outreach.
        </div>
        <div id='me-middle'>
          I discovered my immense interest in{' '}
          <span id='softwaredev'>Software Development, </span> where I found
          that I can combine my passion for teamwork, leadership, creativity and
          problem solving to have a potentially vast social and technological
          impact.
        </div>
        <div id='me-two'>
          I am currently writing <span id='javascript'> JavaScript </span>{' '}
          across the full stack for web applications and seeking out an
          opportunity to be apart of a collaborative community where I have the
          ability to contribute ideas, navigate complex challenges and learn
          from a diverse group of peers.
          <div>
            <ul id='aboutmelist'>
              <li>
                {' '}
                <FontAwesomeIcon icon={faCakeCandles} />
                &emsp; Birthday: 11.30.1987
              </li>
              <li>
                <FontAwesomeIcon icon={faBicycle} />
                &emsp; Interests: Soccer, Mountain Biking, Blue Grass
              </li>
              <li>
                <FontAwesomeIcon icon={faMountainSun} />
                &emsp; Location: Longmont, CO
              </li>
              <li>
                {' '}
                <FontAwesomeIcon icon={faGraduationCap} />
                &emsp; Degree: Doctorate{' '}
              </li>
              <li>
                {' '}
                <FontAwesomeIcon icon={faEarthAmericas} />
                &emsp; Nationality: USA{' '}
              </li>
              <li>
                {' '}
                <FontAwesomeIcon icon={faBriefcase} />
                &emsp; Employment: Open
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
