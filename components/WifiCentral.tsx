import NextImage from 'next/image';
import NextLink from 'next/link';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import isMobile from 'hooks/isMobile';
import { media } from 'utils/media';
import Partners from 'views/HomePage/Partners';
import Container from './Container';
import OverTitle from './OverTitle';
import RichText from './RichText';

export interface WifiCentralProps {
  title: string;
  image1: string;
  image2: string;
  image3: string;
}

export default function WifiCentral({ title, image1, image2, image3 }: PropsWithChildren<WifiCentralProps>) {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <ContentContainer>
        <DivisionContainer>
          <DivisionTitle>Integração por Wifi</DivisionTitle>
          <DivisionSubtitle>
            Adapte a sua casa com as nossas <br /> soluções de automação por wifi.
          </DivisionSubtitle>
          <ImageContainer>
            <NewImage src={image1} alt={'wifi'} layout="fill" />
          </ImageContainer>
        </DivisionContainer>
        <DivisionContainer>
          <FullImageContainer>
            <DivisionNewImage src={image2} alt={'middle'} layout="fill" />
          </FullImageContainer>
        </DivisionContainer>
        <DivisionContainer>
          <DivisionTitle>Integração Central</DivisionTitle>
          <DivisionSubtitle>
            A construir ou remodelar a casa?
            <br /> Incorpore as nossas soluções por cabo <br /> de rede para automação central.
          </DivisionSubtitle>

          <ImageContainer>
            <NewImage src={image3} alt={'central'} layout="fill" />
          </ImageContainer>
        </DivisionContainer>
      </ContentContainer>
    </Wrapper>
  );
}

const Title = styled.h1`
  text-align: center;
  font-size: 64px;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  display: inline-block;
  color: rgb(var(--textSecondary));
`;

const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 8%;
`;

const DivisionTitle = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  display: inline-block;
  color: rgb(var(--textSecondary));
`;

const DivisionSubtitle = styled(OverTitle)`
  text-align: center;
  font-size: 24px;
  display: inline-block;
  color: rgb(var(--textSecondary));
`;

const DivisionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10rem;
`;

const NewImage = styled(NextImage)`
  width: 150px;
  height: 150px;
`;

const DivisionNewImage = styled(NextImage)`
  width: 70px;
  height: 70px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  &:before {
    display: block;
    content: '';
  }
  margin-top: 3rem;
`;

const FullImageContainer = styled.div`
  position: relative;
  &:before {
    display: block;
    content: '';
  }
  height: 400px;
  width: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(var(--secondary));
`;
