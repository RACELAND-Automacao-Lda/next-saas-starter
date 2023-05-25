import NextImage from 'next/image';
import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import DottedList from 'components/DottedList';
import StyledList from 'components/StyledList';
import { media } from 'utils/media';
import Collapse from './Collapse';

interface ServiceDropdownProps {
  isOpen?: boolean;
  reverse?: boolean;
  imagePath?: string;
  fullImagePath?: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  dotlist?: string[];
}

export default function ServiceDropdown({
  isOpen,
  reverse,
  imagePath,
  fullImagePath,
  imageAlt,
  title,
  subtitle,
  dotlist,
  children,
}: PropsWithChildren<ServiceDropdownProps>) {
  const [hasCollapsed, setHasCollapsed] = useState(!isOpen);
  const isActive = !hasCollapsed;
  return (
    <AccordionWrapper>
      {!isActive ? (
        <Wrapper reverse={reverse} style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
          <TitleWrapper reverse={reverse}>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <StyledList>
              <DottedList isOpened={false} dotlist={dotlist} />
            </StyledList>
            <OpenAnchor onClick={() => setHasCollapsed((prev) => !prev)}>Saber mais</OpenAnchor>
          </TitleWrapper>
          <ImageContainer reverse={reverse}>
            <NextImage src={imagePath} alt={imageAlt} layout="fill" />
          </ImageContainer>
        </Wrapper>
      ) : (
        <Opened reverse={reverse}>
          <ImageContainerOpened fullImagePath={fullImagePath}>
            <TitleOpened>{title}</TitleOpened>
            <SubtitleOpened>{subtitle}</SubtitleOpened>
            <TextWrapperOpened>
              <DottedList isOpened={true} dotlist={dotlist} />
            </TextWrapperOpened>
          </ImageContainerOpened>
        </Opened>
      )}
      <Collapse isOpen={isActive} duration={300}>
        {children}
        <CollapseOpened>
          <OpenAnchor onClick={() => setHasCollapsed((prev) => !prev)}>Ver menos</OpenAnchor>
        </CollapseOpened>
      </Collapse>
    </AccordionWrapper>
  );
}

const Title = styled.h1`
  font-size: 36px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const Subtitle = styled.h3`
  font-size: 18px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
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
  justify-content: flex-end;
  align-items: center;
`;

const ImageContainer = styled.div<{ reverse?: boolean }>`
  overflow: hidden;
  position: relative;
  width: 60%;

  aspect-ratio: 5/2;
  border-radius: ${(p) => (p.reverse ? '0rem 2rem 2rem 0rem' : '2rem 0rem 0rem 2rem')};
  box-shadow: var(--shadow-md);
  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const Opened = styled.div<{ reverse?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(p) => (p.reverse ? 'flex-start' : 'flex-end')};
`;

const CollapseOpened = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainerOpened = styled.div<{ fullImagePath?: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;

  box-shadow: var(--shadow-md);
  overflow: hidden;
  animation: slideInAnimation 0.5s forwards;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(90, 90, 90, 0.7);
    z-index: 1;
  }

  background-image: url(${(p) => (p.fullImagePath ? p.fullImagePath : '')});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @keyframes slideInAnimation {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;

const TitleOpened = styled.h1`
  font-size: 36px;
  width: 100%;
  text-align: center;
  color: white;
  z-index: 2;
`;

const SubtitleOpened = styled.h3`
  font-size: 18px;
  width: 100%;
  text-align: center;
  color: white;
  z-index: 2;
`;

const TextWrapperOpened = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  color: white;
  z-index: 2;
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
