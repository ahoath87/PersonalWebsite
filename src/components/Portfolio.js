import React from 'react';
import paint from '../assets/images/paint.jpg';
import girlmountain from '../assets/images/girlmountain.jpeg';
import women from '../assets/images/women.jpg';
import stretch from '../assets/images/stretch.jpg';
import bikinggirls from '../assets/images/bikinggirls.jpeg';
import { Link } from 'react-router-dom';
// import girlsbike from '../assets/images/girlsbike.JPEG';

const Portfolio = () => {
  const url = 'https://creative-juices.fly.dev/';
  const urlTwo = 'https://github.com/2211-Creative-Juices/Creative_Juices';
  const urlThree = 'https://github.com/ahoath87/self-led-project01';
  const urlFour = 'https://womens-gear-trade.herokuapp.com/';
  const urlFive = 'https://github.com/Womens-Gear-Trade/Womens-Gear-Trade';
  const urlSix = 'https://github.com/ahoath87/FitnessTrackerBackend';
  const urlSeven = 'https://github.com/ahoath87/BikeItSkiItCampItGiveIt';

  return (
    <div id='scroll-to-port'>
      <h2 id='port-intro'>Portfolio Projects</h2>
      <h4 id='hover'>Hover to see my work!</h4>
      <div className='allPorts'>
        {/* ************** holds first two **************** */}

        <div className='firsttwo-container'>
          {/* ************** Creative Juices Container **************** */}

          <div className='CJ-container'>
            <div id='creative-container'>
              <img id='paint' src={paint}></img>

              <div className='textone'>
                <div id='text-creative'>Creative Juices Website</div>
                <div>
                  <p>
                    An E-Commerce based website for a small paint and sip
                    business
                  </p>
                </div>
                <div className='portp'>
                  <p id='portp'> Javascript</p>
                  <p id='portp'> React.Js</p>
                  <p id='portp'> Vite</p>
                  <p id='portp'> Express.Js</p>
                  <p id='portp'> PostgreSQL</p>
                </div>
                <div className='portp-butt'>
                  <button
                    onClick={() => {
                      window.open(urlTwo);
                    }}
                    id='portp-butt'
                  >
                    GitHub
                  </button>
                  <button
                    onClick={() => {
                      window.open(url);
                    }}
                    id='portp-butt'
                  >
                    View Live
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ************** Pelvic Container **************** */}

          <div className='pelvic-container'>
            <div className='checkout'>
              <div id='pelvic-link'>
                <img id='women' src={women}></img>
                <div className='texttwo'>
                  <div id='text-pelvic'>Pelvic Health Website</div>
                  <div>
                    <p>
                      A website for Women and Non-binary individuals to find
                      resources for pelvic health
                    </p>
                  </div>
                  <div className='portp'>
                    <p id='portp'>Javascript</p>
                    <p id='portp'>React.js</p>
                    <p id='portp'>Webpack</p>
                    <p id='portp'>Express</p>
                    <p id='portp'>PostgreSQL</p>
                  </div>
                  <div className='portp-butt'>
                    <button
                      onClick={() => {
                        window.open(urlThree);
                      }}
                      id='portp-butt'
                    >
                      GitHub
                    </button>
                    {/* <button id='portp-butt'>View Live</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ************** hold second two **************** */}

        <div className='secondtwo-container'>
          {/* ************** Womens-gear Container **************** */}

          <div className='womensgear-container'>
            <div className='gear-container'>
              <img id='girl-img' src={girlmountain}></img>
              <div className='textfour'>
                <div id='text-gear'>Womens Gear Trade</div>
                <div>
                  <p>
                    Getting women into the outdoors through easy gear access and
                    connections
                  </p>
                </div>
                <div className='portp'>
                  <p id='portp'>Javascript</p>
                  <p id='portp'>React.js</p>
                  <p id='portp'>Node.Js</p>
                  <p id='portp'>Express</p>
                  <p id='portp'>PostgreSQL</p>
                </div>
                <div className='portp-butt'>
                  <button
                    onClick={() => {
                      window.open(urlFive);
                    }}
                    id='portp-butt'
                  >
                    GitHub
                  </button>
                  <button
                    onClick={() => {
                      window.open(urlFour);
                    }}
                    id='portp-butt'
                  >
                    View Live
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ************** Fitness Container **************** */}

          <div className='fitness-container'>
            <div className='fitness-link'>
              <img id='stretch' src={stretch}></img>
              <div className='textthree'>
                <div id='text-fitness'>Fitness Tracker Website</div>
                <div className='portp'>
                  <p id='portp'>Javascript</p>
                  <p id='portp'>React.js</p>
                  <p id='portp'>Vite</p>
                  <p id='portp'>Express</p>
                  <p id='portp'>PostgreSQL</p>
                </div>
                <div className='portp-butt'>
                  <button
                    onClick={() => {
                      window.open(urlSix);
                    }}
                    id='portp-butt'
                  >
                    GitHub
                  </button>
                  {/* <button
                    onClick={() => {
                      window.open(urlFour);
                    }}
                    id='portp-butt'
                  >
                    View Live
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ************** third Container **************** */}

        <div className='third-container'>
          {/* ************** Give It Container **************** */}

          <div className='giveit-container'>
            <div className='bikeitgiveit-container'>
              <img id='bikinggirls' src={bikinggirls}></img>

              <div className='textfive'>
                <div id='text-give'>BikeItSkiItCampItGiveIt</div>
                <div>
                  <p>
                    An interactive map, utilizing Geospatial capabilities and
                    Google Maps API to select favored outdoor locations and
                    recieve opportunities to give back
                  </p>
                </div>
                <div className='portp'>
                  <p id='portp'>Javascript</p>
                  <p id='portp'>React.js</p>
                  <p id='portp'>Node.Js</p>
                  <p id='portp'>Express</p>
                  <p id='portp'>PostGIS</p>
                </div>
                <div className='portp-butt'>
                  <button
                    onClick={() => {
                      window.open(urlSeven);
                    }}
                    id='portp-butt'
                  >
                    GitHub
                  </button>
                  {/* <button
                    onClick={() => {
                      window.open(urlFour);
                    }}
                    id='portp-butt'
                  >
                    View Live
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ************** closes third container **************** */}
      </div>
    </div>
  );
};

export default Portfolio;
