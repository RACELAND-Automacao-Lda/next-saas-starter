import NextImage from 'next/image';
import Image from 'next/image';
import NextLink from 'next/link';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';
// @ts-ignore
import RedirectButton from '/components/RedirectButton';

export interface InteractiveProps {
  imageUrl1: string;
  imageUrl2: string;
}

export default function Interactive({ imageUrl1, imageUrl2 }: PropsWithChildren<InteractiveProps>) {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <SectionTitleWrapper>
            <NImage src={imageUrl1} alt="Homeland" width="65" height="65" />
            <CustomSectionTitle>Homeland</CustomSectionTitle>
          </SectionTitleWrapper>
          <CustomOverTitle>A sua casa na palma da sua mão</CustomOverTitle>
          <SectionSvgWrapper>
            <ContentContainer>
              <ButtonDiv>
                <ButtonImage src="/1.svg" alt="Homeland" width="80" height="80" />
                Simples, Prático e Seguro
              </ButtonDiv>
              <ButtonDiv>
                <ButtonImage src="/2.svg" alt="Homeland" width="80" height="80" />
                Controle a sua casa em qualquer lugar
              </ButtonDiv>
              <ButtonDiv>
                <ButtonImage src="/3.svg" alt="Homeland" width="80" height="80" />
                Tudo o que precisa num só lugar
              </ButtonDiv>
              <NextLink href="/domotic" passHref>
                <NewButton>Saber Mais</NewButton>
              </NextLink>
              <GroupDiv>
                <ButtonsRedirectGroup>
                  <RedirectButton
                    url="https://play.google.com/store/apps/details?id=io.homeland.companion.android&hl=pt-PT"
                    svg="/Google Play.png"
                  ></RedirectButton>
                  <RedirectButton url="https://apps.apple.com/pt/app/homeland/id1658547571" svg="/App Store.png"></RedirectButton>
                </ButtonsRedirectGroup>
              </GroupDiv>
            </ContentContainer>
            <ImageContainer>
              <NewImage src={imageUrl2} width="700" height="800" />
            </ImageContainer>
          </SectionSvgWrapper>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const ButtonsRedirectGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 69%;
  height: 60px;
`;
const GroupDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 88%;
  margin-top: 20px;
`;

const ButtonDiv = styled.div`
  width: 88%;
  font-weight: bold;
  height: 67px;
  background-color: white;
  margin-bottom: 20px;
  border-radius: 5px;
  color: #3a4658;
  font-size: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NewButton = styled(Button)`
  margin-top: 20px;
  width: 88%;
  font-size: 16px;
`;

const CustomSectionTitle = styled(SectionTitle)`
  font-size: 64px;
`;

const CustomOverTitle = styled(OverTitle)`
  font-size: 36px;
  margin-top: 2rem !important;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const NewImage = styled(NextImage)`
  width: 700px;
  height: 650px;
`;

const SectionTitleWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 60px;
  flex-direction: row;
  width: 45%;
`;

const SectionSvgWrapper = styled(Container)`
  display: flex;
  align-items: center;
  min-height: calc(100vh - 10rem);
  flex-direction: row;
  max-width: 95% !important;
`;

const ImageContainer = styled.div`
  flex: 1;

  & > div::before {
    overflow: auto;
  }

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const NImage = styled(Image)`
  width: 50px;
  height: 50px;
  flex: 1;
`;

const ButtonImage = styled(Image)`
  padding: 20px !important;
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
