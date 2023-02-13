import react from 'react';
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
      <div id='testimonial-message'> This is the testimonials</div>
    </div>
  );
};

export default Testimonials;
