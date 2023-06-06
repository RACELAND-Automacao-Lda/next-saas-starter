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
          <NextLink href="/domotic" passHref>
            <NewButton>Ver Serviços</NewButton>
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
  text-align: center;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const NewButton = styled(Button)`
  width: 80vw;
  max-width: 295px;
  font-size: 16px;
  margin-top: 50px;
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
  margin-bottom: 5rem;
`;

const ContentImage = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vw;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const SectionSvgWrapper = styled(Container)`
  display: flex;
  align-items: center;
  min-height: calc(100vh - 2rem);
  flex-direction: column;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.15;
    background-image: url(/1_benefits.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;
