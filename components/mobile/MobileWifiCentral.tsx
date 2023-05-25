import NextImage from 'next/image';
import NextLink from 'next/link';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import isMobile from 'hooks/isMobile';
import { media } from 'utils/media';
import Partners from 'views/HomePage/Partners';
import Container from '../Container';
import OverTitle from '../OverTitle';
import RichText from '../RichText';

export interface MobileWifiCentralProps {
  title: string;
  image1: string;
  image2: string;
}

export default function MobileWifiCentral({ title, image1, image2 }: PropsWithChildren<MobileWifiCentralProps>) {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <WifiCentralContainer>
        <ContentContainer>
          <DivisionTitle>Integração por Wifi</DivisionTitle>
          <DivisionContainer>
            <ImageContainer>
              <NewImage src={image1} alt={'wifi'} layout="fill" />
            </ImageContainer>
            <DivisionSubtitle>Adapte a sua casa com as nossas soluções de automação por wifi.</DivisionSubtitle>
          </DivisionContainer>
        </ContentContainer>

        <ContentContainer>
          <DivisionTitle>Integração Central</DivisionTitle>
          <DivisionContainer>
            <ImageContainer>
              <NewImage src={image2} alt={'central'} layout="fill" />
            </ImageContainer>
            <DivisionSubtitle>
              A construir ou remodelar a casa?
              <br /> Incorpore as nossas soluções por cabo de rede para automação central.
            </DivisionSubtitle>
          </DivisionContainer>
        </ContentContainer>
      </WifiCentralContainer>
    </Wrapper>
  );
}

const Title = styled.h1`
  text-align: left;
  font-size: 44px;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  display: inline-block;
  color: rgb(var(--textSecondary));
  padding: 0 5%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8vh;
  margin-bottom: 12vh;
`;

const DivisionTitle = styled.h1`
  text-align: left;
  font-size: 28px;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  display: inline-block;
  color: rgb(var(--textSecondary));
  padding: 0 5%;
`;

const DivisionSubtitle = styled(OverTitle)`
  text-align: left;
  font-size: 14px;
  display: inline-block;
  color: rgb(var(--textSecondary));
`;

const DivisionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
`;

const WifiCentralContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 1rem;
`;

const NewImage = styled(NextImage)`
  width: 150px;
  height: 150px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 150px;
  height: 120px;
  margin-right: 1rem;
  &:before {
    display: block;
    content: '';
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(var(--secondary));
  min-height: calc(100vh - 60px);
`;
