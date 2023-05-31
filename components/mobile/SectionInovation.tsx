import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Container from '../Container';
import OverTitle from '../OverTitle';

export interface SectionInovationMobileProps {
  title: string;
  titleBold: string;
  overTitle: string;
}

export default function SectionInovationMobile({ title, titleBold, overTitle }: PropsWithChildren<SectionInovationMobileProps>) {
  return (
    <Wrapper>
      <SectionSvgWrapper>
        <ContentContainer>
          <ContentImage>
            <Title>{title}</Title>
            <TitleBold>{titleBold}</TitleBold>
            <CustomOverTitle>{overTitle}</CustomOverTitle>
          </ContentImage>
        </ContentContainer>
      </SectionSvgWrapper>
    </Wrapper>
  );
}

const Title = styled.h1`
  font-size: 44px;
  font-weight: bold;
  line-height: 1.5;
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ContentImage = styled.div`
  display: flex;
  flex-direction: column;
  height: 68vw;
  position: relative;
  justify-content: center;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.15;
    background-image: url(/inovation.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

const SectionSvgWrapper = styled(Container)`
  display: flex;
  align-items: center;
  min-height: calc(100vh - 2rem);
  flex-direction: column;
`;
