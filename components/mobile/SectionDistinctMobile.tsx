import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import ContainerFull from 'components/ContainerFull';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';

export interface SectionDistinctProps {
  title: string;
  overTitle1: string;
  overTitle2: string;
  overTitle3: string;
}

export default function SectionDistinct({ title, overTitle1, overTitle2, overTitle3 }: PropsWithChildren<SectionDistinctProps>) {
  return (
    <CtaWrapper>
      <NewContainer>
        <Stack>
          <SectionSvgWrapper>
            <OverallContainer>
              <Title>{title}</Title>
              <ContentContainer>
                <CustomOverTitle>
                  <BulletPoint />
                  <Text>{overTitle1}</Text>
                </CustomOverTitle>
                <CustomOverTitle>
                  <BulletPoint />
                  <Text>{overTitle2}</Text>
                </CustomOverTitle>
                <CustomOverTitle>
                  <BulletPoint2 />
                  <Text>{overTitle3}</Text>
                </CustomOverTitle>
              </ContentContainer>
            </OverallContainer>
          </SectionSvgWrapper>
        </Stack>
      </NewContainer>
    </CtaWrapper>
  );
}

const CustomOverTitle = styled(OverTitle)`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
`;

const BulletPoint = styled.div`
  width: 10px;
  height: 10px;
  background-color: #4d91ff;
  border-radius: 50%;
  margin-right: 7px;
`;

const BulletPoint2 = styled.div`
  width: 15px;
  height: 10px;
  background-color: #4d91ff;
  border-radius: 50%;
  margin-right: 7px;
  margin-bottom: 22px;
`;

const Text = styled.span`
  text-align: left;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const OverallContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
`;

const SectionSvgWrapper = styled(ContainerFull)`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 95% !important;
  min-height: calc(100vh - 11rem);
  justify-content: center;
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
  font-size: 44px;
  font-weight: bold;
  text-align: left;
  line-height: 1.5;
  margin-bottom: 4rem;
  width: 100%;
`;
