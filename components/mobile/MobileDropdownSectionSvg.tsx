import NextImage from 'next/image';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import MobileDottedList from './MobileDottedList';
import Container from '../Container';
import DottedList from '../DottedList';
import OverTitle from '../OverTitle';
import StyledList from '../StyledList';

export interface MobileDropdownSectionSvgProps {
  imageUrl: string;
  title: string;
  overTitle1?: string;
  overTitle2?: string;
  overTitle3?: string;
  dotlist?: string[];
}

export default function MobileDropdownSectionSvg({
  imageUrl,
  title,
  overTitle1,
  overTitle2,
  overTitle3,
  dotlist,
}: PropsWithChildren<MobileDropdownSectionSvgProps>) {
  return (
    <Wrapper>
      <SectionSvgWrapper>
        <ContentContainer>
          <TitleWrapper>
            <ImageContainer>
              <NewImage src={imageUrl} alt={title} layout="fill" />
            </ImageContainer>
            <Title>{title}</Title>
          </TitleWrapper>
          <CustomOverTitle>{overTitle1}</CustomOverTitle>
          <CustomOverTitle>{overTitle2}</CustomOverTitle>
          <CustomOverTitle>{overTitle3}</CustomOverTitle>
          {dotlist && (
            <>
              <MobileDottedList fontSize="16px" isOpened={false} dotlist={dotlist} />
            </>
          )}
        </ContentContainer>
      </SectionSvgWrapper>
    </Wrapper>
  );
}

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-left: 1.2rem;
  max-width: calc(100% - (50px + 4%));
`;

const CustomOverTitle = styled(OverTitle)`
  font-size: 16px;
`;

const NewImage = styled(NextImage)`
  height: 50px;
  width: 50px;
`;

const ImageContainer = styled.div`
  height: 50px;
  width: 50px;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  padding-bottom: 5rem;
  background: rgb(var(--dropdownColor));
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3rem;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SectionSvgWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: left;
  justify-content: space-between;
`;
