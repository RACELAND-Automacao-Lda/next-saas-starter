import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

export interface RedirectButtonInteractiveProps {
  url: string;
  children: React.ReactNode;
  svg: string;
}

const RedirectButtonInteractive: React.FC<RedirectButtonInteractiveProps> = ({ url, children, svg }) => {
  const handleClick = () => {
    if (url.startsWith('http') || url.startsWith('www') || url.startsWith('https')) {
      window.location.href = url; // Redirect to external URL
    } else {
      window.location.href = process.env.PUBLIC_URL + url; // Redirect within the app
    }
  };

  return (
    <ButtonDiv onClick={handleClick}>
      {children}
      <Image src={svg} alt="Homeland" width="160" height="60" />
    </ButtonDiv>
  );
};

const ButtonDiv = styled.div`
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 20px;
  border-radius: 5px;
  color: #3a4658;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default RedirectButtonInteractive;
