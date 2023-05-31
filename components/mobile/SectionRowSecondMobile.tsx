import NextImage from 'next/image';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import ContainerFull from '../ContainerFull';
import OverTitle from '../OverTitle';

export interface SectionRowMainMobileProps {
  imageUrl: string;
  title: string;
  overTitle: string;
}

export default function SectionRowSecondMobile({ imageUrl, title, overTitle }: PropsWithChildren<SectionRowMainMobileProps>) {
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
  font-size: 24px;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 3rem;
  letter-spacing: -0.03em;
`;

const CustomOverTitle = styled(OverTitle)`
  font-size: 16px;
`;

const ImageContainer = styled.div`
  -webkit-flex: none !important;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  aspect-ratio: 1;

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: rgb(var(--secondary));
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 3rem;
  margin-right: 3rem;
  height: 50vh;
  justify-content: flex-start;
`;

const ContentText = styled.div`
  width: 100%;
  color: rgb(var(--textSecondary));
  margin-top: 3rem;
`;

const SectionSvgWrapper = styled(ContainerFull)`
  display: flex;
  align-items: center;
  min-height: 100vh;
  flex-direction: row;

  ${media('<=desktop')} {
    flex-direction: column;

    ${ImageContainer} {
      margin: 0 0 2.5rem 0;
    }
  }
`;
