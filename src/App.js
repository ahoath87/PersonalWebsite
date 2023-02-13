import React, { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Skills from './components/Skills';
import AboutMe from './components/About';
import NavBar from './components/Nav';
import mountain from './assets/images/realmountain.jpg';
import Portfolio from './components/Portfolio';
import ContactUs from './components/Contact';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className='App'>
      <div
        style={{
          backgroundImage: `url(${mountain})`,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <NavBar></NavBar>
        <Home></Home>
        <div>
          <AboutMe></AboutMe>
          <Skills></Skills>
          <Portfolio></Portfolio>
          <Testimonials></Testimonials>
          <ContactUs></ContactUs>
        </div>
      </div>
    </div>
  );
}

export default App;
