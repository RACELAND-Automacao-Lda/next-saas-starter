import Head from 'next/head';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { EnvVars } from 'env';
import { media } from 'utils/media';
import ContainerFull from '../ContainerFull';
import SectionTitle from '../SectionTitle';

export interface AboutProps {
  title: string;
}

export default function AboutUsMobile({ title, children }: PropsWithChildren<AboutProps>) {
  return (
    <>
      <Head>
        <title>
          {title} | {EnvVars.SITE_NAME}
        </title>
      </Head>
      <Wrapper>
        <HeaderContainer>
          <ContainerTitle>
            <Title>{title}</Title>
          </ContainerTitle>
        </HeaderContainer>
        <ContainerTitle>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </ContainerTitle>
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
  justify-content: center;
  background-image: url(/fading.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 35vh;
`;

const Title = styled(SectionTitle)`
  color: black;
  text-align: center !important;
`;

const ContainerTitle = styled(ContainerFull)`
  background: none !important;
`;

const ChildrenWrapper = styled.div``;
