import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReactJsAlert from 'reactjs-alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocation } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const SERVICE_ID = 'service_x7y01j7';
const TEMPLATE_ID = 'template_mfgc7sm';
const USER_ID = 'DSsXcxvAe0vDPksdQ';

export const ContactUs = () => {
  const [status, setStatus] = useState(false);
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        console.log(result.text);
        setStatus(true);
        setType('success');
        setTitle('Message has been sent!');
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div id='contactpage'>
      <div id='contact-other'>
        <p>Thanks for checking out my page!</p>
        <ul id='contacticons'>
          <li id='lione'>
            {' '}
            <FontAwesomeIcon icon={faEnvelope} />
            &emsp; ahoath87@gmail.com
          </li>
          <li>
            {' '}
            <a
              className='location-contact'
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.google.com/maps/d/viewer?mid=1xVv5pPmhJPyrIZN5eo1-akLRJE8&hl=en&ll=40.1750892712578%2C-105.16894322259816&z=12'
            >
              <FontAwesomeIcon icon={faLocation} />
              &emsp; Longmont, CO
            </a>
          </li>
          <li>
            {' '}
            <a
              className='contact-linkin'
              href='https://github.com/ahoath87'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faGithub} />
              &emsp; github.com/ahoath87
            </a>
          </li>
          <li>
            {' '}
            <a
              className='contact-linkin'
              href='https://www.linkedin.com/in/ashleyhoath/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon color='white' icon={faLinkedinIn} />
              &emsp; linkedin.com/in/ashleyhoath/
            </a>
          </li>
        </ul>
      </div>
      <div id='just-email'>
        <form className='emailform' ref={form} onSubmit={sendEmail}>
          <ReactJsAlert
            status={status} // true or false
            type={type} // success, warning, error, info
            title={title}
            quotes={true}
            quote='Thanks so much for reaching out!'
            Close={() => setStatus(false)}
          />
          <div id='envtext'>
            <FontAwesomeIcon icon={faEnvelope} size='3x' />
            &emsp; Get in touch
          </div>
          <input
            id='emailname'
            type='text'
            placeholder='Name'
            name='user_name'
          />

          <input
            id='emailuser'
            type='email'
            placeholder='Email'
            name='user_email'
          />

          <textarea id='emailmessage' placeholder='Message' name='message' />
          <input id='emailbutt' type='submit' value='Send' />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
