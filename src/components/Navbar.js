import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  background-color: #ffffff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background-color: #ffffff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    padding: 20px 0;
  }
`;

const NavLink = styled.a`
  color: #333;
  margin-left: 30px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: #4b0082;
  }

  @media screen and (max-width: 768px) {
    margin: 15px 0;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav style={{ backgroundColor: scrolled ? '#ffffff' : 'transparent' }}>
      <Logo />
      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavLinks isOpen={isOpen}>
        <NavLink href="#features">Features</NavLink>
        <NavLink href="#download">Download Now</NavLink>
        <NavLink href="#about">About</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

