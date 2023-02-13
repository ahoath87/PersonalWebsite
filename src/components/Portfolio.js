import React from 'react';
import paint from '../assets/images/paint.jpg';
import women from '../assets/images/women.jpg';
import stretch from '../assets/images/stretch.jpg';

const Portfolio = () => {
  return (
    <div>
      <div className='allPorts'>
        <a href='https://creative-juices.fly.dev/'>
          <div id='creative-juiceslink'>
            <img id='paint' src={paint}></img>

            <div className='textone'>
              <div id='text-creative'>Creative Juices Website</div>
            </div>
          </div>
        </a>
        <a href='https://github.com/ahoath87/self-led-project01'>
          <div className='checkout'>
            <h2>Portfolio Projects</h2>
            <div id='pelvic-link'>
              <img id='women' src={women}></img>
              <div className='textwo'>
                <div id='text-pelvic'>Pelvic Health Website</div>
              </div>
            </div>
          </div>
        </a>
        <a href='https://github.com/ahoath87/FitnessTrackerBackend'>
          <div id='fitness-link'>
            <img id='stretch' src={stretch}></img>
            <div className='textthree'>
              <div id='text-fitness'>Fitness Tracker Website</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
