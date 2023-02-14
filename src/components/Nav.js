import { React, useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { navLinkId: 'Home', scrollToId: 'home' },
  { navLinkId: 'About', scrollToId: 'about' },
  { navLinkId: 'Skills', scrollToId: 'skills' },
  { navLinkId: 'Portfolio', scrollToId: 'scroll-to-port' },
  { navLinkId: 'Contact', scrollToId: 'contactpage' },
  // { navLinkId: "FAQ's", scrollToId: 'faqs-container' },
];

export const NavLink = ({
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
      </nav>
    </div>
  );
};

export default NavBar;
