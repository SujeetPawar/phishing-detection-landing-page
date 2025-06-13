import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: white;
  padding: 60px 20px 30px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.div`
  margin-bottom: 20px;
  
  /* Override logo colors for footer */
  div {
    color: white;
  }
  span {
    color: white;
  }
`;

const FooterDescription = styled.p`
  color: #aaa;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 10px;
  
  a {
    color: #aaa;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: white;
      padding-left: 5px;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #6a11cb;
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid #333;
  color: #aaa;
  font-size: 0.9rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  padding: 12px 15px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: white;
  
  &::placeholder {
    color: #aaa;
  }
  
  &:focus {
    outline: none;
    background-color: #444;
  }
`;

const FormTextarea = styled.textarea`
  padding: 12px 15px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: white;
  min-height: 100px;
  resize: vertical;
  
  &::placeholder {
    color: #aaa;
  }
  
  &:focus {
    outline: none;
    background-color: #444;
  }
`;

const FormButton = styled.button`
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(106, 17, 203, 0.4);
  }
`;

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle form submission
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterLogo>
            <Logo />
          </FooterLogo>
          <FooterDescription>
            Phishing Detection Extension is a powerful browser extension that protects you from phishing attempts and online scams.
          </FooterDescription>
          <SocialLinks>
            <SocialIcon href="https://github.com/SujeetPawar/phishing-detection-extension" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="https://x.com/Sujeet1705" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="mailto:sujeet17052003@gmail.com">
              <FaEnvelope />
            </SocialIcon>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink><a href="#home">Home</a></FooterLink>
            <FooterLink><a href="#features">Features</a></FooterLink>
            <FooterLink><a href="#download">Download</a></FooterLink>
            <FooterLink><a href="#about">About Us</a></FooterLink>
          </FooterLinks>
        </FooterColumn>
        

      </FooterContent>
      
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} PhishGuard. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

