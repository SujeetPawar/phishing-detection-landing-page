import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  position: relative;
  overflow: hidden;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 20px;
  background: linear-gradient(to right, #ffffff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 40px;
  max-width: 800px;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButton = styled(motion.a)`
  padding: 15px 30px;
  background-color: white;
  color: #6a11cb;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 768px) {
    padding: 12px 25px;
    font-size: 1rem;
  }
`;

const AnimatedBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;

const BackgroundCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <AnimatedBackground>
        {[...Array(5)].map((_, i) => (
          <BackgroundCircle
            key={i}
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: Math.random() * 10 + 10,
            }}
          />
        ))}
      </AnimatedBackground>
      <ContentWrapper>
        <HeroTitle
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Phishing Detection Extension: Smart Phishing Detection
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your shield against online phishing attempts. Protect yourself with our advanced AI-powered browser extension.
        </HeroSubtitle>
        <HeroButton
          href="#download"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Now
        </HeroButton>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero;

