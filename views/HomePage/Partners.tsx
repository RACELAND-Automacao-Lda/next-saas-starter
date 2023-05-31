import NextImage from 'next/image';
import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import { media } from 'utils/media';
import { ThemeContext } from '/contexts/ThemeContext';

const PARTNER_LOGOS = [
  '1_Home_assistant_light.png',
  '2_KNX.png',
  '3_Zigbee_light.png',
  '4_Zwave.png',
  '5 - Ubiquiti.svg',
  '6_MikroTik_light.png',
  '7_Wago.png',
  '8_Siemens.png',
  '9_Ubuntu_light.png',
];

const PARTNER_LOGOS_dark = [
  '1_Home_assistant.png',
  '2_KNX.png',
  '3_Zigbee.png',
  '4_Zwave.png',
  '5 - Ubiquiti Tema Escuro.svg',
  '6_MikroTik.png',
  '7_Wago.png',
  '8_Siemens.png',
  '9 _Ubuntu.png',
];

export default function Partners() {
  const { themeMode, setTheme } = useContext<{ themeMode: string; setTheme: (themeMode: string) => void }>(ThemeContext);
  return (
    <PartnersWrapper>
      <Title>os nossos parceiros</Title>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={9}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: false, stopOnLastSlide: false }}
        speed={3000}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1025: { slidesPerView: 6 },
        }}
        className="swiper-wrapper"
      >
        {themeMode === 'light' &&
          PARTNER_LOGOS.map((logo) => (
            <SwiperSlide key={logo}>
              <NextImage src={'/partners/' + logo} alt={normalizePartnerLogoName(logo)} width={1500} height={1500} />
            </SwiperSlide>
          ))}
        {themeMode === 'dark' &&
          PARTNER_LOGOS_dark.map((logo) => (
            <SwiperSlide key={logo}>
              <NextImage src={'/partners/' + logo} alt={normalizePartnerLogoName(logo)} width={1500} height={1500} />
            </SwiperSlide>
          ))}
      </Swiper>
    </PartnersWrapper>
  );
}

function normalizePartnerLogoName(logo: string) {
  return logo.replace('.png', '');
}

const Title = styled.h3`
  font-size: 1.3rem;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  text-align: center;
  color: rgb(var(--text));

  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;

const PartnersWrapper = styled(Container)`
  padding: 0 2rem;
  padding-bottom: 2rem;

  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    user-select: none;
  }

  .swiper-slide {
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;
