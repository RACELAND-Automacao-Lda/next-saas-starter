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

export interface HomelandHeaderSectionProps {
  loop?: boolean;
  svg: string;
  overTitle: string;
  reversed?: boolean;
  width: number;
  height: number;
  top?: string;
}

export default function HomelandHeaderSection({
  loop,
  svg,
  overTitle,
  reversed,
  height,
  width,
  top,
}: PropsWithChildren<HomelandHeaderSectionProps>) {
  return (
    <Wrapper>
      <SectionSvgWrapper reversed={reversed}>
        <ContentContainer>
          <Title>
            <WhiteText>Home</WhiteText>
            <BlueText>land</BlueText>
          </Title>

          <CustomOverTitle>{overTitle}</CustomOverTitle>
        </ContentContainer>
        <ImageContainer>
          <Lottie loop={loop} animationData={svg} play style={{ width: width, height: height, top: top }} />
        </ImageContainer>
      </SectionSvgWrapper>
    </Wrapper>
  );
}

const Title = styled.h1`
  font-size: 72px;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  display: inline-block;
`;

const WhiteText = styled.span`
  color: rgb(var(--textSecondary));
`;

const BlueText = styled.span`
  color: #4d91ff;
`;

const CustomOverTitle = styled(OverTitle)`
  color: rgb(var(--textSecondary));
  margin-bottom: 2rem;
`;

const NewButton = styled(Button)`
  margin-top: 50px;
  width: 389px;
  font-size: 16px;
`;

const ImageContainer = styled.div`
  position: relative;
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding: 0 22rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(var(--secondary));
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

type Props = Pick<HomelandHeaderSectionProps, 'reversed'>;
const SectionSvgWrapper = styled(Container)`
  display: flex;
  align-items: center;
  min-height: calc(50vh - 3rem);
  flex-direction: ${(p: Props) => (p.reversed ? 'row-reverse' : 'row')};
`;
