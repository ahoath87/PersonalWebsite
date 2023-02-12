import { React, useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { navLinkId: 'Home', scrollToId: 'home' },
  { navLinkId: 'About', scrollToId: 'about' },
  { navLinkId: 'Skills', scrollToId: 'skills' },
  { navLinkId: 'Portfolio', scrollToId: 'allports' },
  // { navLinkId: "FAQ's", scrollToId: 'faqs-container' },
  // { navLinkId: 'Contact', scrollToId: 'contact-container' },
];

const NavLink = ({
  navLinkId,
  scrollToId,
  activeNavLinkId,
  setActiveNavLinkId,
}) => {
  const handleClick = () => {
    setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({
      behavior: 'smooth', // gives an ease-in-out effect to our scroll
    });
  };

  return (
    <span
      id={navLinkId}
      className={activeNavLinkId === navLinkId ? 'activeClass' : ''}
      onClick={handleClick}
    >
      {navLinkId}
    </span>
  );
};

const NavBar = () => {
  const [activeNavLinkId, setActiveNavLinkId] = useState('');

  return (
    <div id='navbar'>
      <nav id='links'>
        {navLinks.map(({ navLinkId, scrollToId }) => (
          <NavLink
            key={navLinkId}
            navLinkId={navLinkId}
            scrollToId={scrollToId}
            activeNavLinkId={activeNavLinkId}
            setActiveNavLinkId={setActiveNavLinkId}
          />
        ))}

        {/* <NavLink
          id='home'
          to='/'
        >
          Home
        </NavLink>
        <NavLink to='/'>About</NavLink>
        <NavLink to='/'>Services</NavLink>
        <NavLink to='/'>Testimonials</NavLink>
        <NavLink to='/'>FAQ's</NavLink>
        <NavLink to='/'>Contact</NavLink>
        <NavLink to='/'>Calendar</NavLink> */}
      </nav>
    </div>
  );
};

export default NavBar;
