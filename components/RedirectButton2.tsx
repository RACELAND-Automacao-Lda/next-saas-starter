import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';

export interface RedirectButtonProps {
  url: string;
  children: React.ReactNode;
  svg: string;
}

const RedirectButton: React.FC<RedirectButtonProps> = ({ url, children, svg }) => {
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
      <ButtonImage src={svg} alt="Homeland" width="320" height="100" />
    </ButtonDiv>
  );
};

const ButtonDiv = styled.div`
  font-weight: bold;
  cursor: pointer;
  margin-top: 8rem;
  margin-bottom: 20px;
  border-radius: 5px;
  color: #3a4658;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonImage = styled(Image)`
  padding-right: 1rem !important;
`;

export default RedirectButton;
