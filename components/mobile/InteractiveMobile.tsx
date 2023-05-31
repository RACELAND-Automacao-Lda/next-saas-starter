import NextImage from 'next/image';
import Image from 'next/image';
import NextLink from 'next/link';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import ContainerFull from 'components/ContainerFull';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';
import RedirectButtonInteractive from '/components/mobile/RedirectButtonInteractive';
import RedirectButton2 from '/components/mobile/RedirectButton2';

export interface InteractiveMobileProps {
  imageUrl1: string;
  imageUrl2: string;
}

export default function InteractiveMobile({ imageUrl1, imageUrl2 }: PropsWithChildren<InteractiveMobileProps>) {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <SectionTitleWrapper>
            <NImage src={imageUrl1} alt="Homeland" width="55" height="55" />
            <CustomSectionTitle>Homeland</CustomSectionTitle>
          </SectionTitleWrapper>
          <CustomOverTitle>A sua casa na palma da sua mão</CustomOverTitle>
          <SectionSvgWrapper>
            <ContentContainer>
              <ButtonDiv>
                <ButtonImage src="/1.svg" alt="Homeland" width="40" height="40" />
                <Nspan>Simples, Prático e Seguro</Nspan>
              </ButtonDiv>
              <ButtonDiv>
                <ButtonImage src="/2.svg" alt="Homeland" width="40" height="40" />
                <Nspan>Controle a sua casa em qualquer lugar</Nspan>
              </ButtonDiv>
              <ButtonDiv>
                <ButtonImage src="/3.svg" alt="Homeland" width="40" height="40" />
                <Nspan>Tudo o que precisa num só lugar</Nspan>
              </ButtonDiv>
              <NextLink href="/domotic" passHref>
                <NewButton>Saiba Mais</NewButton>
              </NextLink>
              <GroupDiv>
                <ButtonsRedirectGroup>
                  <RedirectButtonInteractive
                    url="https://play.google.com/store/apps/details?id=io.homeland.companion.android&hl=pt-PT"
                    svg="/GooglePlayMobile.svg"
                  ></RedirectButtonInteractive>
                  <RedirectButton2 url="https://apps.apple.com/pt/app/homeland/id1658547571" svg="/PlayStoreMobile.svg"></RedirectButton2>
                </ButtonsRedirectGroup>
              </GroupDiv>
            </ContentContainer>
            <ImageContainer>
              <NextImage src={imageUrl2} width="342" height="342" />
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
  justify-content: space-between;
  width: 100%;
  height: 60px;
  margin-bottom: 30px;
`;
const GroupDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
`;

const ButtonDiv = styled.div`
  width: 100%;
  height: 67px;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 5px;
  color: #3a4658;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    overflow: initial;
  }
  & > span::before {
    overflow: initial;
  }
  & > span {
    overflow: initial;
  }
`;

const NewButton = styled(Button)`
  margin-top: 10px;
  width: 100%;
  font-size: 16px;
`;

const CustomSectionTitle = styled(SectionTitle)`
  font-size: 44px;
`;

const CustomOverTitle = styled(OverTitle)`
  font-size: 16px;
  margin-top: 1.5rem !important;
  margin-bottom: 30px;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
`;

const SectionTitleWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 60px;
  flex-direction: row;
  width: 340px;
  padding: 0 !important;
`;

const SectionSvgWrapper = styled(ContainerFull)`
  display: flex;
  align-items: center;
  min-height: calc(100vh - 10rem);
  flex-direction: column;
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

const Nspan = styled.span`
  width: 67%;
  text-align: left;
`;

const ButtonImage = styled(Image)`
  margin-right: 37% !important;
  padding-left: 15px !important;
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
