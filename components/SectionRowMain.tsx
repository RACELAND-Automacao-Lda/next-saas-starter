import NextImage from 'next/image';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import isMobile from 'hooks/isMobile';
import { media } from 'utils/media';
import ContainerFull from './ContainerFull';
import OverTitle from './OverTitle';

export interface SectionRowMainProps {
  imageUrl: string;
  title: string;
  overTitle: string;
}

export default function SectionRowMain({ imageUrl, title, overTitle }: PropsWithChildren<SectionRowMainProps>) {
  return (
    <Wrapper>
      <SectionSvgWrapper>
        <ImageContainer>
          <NextImage src={imageUrl} alt={title} layout="fill" />
        </ImageContainer>
        <ContentContainer>
          <ContentText>
            <Title>{title}</Title>
            <CustomOverTitle>{overTitle}</CustomOverTitle>
          </ContentText>
        </ContentContainer>
      </SectionSvgWrapper>
    </Wrapper>
  );
}

const Title = styled.h1`
  font-size: 52px;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 2rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  font-size: 18px;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  aspect-ratio: 8/6;

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentText = styled.div`
  width: 70%;
`;

const SectionSvgWrapper = styled(ContainerFull)`
  display: flex;
  align-items: center;
  height: 100%;
  flex-direction: row;

  ${media('<=desktop')} {
    flex-direction: column;

    ${ImageContainer} {
      margin: 0 0 2.5rem 0;
    }
  }
`;
