import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #4b0082;
`;

const IconWrapper = styled.span`
  margin-right: 10px;
  color: #4b0082;
  display: flex;
  align-items: center;
`;

const LogoLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoLink href="/">
        <IconWrapper>
          <img src="/logo.png" alt="Logo" style={{ height: '40px', width: 'auto' }} />
        </IconWrapper>
        <span>Phishing Detection</span>
      </LogoLink>
    </LogoContainer>
  );
};

export default Logo;

