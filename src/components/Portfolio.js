import React from 'react';
import paint from '../assets/images/paint.jpg';
import women from '../assets/images/women.jpg';
import stretch from '../assets/images/stretch.jpg';
import girlsbike from '../assets/images/girlsbike.JPEG';

const Portfolio = () => {
  return (
    <div id='scroll-to-port'>
      <h2 id='port-intro'>Portfolio Projects</h2>
      <div className='allPorts'>
        <a
          href='https://creative-juices.fly.dev/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div id='creative-juiceslink'>
            <img id='paint' src={paint}></img>

            <div className='textone'>
              <div id='text-creative'>Creative Juices Website</div>
              <p id='portp'>Tech Stack</p>
              <p id='portp'>- Javascript</p>
              <p id='portp'>- React.js</p>
              <p id='portp'>- Vite</p>
              <p id='portp'>- Express</p>
              <p id='portp'>- PostgresSQL</p>
            </div>
          </div>
        </a>
        <a
          href='https://github.com/ahoath87/self-led-project01'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='checkout'>
            <div id='pelvic-link'>
              <img id='women' src={women}></img>
              <div className='textwo'>
                <div id='text-pelvic'>Pelvic Health Website</div>
                <p id='portp'>Tech Stack</p>
                <p id='portp'>- Javascript</p>
                <p id='portp'>- React.js</p>
                <p id='portp'>- Webpack</p>
                <p id='portp'>- Express</p>
                <p id='portp'>- PostgresSQL</p>
              </div>
            </div>
          </div>
        </a>
        <a
          href='https://creative-juices.fly.dev/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div id='girlsbikelink'>
            <img id='girlsbike' src={girlsbike}></img>

            <div className='textfour'>
              <div id='text-girlsbike'>Creative Juices Website</div>
              <p id='portp'>Tech Stack</p>
              <p id='portp'>- Javascript</p>
              <p id='portp'>- React.js</p>
              <p id='portp'>- Vite</p>
              <p id='portp'>- Express</p>
              <p id='portp'>- PostgresSQL</p>
            </div>
          </div>
        </a>
        <a
          href='https://github.com/ahoath87/FitnessTrackerBackend'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div id='fitness-link'>
            <img id='stretch' src={stretch}></img>
            <div className='textthree'>
              <div id='text-fitness'>Fitness Tracker Website</div>
              <p id='portp'>- Javascript</p>
              <p id='portp'>Tech Stack</p>
              <p id='portp'>- React.js</p>
              <p id='portp'>- Vite</p>
              <p id='portp'>- Express</p>
              <p id='portp'>- PostgresSQL</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
