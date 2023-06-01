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
      <Image src={svg} alt="Homeland" width="140" height="50" />
    </ButtonDiv>
  );
};

const ButtonDiv = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default RedirectButtonInteractive;
