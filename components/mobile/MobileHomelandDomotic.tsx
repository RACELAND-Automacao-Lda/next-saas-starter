import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import NextImage from 'next/image';
import Image from 'next/image';
import NextLink from 'next/link';
import Button from 'components/Button';
import Container from 'components/Container';
import ContainerFull from 'components/ContainerFull';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';
import RedirectButtonInteractive from '/components/mobile/RedirectButtonInteractive';
import RedirectButton2 from '/components/mobile/RedirectButton2';
export interface MobileHomelandDomoticProps {
  imageUrl: string;
}

export default function MobileHomelandDomotic({ imageUrl }: PropsWithChildren<MobileHomelandDomoticProps>) {
  return (
    <Wrapper>
      <SectionTitleWrapper>
        <NImage src={imageUrl} alt="Homeland" width="50" height="50" />
        <CustomSectionTitle>Homeland</CustomSectionTitle>
      </SectionTitleWrapper>
      <CustomOverTitle>A sua casa na palma da sua mão</CustomOverTitle>
      <ContentContainer>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
  height: calc(50vh - 6rem);
  background: rgb(var(--inputBackground));
`;

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
`;

const CustomSectionTitle = styled(SectionTitle)`
  font-size: 44px;
  margin-left: 1rem;
`;

const CustomOverTitle = styled(OverTitle)`
  font-size: 16px;
  margin-top: 1.5rem;
  margin-bottom: 30px;
  margin-left: 5%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 0 10%;
`;

const SectionTitleWrapper = styled(ContainerFull)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  max-height: 60px;
  flex-direction: row;
  width: 340px;
  padding: 0;
  margin-left: 3%;
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
