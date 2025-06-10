import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #4b0082;
`;

const IconWrapper = styled.span`
  margin-right: 10px;
  font-size: 1.8rem;
  color: #4b0082;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <IconWrapper>
        <img src="/logo.png" alt="Logo"  />
      </IconWrapper>
      Phishing Detection Extension 
    </LogoContainer>
  );
};

export default Logo;

