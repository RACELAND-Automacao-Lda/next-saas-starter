import NextImage from 'next/image';
import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import DottedList from 'components/DottedList';
import StyledList from 'components/StyledList';
import { media } from 'utils/media';
import Collapse from '../Collapse';

interface MobileServiceDropdownProps {
  isOpen?: boolean;
  imagePath: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  dotlist?: string[];
}

export default function MobileServiceDropdown({
  isOpen,
  imagePath,
  imageAlt,
  title,
  subtitle,
  dotlist,
  children,
}: PropsWithChildren<MobileServiceDropdownProps>) {
  const [hasCollapsed, setHasCollapsed] = useState(!isOpen);
  const isActive = !hasCollapsed;
  return (
    <AccordionWrapper>
      <ImageContainer>
        <NextImage src={imagePath} alt={imageAlt} layout="fill" />
      </ImageContainer>
      <Wrapper>
        <TitleWrapper>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <StyledList style={{ marginBottom: '5rem' }}>
            <DottedList isOpened={false} dotlist={dotlist} />
          </StyledList>
          {!isActive && <OpenAnchor onClick={() => setHasCollapsed((prev) => !prev)}>Saber mais</OpenAnchor>}
        </TitleWrapper>
      </Wrapper>

      <Collapse isOpen={isActive} duration={300}>
        <Background>
          {children}
          <CollapseOpened>
            <OpenAnchor onClick={() => setHasCollapsed((prev) => !prev)}>Ver menos</OpenAnchor>
          </CollapseOpened>
        </Background>
      </Collapse>
    </AccordionWrapper>
  );
}

const Title = styled.h1`
  font-size: 28px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  margin-top: 5rem;
`;

const Subtitle = styled.span`
  font-size: 17px;
  width: 100%;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const TitleWrapper = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  margin-right: ${(p) => (p.reverse ? '0%' : '5%')};
  margin-left: ${(p) => (p.reverse ? '5%' : '0%')};
`;

const Wrapper = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
`;

const ImageContainer = styled.div<{ reverse?: boolean }>`
  overflow: hidden;
  position: relative;
  width: 100vw;

  aspect-ratio: 6/4;
  box-shadow: var(--shadow-md);
  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const CollapseOpened = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-left: 10%;
`;

const OpenAnchor = styled.a`
  font-size: 16px;
  display: inline;
  width: fit-content;
  text-decoration: underline;
  cursor: pointer;
  background: linear-gradient(rgb(var(--primary)), rgb(var(--primary)));
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 100% 0px;
  transition: 100ms;
  transition-property: background-size, text-decoration, color;
  color: rgb(var(--primary));
`;

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(var(--Background));
  border-radius: 0.6rem;
  transition: opacity 0.2s;

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const Background = styled.div`
  background: rgb(var(--dropdownColor));
  padding-top: 2.5rem;
  padding-bottom: 5rem;
`;
