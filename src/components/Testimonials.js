import React from 'react';
import './testimonials.css';
import fruita from '../assets/images/fruita1.jpg';

const Testimonials = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${fruita})`,
        backgroundRepeat: 'no-repeat',
      }}
      id='testimonial-container'
    >
      <div id='quote-box'>
        <div id='quote'>
          <p>"We shall not cease from exploring</p>
          <p>And the end of all our exploring</p>
          <p>Will be to arrive where we started</p>
          <p>And know the place for the first time"</p>
          <p> ~ T.S. Elliot</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
