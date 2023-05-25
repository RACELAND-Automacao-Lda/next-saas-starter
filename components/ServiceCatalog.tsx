import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export interface ServiceCatalogProps {}

export default function ServiceCatalog() {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <SectionTitleWrapper>
            <CustomSectionTitle>Veja o nosso catálogo de serviços</CustomSectionTitle>
          </SectionTitleWrapper>

          <NextLink href="/features" passHref>
            <NewButton>Ver catálogo</NewButton>
          </NextLink>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const NewButton = styled(Button)`
  margin-top: 5em;
  width: 35%;
  font-size: 16px;
`;

const CustomSectionTitle = styled(SectionTitle)`
  font-size: 48px;
`;

const SectionTitleWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 60px;
  flex-direction: row;
  width: 88%;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 5rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`;
