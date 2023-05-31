import NextLink from 'next/link';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import { media } from 'utils/media';
import Container from '../Container';
import OverTitle from '../OverTitle';

export interface SectionBenefitsMobileProps {
  title: string;
  overTitle: string;
}

export default function SectionBenefitsMobile({ title, overTitle }: PropsWithChildren<SectionBenefitsMobileProps>) {
  return (
    <Wrapper>
      <SectionSvgWrapper>
        <ContentContainer>
          <ContentImage>
            <Title>{title}</Title>
            <CustomOverTitle>{overTitle}</CustomOverTitle>
          </ContentImage>
          <NextLink href="/benefits" passHref>
            <NewButton>Conhecer benefícios</NewButton>
          </NextLink>
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

const NewButton = styled(Button)`
  width: 295px;
  font-size: 16px;
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
  height: 100vw;
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
    background-image: url(/Cirlce.svg);
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
