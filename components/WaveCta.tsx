import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';

export default function WaveCta() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#0A121E"
          fillOpacity="1"
          d="M0,64L80,58.7C160,53,320,43,480,80C640,117,800,203,960,197.3C1120,192,1280,96,1360,48L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <CtaWrapper>
        <ContainerDiv>
          <Title>Tem algo para nos dizer?</Title>
          <NextLink href="/contact" passHref>
            <NewButton>Contacte-nos</NewButton>
          </NextLink>
        </ContainerDiv>
      </CtaWrapper>
    </>
  );
}

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
  margin-top: -1rem;
  padding-bottom: 16rem;

  ${media('<=tablet')} {
    padding-top: 8rem;
  }
`;

const Title = styled(SectionTitle)`
  color: rgb(var(--textSecondary));
  margin-bottom: 4rem;

  ${media('<=tablet')} {
    padding-top: 8rem;
    line-height: 1.5;
  }
`;

const ContainerDiv = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 200px;
`;

const NewButton = styled(Button)`
  margin-top: 25px;
  width: 80vw;
  max-width: 295px;
  font-size: 16px;
`;
