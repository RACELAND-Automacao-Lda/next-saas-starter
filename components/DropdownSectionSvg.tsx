import NextImage from 'next/image';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import isMobile from 'hooks/isMobile';
import { media } from 'utils/media';
import Container from './Container';
import DottedList from './DottedList';
import OverTitle from './OverTitle';
import StyledList from './StyledList';

export interface DropdownSectionSvgProps {
  imageUrl: string;
  title: string;
  overTitle1?: string;
  overTitle2?: string;
  overTitle3?: string;
  dotlist?: string[];
  reversed?: boolean;
}

export default function DropdownSectionSvg({
  imageUrl,
  title,
  overTitle1,
  overTitle2,
  overTitle3,
  dotlist,
  reversed,
}: PropsWithChildren<DropdownSectionSvgProps>) {
  return (
    <Wrapper>
      <SectionSvgWrapper reversed={reversed}>
        <ContentContainer reversed={reversed}>
          <Title>{title}</Title>
          <CustomOverTitle>{overTitle1}</CustomOverTitle>
          <CustomOverTitle>{overTitle2}</CustomOverTitle>
          <CustomOverTitle>{overTitle3}</CustomOverTitle>
          {dotlist && (
            <>
              <StyledList>
                <DottedList isOpened={false} dotlist={dotlist} />
              </StyledList>
            </>
          )}
        </ContentContainer>
        <ImageContainer>
          <NewImage src={imageUrl} alt={title} layout="fill" />
        </ImageContainer>
      </SectionSvgWrapper>
    </Wrapper>
  );
}

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 2rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  font-size: 16px;
`;

const NewImage = styled(NextImage)`
  height: 200px;
  width: 200px;
`;

const ImageContainer = styled.div`
  height: 200px;
  width: 200px;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

type ContentProps = Pick<DropdownSectionSvgProps, 'reversed'>;
const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${(p: ContentProps) => (p.reversed ? 'flex-end' : 'flex-start')};
  max-width: 60%;
`;

type Props = Pick<DropdownSectionSvgProps, 'reversed'>;
const SectionSvgWrapper = styled(Container)`
  display: flex;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding-left: 5rem;
  padding-right: 5rem;
  flex-direction: ${(p: Props) => (p.reversed ? 'row-reverse' : 'row')};
  text-align: ${(p: Props) => (p.reversed ? 'right' : 'left')};
  justify-content: space-between;
  ${media('<=desktop')} {
    flex-direction: column;

    ${ImageContainer} {
      margin: 0 0 2.5rem 0;
    }
  }
`;
