import React from 'react';
import Skills from './Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJs,
  faReact,
  faCss3Alt,
  faHtml5,
  faGitAlt,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faTerminal } from '@fortawesome/free-solid-svg-icons';
import postgres from '../assets/images/postgres.png';
import expressJS from '../assets/images/expressJS.png';
import CSharp from '../assets/images/CSharp.png';
import responsive from '../assets/images/responsive.png';

const SkillsTwo = () => {
  return (
    <div id='skills'>
      <div className='skills-table'>
        <FontAwesomeIcon icon={faNodeJs} size='2xl' color='white' fade />
        <p>Node.JS</p>
      </div>
      <div className='skills-table'>
        <FontAwesomeIcon icon={faJs} size='2xl' color='white' fade />
        <p>JavaScript</p>
      </div>
      <div className='skills-table'>
        <FontAwesomeIcon icon={faReact} size='2xl' color='white' fade />
        <p>React.Js</p>
      </div>
      <div className='skills-table'>
        <FontAwesomeIcon icon={faCss3Alt} size='2xl' color='white' fade />
        <p>CSS</p>
      </div>
      <div className='skills-table'>
        <FontAwesomeIcon icon={faHtml5} size='2xl' color='white' fade />
        <p>HTML</p>
      </div>
      <div className='skills-table'>
        <FontAwesomeIcon icon={faDatabase} size='2xl' color='white' fade />
        <p>Restful APIs</p>
      </div>
      <div className='skills-table'>
        <a href='https://icons8.com/icons/set/postgres'>
          <img id='icon' src={postgres}></img>
        </a>
        <p>PostgreSQL</p>
      </div>
      <div className='skills-table'>
        <a href='https://icons8.com/icons/set/express-js'>
          <img id='icon' src={expressJS}></img>
        </a>
        <p>Express.JS</p>
      </div>
      <div className='skills-table'>
        <FontAwesomeIcon icon={faTerminal} size='2xl' color='white' fade />
        <p>Command Line</p>
      </div>
      <div className='skills-table'>
        <a href='https://icons8.com/icons/set/C-'>
          <img id='icon' src={CSharp}></img>
        </a>
        <p>C Sharp</p>
      </div>
      <div className='skills-table'>
        <a href='https://icons8.com/icons/set/responsive-design'>
          <img id='icon' src={responsive}></img>
        </a>
        <p>Responsive Design</p>
      </div>
      <div className='skills-table'>
        <FontAwesomeIcon icon={faGitAlt} size='2xl' color='white' fade />
        <p>Git Workflow</p>
      </div>
    </div>
  );
};

export default SkillsTwo;
