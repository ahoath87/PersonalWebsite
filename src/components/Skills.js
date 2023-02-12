import React from 'react';

const Skills = () => {
  return (
    <div id='skills'>
      <p id='skills-title'>Skills</p>
      <div>
        <p id='frontend'>Frontend Development</p>
        <p>HTML</p>
        <div className='skills-container'>
          <div className='skills-html'></div>
        </div>
        <p>Javascript</p>
        <div className='skills-container'>
          <div className='skills-javascript'></div>
        </div>
        <p>React</p>
        <div className='skills-container'>
          <div className='skills-react'></div>
        </div>
      </div>
      <div>
        <p id='backend'>Backend development</p>
        <p>MySQL</p>
        <div className='skills-container'>
          <div className='skills-sql'></div>
        </div>
        <p>Express</p>
        <div className='skills-container'>
          <div className='skills-express'></div>
        </div>
        <p>Node.js</p>
        <div className='skills-container'>
          <div className='skills-node'></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
