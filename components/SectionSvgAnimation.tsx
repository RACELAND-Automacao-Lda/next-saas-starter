import NextImage from 'next/image';
import NextLink from 'next/link';
import React, { PropsWithChildren } from 'react';
import Lottie from 'react-lottie-player';
import styled from 'styled-components';
import Button from 'components/Button';
import isMobile from 'hooks/isMobile';
import { media } from 'utils/media';
import Partners from 'views/HomePage/Partners';
import Container from './Container';
import OverTitle from './OverTitle';
import RichText from './RichText';

export interface SectionSvgProps {
  loop?: boolean;
  svg: string;
  title: string;
  overTitle: string;
  reversed?: boolean;
  width: number;
  height: number;
  top?: string;
}

export default function SectionSvgAnimation({
  loop,
  svg,
  title,
  overTitle,
  reversed,
  height,
  width,
  top,
}: PropsWithChildren<SectionSvgProps>) {
  return (
    <Wrapper>
      <SectionSvgWrapper reversed={reversed}>
        <ContentContainer>
          <Title>{title}</Title>
          <CustomOverTitle>{overTitle}</CustomOverTitle>
          <NextLink href="/domotic" passHref>
            <NewButton>Ver Serviços</NewButton>
          </NextLink>
        </ContentContainer>
        <ImageContainer>
          <Lottie loop={loop} animationData={svg} play style={{ width: width, height: height, top: top }} />
        </ImageContainer>
      </SectionSvgWrapper>
      <Partners />
    </Wrapper>
  );
}

const Title = styled.h1`
  font-size: 72px;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const NewButton = styled(Button)`
  margin-top: 50px;
  width: 389px;
  font-size: 16px;
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

type Props = Pick<SectionSvgProps, 'reversed'>;
const SectionSvgWrapper = styled(Container)`
  display: flex;
  align-items: center;
  min-height: calc(100vh - 27rem);
  flex-direction: ${(p: Props) => (p.reversed ? 'row-reverse' : 'row')};

  ${media('<=desktop')} {
    flex-direction: column;

    ${ImageContainer} {
      margin: 0 0 2.5rem 0;
    }
  }
`;
