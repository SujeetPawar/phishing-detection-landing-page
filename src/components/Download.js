import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChrome, FaFirefox, FaEdge, FaDownload } from 'react-icons/fa';

const DownloadSection = styled.section`
  padding: 100px 20px;
  background-color: white;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 60px;
  color: #4b0082;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DownloadButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 50px;
  margin-bottom: 60px;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  border-radius: 50px;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

  svg {
    margin-right: 10px;
    font-size: 2rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 768px) {
    padding: 15px 30px;
    font-size: 1.2rem;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Step = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  max-width: 300px;
  margin: 0 auto;
  
  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const BrowsersContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  flex-wrap: wrap;
`;

const BrowserIcon = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #666;
  font-size: 1rem;
  
  svg {
    font-size: 3rem;
    margin-bottom: 10px;
    color: #4b0082;
  }
`;

const Download = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <DownloadSection id="download" ref={ref}>
      <Container>
        <SectionTitle
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Download Phishing Detection Extension
        </SectionTitle>
        
        <DownloadButton 
          href="https://chromewebstore.google.com/detail/phishing-detection-extens/nhmeihikaghmllmpofiobkjallekojgl?authuser=0&hl=en-GB"
          target="_blank"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload /> Add to Chrome
        </DownloadButton>
        
        <BrowsersContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <BrowserIcon as={motion.div} variants={itemVariants}>
            <FaChrome />
            <span>Chrome</span>
          </BrowserIcon>
        </BrowsersContainer>
        
        <StepsContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Step variants={itemVariants}>
            <StepNumber>1</StepNumber>
            <StepTitle>Download</StepTitle>
            <StepDescription>
              The download button will redirect you to the Chrome Web Store.
            </StepDescription>
          </Step>
          
          <Step variants={itemVariants}>
            <StepNumber>2</StepNumber>
            <StepTitle>Install</StepTitle>
            <StepDescription>
              Just click 'Add to Chrome' and it will be installed as an extension.
            </StepDescription>
          </Step>
          
          <Step variants={itemVariants}>
            <StepNumber>3</StepNumber>
            <StepTitle>Protect</StepTitle>
            <StepDescription>
              That's it! Phishing Detection Extension is now actively protecting you from phishing attempts while you browse.
            </StepDescription>
          </Step>
        </StepsContainer>
      </Container>
    </DownloadSection>
  );
};

export default Download;

