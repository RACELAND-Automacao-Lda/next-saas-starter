import NextImage from 'next/image';
import NextLink from 'next/link';
import React, { PropsWithChildren, useContext } from 'react';
import Lottie from 'react-lottie-player';
import styled from 'styled-components';
import Button from 'components/Button';
import isMobile from 'hooks/isMobile';
import { media } from 'utils/media';
import Partners from 'views/HomePage/Partners';
import Container from './Container';
import OverTitle from './OverTitle';
import RichText from './RichText';
import RedirectButton from '/components/RedirectButton2';
import { ThemeContext } from '/contexts/ThemeContext';

export interface HomelandSectionProps {
  imageUrl: string;
  imageUrlDark: string;
  title: string;
  subtitle: string;
  reversed?: boolean;
}

export default function HomelandSection({ imageUrl, imageUrlDark, title, subtitle, reversed }: PropsWithChildren<HomelandSectionProps>) {
  const { themeMode, setTheme } = useContext<{ themeMode: string; setTheme: (themeMode: string) => void }>(ThemeContext);

  return (
    <Wrapper>
      <SectionSvgWrapper reversed={reversed}>
        <ContentContainer>
          <Title>{title}</Title>
          <CustomOverTitle>{subtitle}</CustomOverTitle>
          <ButtonsRedirectGroup>
            <RedirectButton
              url="https://play.google.com/store/apps/details?id=io.homeland.companion.android&hl=pt-PT"
              svg="/domotica/Google_Play.png"
            ></RedirectButton>
            <RedirectButton url="https://apps.apple.com/pt/app/homeland/id1658547571" svg="/domotica/App_Store.png"></RedirectButton>
          </ButtonsRedirectGroup>
        </ContentContainer>
        <ImageContainer>
          {themeMode === 'light' && <NewImage src={imageUrl} alt={title} width="450" height="450" />}
          {themeMode === 'dark' && <NewImage src={imageUrlDark} alt={title} width="450" height="450" />}
        </ImageContainer>
      </SectionSvgWrapper>
    </Wrapper>
  );
}

const Title = styled.h1`
  font-size: 64px;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 2rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const TitleBold = styled(Title)`
  color: #4d91ff;
`;

const CustomOverTitle = styled(OverTitle)`
  font-size: 36px;
`;

const NewButton = styled(Button)`
  margin-top: 50px;
  width: 295px;
  font-size: 16px;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
`;

const NewImage = styled(NextImage)`
  width: 700px;
  height: 650px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

type Props = Pick<HomelandSectionProps, 'reversed'>;
const SectionSvgWrapper = styled(Container)`
  display: flex;
  align-items: center;
  min-height: calc(50vh - 10rem);
  flex-direction: ${(p: Props) => (p.reversed ? 'row-reverse' : 'row')};
`;

const ButtonsRedirectGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 69%;
  height: 60px;
`;
