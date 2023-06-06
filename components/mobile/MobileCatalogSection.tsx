import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function MobileCatalogSection() {
  return (
    <>
      <CtaWrapper>
        <ContainerDiv>
          <Title>Veja o nosso catálogo de serviços</Title>
          <NextLink href="/Catalogo-de-Servicos.pdf" passHref>
            <NewButton>Ver catálogo</NewButton>
          </NextLink>
        </ContainerDiv>
      </CtaWrapper>
    </>
  );
}

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
  margin-top: -1rem;
  min-height: 50vh;    
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled(SectionTitle)`
  color: rgb(var(--textSecondary));
  margin-bottom: 3rem;
  text-align: left;
  font-size: 44px;

  ${media('<=tablet')} {
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
  margin-top: 0px;
  width: 95%;
  height: 55px;
  font-size: 15px;
`;
