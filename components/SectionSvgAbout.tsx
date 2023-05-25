import NextImage from 'next/image';
import NextLink from 'next/link';
import React, { PropsWithChildren } from 'react';
import Lottie from 'react-lottie-player';
import styled from 'styled-components';
import Button from 'components/Button';
import isMobile from 'hooks/isMobile';
import { media } from 'utils/media';
import Partners from 'views/HomePage/Partners';
import ContainerFull from './ContainerFull';
import OverTitle from './OverTitle';
import RichText from './RichText';

export interface SectionAboutProps {
  imageUrl: string;
  title: string;
  overTitle: string;
  reversed?: boolean;
}

export default function SectionAbout({ imageUrl, title, overTitle, reversed }: PropsWithChildren<SectionAboutProps>) {
  return (
    <Wrapper>
      <SectionSvgWrapper reversed={reversed}>
        <ContentContainer>
          <Title>{title}</Title>
          <CustomOverTitle>{overTitle}</CustomOverTitle>
        </ContentContainer>
        <ImageContainer>
          <NewImage src={imageUrl} alt={title} layout="fill" />
        </ImageContainer>
      </SectionSvgWrapper>
    </Wrapper>
  );
}

const Title = styled.h1`
  font-size: 72px;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 2rem;SectionSvgProps
`;

const CustomOverTitle = styled(OverTitle)`
  font-size: 16px;
`;

const NewImage = styled(NextImage)`
  width: 700px;
  height: 650px;
`;

const ImageContainer = styled.div`
  flex: 1;

  position: relative;
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc(50%);
  }

  & > div {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
  }

  & > div::before {
    overflow: auto;
  }

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

type Props = Pick<SectionAboutProps, 'reversed'>;
const SectionSvgWrapper = styled(ContainerFull)`
  display: flex;
  align-items: center;
  min-height: calc(100vh - 50rem);
  flex-direction: ${(p: Props) => (p.reversed ? 'row-reverse' : 'row')};

  ${media('<=desktop')} {
    flex-direction: column;

    ${ImageContainer} {
      margin: 0 0 2.5rem 0;
    }
  }
`;
