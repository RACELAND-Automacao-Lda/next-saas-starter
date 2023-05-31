import NextLink from 'next/link';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import { media } from 'utils/media';
import Partners from 'views/HomePage/Partners';
import Container from '../Container';
import OverTitle from '../OverTitle';

export interface SectionPartnersMobileProps {
  title: string;
  overTitle: string;
}

export default function SectionPartnersMobile({ title, overTitle }: PropsWithChildren<SectionPartnersMobileProps>) {
  return (
    <Wrapper>
      <SectionSvgWrapper>
        <ContentContainer>
          <Title>{title}</Title>
          <CustomOverTitle>{overTitle}</CustomOverTitle>
          <NextLink href="/domotic" passHref>
            <NewButton>Ver Serviços</NewButton>
          </NextLink>
        </ContentContainer>
      </SectionSvgWrapper>
      <Partners />
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

const CustomOverTitle = styled(OverTitle)`
  font-size: 16px;
  margin-bottom: 2rem;
  text-align: center;
`;

const NewButton = styled(Button)`
  margin-top: 20px;
  width: 300px;
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

const SectionSvgWrapper = styled(Container)`
  display: flex;
  align-items: center;
  min-height: calc(100vh - 30rem);
  flex-direction: column;
`;
