import Head from 'next/head';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { EnvVars } from 'env';
import { media } from 'utils/media';
import ContainerFull from './ContainerFull';
import SectionTitle from './SectionTitle';

export interface AboutProps {
  title: string;
}

export default function AboutUs({ title, children }: PropsWithChildren<AboutProps>) {
  return (
    <>
      <Head>
        <title>
          {title} | {EnvVars.SITE_NAME}
        </title>
      </Head>
      <Wrapper>
        <HeaderContainer>
          <ContainerFull>
            <Title>{title}</Title>
          </ContainerFull>
        </HeaderContainer>
        <ContainerFull>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </ContainerFull>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background: rgb(var(--background));
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-image: url(/fading.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 43vh;
`;

const Title = styled(SectionTitle)`
  color: black;
  margin-left: 10rem;
  text-align: start !important;
`;

const ChildrenWrapper = styled.div`
  margin-bottom: 10rem;
`;
