import NextImage from 'next/image';
import Image from 'next/image';
import NextLink from 'next/link';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';
import RedirectButton from '/components/RedirectButton';

export interface SectionDistinctProps {
  title: string;
  overTitle1: string;
  overTitle2: string;
  overTitle3: string;
  reversed?: boolean;
}

export default function SectionDistinct({ title, overTitle1, overTitle2, overTitle3, reversed }: PropsWithChildren<SectionDistinctProps>) {
  return (
    <CtaWrapper>
      <NewContainer>
        <Stack>
          <SectionSvgWrapper reversed={reversed}>
            <Title>{title}</Title>
            <ContentContainer>
              <CustomOverTitle>
                <SpanBullet>
                  <BulletPoint />
                </SpanBullet>
                <Text>{overTitle1}</Text>
              </CustomOverTitle>
              <CustomOverTitle>
                <SpanBullet>
                  <BulletPoint />
                </SpanBullet>
                <Text>{overTitle2}</Text>
              </CustomOverTitle>
              <CustomOverTitle>
                <SpanBullet>
                  <BulletPoint />
                </SpanBullet>
                <Text>{overTitle3}</Text>
              </CustomOverTitle>
            </ContentContainer>
          </SectionSvgWrapper>
        </Stack>
      </NewContainer>
    </CtaWrapper>
  );
}

const CustomOverTitle = styled(OverTitle)`
  font-size: 23px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

const Text = styled.span`
  text-align: left;
`;

const BulletPoint = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  background-color: #4d91ff;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const SpanBullet = styled.span`
  margin-top: 11px;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SectionSvgWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: row;
  max-width: 95% !important;
  min-height: calc(100vh - 60rem);
`;

const NewContainer = styled(Container)`
  max-width: 100%;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5.1rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
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

const Title = styled.h1`
  font-size: 72px;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 2rem;
  width: 40%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
