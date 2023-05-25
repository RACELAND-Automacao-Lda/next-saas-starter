import NextImage from 'next/image';
import NextLink from 'next/link';
import React, { PropsWithChildren } from 'react';
import Lottie from 'react-lottie-player';
import styled from 'styled-components';
import Button from 'components/Button';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import RichText from 'components/RichText';
import isMobile from 'hooks/isMobile';
import { media } from 'utils/media';
import Partners from 'views/HomePage/Partners';

export interface MobileHomelandBenefitsProps {
  image1: string;
  title1: string;
  text1: string;
  image2: string;
  title2: string;
  text2: string;
  image3: string;
  title3: string;
  text3: string;
}

export default function MobileHomelandBenefits({
  image1,
  title1,
  text1,
  image2,
  title2,
  text2,
  image3,
  title3,
  text3,
}: PropsWithChildren<MobileHomelandBenefitsProps>) {
  return (
    <Wrapper>
      <ContentContainer>
        <DivisionContainer>
          <ImageContainer>
            <NewImage src={image1} alt={image1} layout="fill" />
          </ImageContainer>
          <DivisionTitle>{title1}</DivisionTitle>
          <DivisionSubtitle>{text1}</DivisionSubtitle>
        </DivisionContainer>

        <DivisionContainer>
          <ImageContainer>
            <NewImage src={image2} alt={image2} layout="fill" />
          </ImageContainer>
          <DivisionTitle>{title2}</DivisionTitle>
          <DivisionSubtitle>{text2}</DivisionSubtitle>
        </DivisionContainer>

        <DivisionContainer>
          <ImageContainer>
            <NewImage src={image3} alt={image3} layout="fill" />
          </ImageContainer>
          <DivisionTitle>{title3}</DivisionTitle>
          <DivisionSubtitle>{text3}</DivisionSubtitle>
        </DivisionContainer>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15%;
`;

const DivisionTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 1rem;
  letter-spacing: -0.03em;
  display: inline-block;

  padding: 0 10%;
`;

const DivisionSubtitle = styled(OverTitle)`
  text-align: center;
  font-size: 16px;
  display: inline-block;

  padding: 0 10%;
`;

const DivisionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(50vh - 30px);
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const NewImage = styled(NextImage)`
  width: 200px;
  height: 200px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  &:before {
    display: block;
    content: '';
  }
  margin-top: 0rem;
`;
