import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaShieldAlt, FaBolt, FaRobot, FaBell, FaLock, FaCloudDownloadAlt } from 'react-icons/fa';

const FeaturesSection = styled.section`
  padding: 100px 20px;
  background-color: #f8f9fa;
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

const CarouselContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  
  .carousel .slide {
    background: transparent;
    padding: 20px;
  }
  
  .carousel .control-dots .dot {
    background: #4b0082;
  }
  
  .carousel .control-prev.control-arrow:before {
    border-right: 8px solid #4b0082;
  }
  
  .carousel .control-next.control-arrow:before {
    border-left: 8px solid #4b0082;
  }
`;

const FeatureCard = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  padding: 40px 30px;
  margin: 0 auto;
  max-width: 800px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 20px;
  color: #4b0082;
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #333;
`;

const FeatureDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto;
`;

const features = [
  {
    icon: <FaShieldAlt />,
    title: "Real-Time Protection",
    description: "PhishGuard actively monitors your browsing activity and provides instant alerts when you visit suspicious websites that might be phishing attempts."
  },
  {
    icon: <FaRobot />,
    title: "ML-Powered Detection",
    description: "Our extension uses advanced machine learning algorithms to identify phishing attempts with high accuracy, continuously improving over time."
  },
  {
    icon: <FaBolt />,
    title: "Lightweight Performance",
    description: "Designed to be fast and efficient, PhishGuard won't slow down your browsing experience while keeping you protected."
  },
  {
    icon: <FaLock />,
    title: "Privacy-Focused",
    description: "Your data stays on your device. PhishGuard doesn't collect or share your browsing history or personal information."
  },
  {
    icon: <FaCloudDownloadAlt />,
    title: "Regular Updates",
    description: "Receive automatic updates with the latest phishing detection patterns to stay protected against evolving threats."
  }
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <FeaturesSection id="features" ref={ref}>
      <SectionTitle
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        Key Features
      </SectionTitle>
      
      <CarouselContainer>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.1 * index }}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </Carousel>
      </CarouselContainer>
    </FeaturesSection>
  );
};

export default Features;

