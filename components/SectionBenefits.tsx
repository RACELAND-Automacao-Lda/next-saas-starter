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

export interface SectionBenefitsProps {
  imageUrl: string;
  title1: string;
  title2: string;
  overTitle: string;
  reversed?: boolean;
}

export default function SectionBenefits({ imageUrl, title1, title2, overTitle, reversed }: PropsWithChildren<SectionBenefitsProps>) {
  return (
    <Wrapper>
      <SectionSvgWrapper reversed={reversed}>
        <ContentContainer>
          <Title>{title1}</Title>
          <Title>{title2}</Title>
          <CustomOverTitle>{overTitle}</CustomOverTitle>
          <NextLink href="/benefits" passHref>
            <NewButton>Conhecer benefícios</NewButton>
          </NextLink>
        </ContentContainer>
        <ImageContainer>
          <NewImage src={imageUrl} alt={title1} width="500" height="500" />
        </ImageContainer>
      </SectionSvgWrapper>
    </Wrapper>
  );
}

const Title = styled.h1`
  font-size: 55px;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 2rem;
  letter-spacing: -0.03em;
  z-index: 2;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const TitleBold = styled(Title)`
  color: #4d91ff;
`;

const CustomOverTitle = styled(OverTitle)`
  font-size: 16px;
`;

const NewButton = styled(Button)`
  margin-top: 50px;
  width: 80vw;
  max-width: 295px;
  font-size: 16px;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const NewImage = styled(NextImage)`
  width: 700px;
  height: 650px;
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

type Props = Pick<SectionBenefitsProps, 'reversed'>;
const SectionSvgWrapper = styled(Container)`
  display: flex;
  align-items: center;
  min-height: calc(100vh - 10rem);
  flex-direction: ${(p: Props) => (p.reversed ? 'row-reverse' : 'row')};

  ${media('<=desktop')} {
    flex-direction: column;

    ${ImageContainer} {
      margin: 0 0 2.5rem 0;
    }
  }
`;
