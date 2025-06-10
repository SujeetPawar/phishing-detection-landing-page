import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const AboutSection = styled.section`
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

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin: 0 auto;
`;

const TeamMember = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const MemberImage = styled.div`
  height: 250px;
  background-color: #4b0082;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 5rem;
  text-transform: uppercase;
`;

const MemberInfo = styled.div`
  padding: 20px;
  text-align: center;
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const MemberRole = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 15px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
`;

const SocialIcon = styled.a`
  color: #4b0082;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    color: #6a11cb;
    transform: translateY(-3px);
  }
`;

const teamMembers = [
  {
    name: "Sujeet Pawar",
    role: "Team Lead & Developer",
    initial: "SP",
  },
  {
    name: "Shravani Pawar",
    role: "ML Developer",
    initial: "SP",
  },
  {
    name: "Siya Patil",
    role: "Frontend Developer",
    initial: "SP",
  },
  {
    name: "Abhishek Sawant",
    role: "IT Support",
    initial: "AS",
  },
];

const About = () => {
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
    <AboutSection id="about" ref={ref}>
      <Container>
        <SectionTitle
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Meet Our Team
        </SectionTitle>
        
        <TeamContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {teamMembers.map((member, index) => (
            <TeamMember key={index} variants={itemVariants}>
              <MemberImage>{member.initial}</MemberImage>
              <MemberInfo>
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
              </MemberInfo>
            </TeamMember>
          ))}
        </TeamContainer>
      </Container>
    </AboutSection>
  );
};

export default About;

