import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import About from './components/About';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #ffffff;
    color: #333;
    line-height: 1.6;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <About />
      <Footer />
    </>
  );
}

export default App;
