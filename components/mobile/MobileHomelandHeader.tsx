import React, { PropsWithChildren } from 'react';
import Lottie from 'react-lottie-player';
import styled from 'styled-components';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';

export interface MobileHomelandHeaderProps {
  loop?: boolean;
  svg?: object;
  title: string;
  overTitle: string;
  width: number;
  height: number;
  top?: string;
}

export default function MobileHomelandHeader({
  loop,
  svg,
  title,
  overTitle,
  height,
  width,
  top,
}: PropsWithChildren<MobileHomelandHeaderProps>) {
  return (
    <Wrapper>
      <SectionSvgWrapper>
        <ImageContainer>
          <Lottie loop={loop} animationData={svg} play style={{ width: width, height: height, top: top }} />
        </ImageContainer>
        <ContentContainer>
          <Title>{title}</Title>
          <CustomOverTitle>{overTitle}</CustomOverTitle>
        </ContentContainer>
      </SectionSvgWrapper>
    </Wrapper>
  );
}

const Title = styled.h1`
  text-align: center;
  font-size: 44px;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 2rem;
  letter-spacing: -0.03em;
  display: inline-block;
  color: rgb(var(--textSecondary));
`;

const CustomOverTitle = styled(OverTitle)`
  text-align: center;
  font-size: 16px;
  color: rgb(var(--textSecondary));
  margin-bottom: 1rem;
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 75px;
  padding-bottom: 4rem;
  &:before {
    display: block;
    content: '';
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(var(--secondary));
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionSvgWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 60px);
  flex-direction: column;
`;
