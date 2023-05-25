import Head from 'next/head';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { EnvVars } from 'env';
import { media } from 'utils/media';
import FullContainer from './FullContainer';
import SectionTitle from './SectionTitle';

export interface FullPageProps {
  title: string;
  description?: string;
}

export default function FullPage({ title, description, children }: PropsWithChildren<FullPageProps>) {
  return (
    <>
      <Head>
        <title>
          {title} | {EnvVars.SITE_NAME}
        </title>
        <meta name="description" content={description} />
      </Head>
      <Wrapper>
        <FullContainer>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </FullContainer>
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
  background: rgb(var(--secondary));
  min-height: 40rem;
`;

const Title = styled(SectionTitle)`
  color: rgb(var(--textSecondary));
  margin-bottom: 2rem;
`;

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
  text-align: center;
  max-width: 60%;
  margin: auto;

  ${media('<=tablet')} {
    max-width: 100%;
  }
`;

const ChildrenWrapper = styled.div``;
