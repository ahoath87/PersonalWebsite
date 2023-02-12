import React from 'react';
import ashleyski from '../assets/images/ashley.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBicycle,
  faMountainSun,
  faEarthAmericas,
  faCakeCandles,
  faGraduationCap,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import globe from '../assets/images/globe.png';

const AboutMe = () => {
  return (
    <div id='about'>
      <img id='me' src={ashleyski}></img>
      <div id='me-info'>
        <div id='me-one'>
          <div id='title-me'>About Me</div>
          Prior to FullStack Academy, I practiced as a{' '}
          <span id='doctor'> Doctor of physical therapy</span> for 9 years.
          While I loved working with patients, I was truly driven by the
          complexity of solving interrelated issues among body systems as well
          as the impact my work had. This is what led me to seek out new ways to
          influence peoples lives through other mediums that have a larger
          outreach.
        </div>
        <div id='me-middle'>
          I discovered my immense interest in{' '}
          <span id='softwaredev'>software development, </span> where I found
          that I can combine my passion for teamwork, leadership, creativity and
          problem solving to have a potentially vast social and technological
          impact.
        </div>
        <div id='me-two'>
          I am currently writing <span id='javascript'> Javascript </span>{' '}
          across the full stack for web applications and seeking out an
          opportunity to be apart of a collaborative community where I have the
          opportunity to contribute ideas, navigate complex challenges and learn
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
                &emsp; Interests: Soccer, Mountain Biking, BlueGrass
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
