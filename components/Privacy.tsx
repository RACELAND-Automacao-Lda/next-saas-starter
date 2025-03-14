import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';

export default function Privacy() {
  return (
    <>
      <CtaWrapper>
        <ContainerDiv>
          <Title>Política de Qualidade</Title>
          <SubTitle>Missão</SubTitle>
          <CustomOverTitle>
            Atuar como uma organização profissional, procurando ser uma das primeiras escolhas dos clientes, em todas as regiões em que
            opera através de:
          </CustomOverTitle>
          <CustomOverTitle>
            <BulletPoint />
            Produção de bons resultados e melhorar sempre a rentabilidade, mediante uma prestação de serviços que vão ao encontro do
            esperado pelo cliente;
          </CustomOverTitle>
          <CustomOverTitle>
            <BulletPoint />
            Priveligiar a mobilidade e pluridisciplinaridade;
          </CustomOverTitle>
          <CustomOverTitle>
            <BulletPoint />
            Promoção de um ambiente de trabalho inspirador que propicie o espírito de equipa, a comunicação aberta e uma mentalidade
            orientada para os processos e para a inovação;
          </CustomOverTitle>
          <CustomOverTitle>
            <BulletPoint />
            Construção de vantagens competitivas, com base na experiência, no conhecimento e nas qualificações, através do desenvolvimento
            do potencial do seu recurso humano.
          </CustomOverTitle>
          <SubTitle>Visão</SubTitle>
          <CustomOverTitle>
            Ser reconhecido pelo mercado nacional como um parceiro fiável, competente, estratégico, responsável, viabilizando uma boa
            relação preço/qualidade. Inovação, qualidade e originalidade, são as pedras basilares da nossa atuação para o fornecimento de
            produtos e serviços.
          </CustomOverTitle>
          <SubTitle>Valores</SubTitle>
          <CustomOverTitleBold>
            <b>Integridade </b>– Trabalhamos com os nossos clientes, atuais e potenciais, assim como com os nossos fornecedores de forma
            aberta, honesta e sincera;
          </CustomOverTitleBold>
          <CustomOverTitleBold>
            <b>Responsabilidade social da Empresa </b>– Trabalhamos para melhorar as condições de integração dos nossos colaboradores e no
            sentido de obter um melhor desempenho de acordo com as mais modernas exigências relativas às questões sociais e económicas
            locais;
          </CustomOverTitleBold>
          <CustomOverTitleBold>
            <b> Comunicação </b>– Acreditamos que a informação existe para ser partilhada e fazer movimentar as pessoas, atendendo aos
            objetivos centrais de desempenho da empresa;
          </CustomOverTitleBold>
          <CustomOverTitleBold>
            <b>Conhecimento </b>– Apostamos na formação contínua e na especialização dos nossos recursos humanos como modo de valorização
            profissional.
          </CustomOverTitleBold>
          <SubTitle>Orientação Estratégica</SubTitle>
          <CustomOverTitle>
            <BulletPoint />
            Apostar na gestão por objetivos, no planeamento e controlo dinâmico do desempenho dos processos e na sua melhoria contínua;
          </CustomOverTitle>
          <CustomOverTitle>
            <BulletPoint />
            Identificar e avaliar continuamente as necessidades e expectativas dos clientes e outras partes interessadas relevantes, criando
            condições para ir ao seu encontro;
          </CustomOverTitle>
          <CustomOverTitle>
            <BulletPoint />
            Envolver toda a organização na concretização da nossa Missão, Política e Valores;
          </CustomOverTitle>
          <CustomOverTitle>
            <BulletPoint />
            Garantir adequada competência dos colaboradores, proporcionando-lhes a formação adequada;
          </CustomOverTitle>
          <CustomOverTitle>
            <BulletPoint />
            Realizar os nossos serviços em conformidade com todas as disposições legais em vigor;
          </CustomOverTitle>
          <CustomOverTitle>
            <BulletPoint />
            Pugnar pela ética e respeito nos negócios a realizar;
          </CustomOverTitle>
          <CustomOverTitle>
            <BulletPoint />
            Estimular uma postura de melhoria contínua da organização e SGQ.
          </CustomOverTitle>
          <SubTitle>Objetivos da qualidade</SubTitle>
          <CustomOverTitle>
            Os objetivos são tipicamente suportados por métricas que integram indicadores quantificados e metas associadas. Estas são
            supervisionadas periodicamente, a partir do seu enquadramento com a Política da Qualidade. Assim são acompanhados os resultados
            do desempenho dos Processos identificados para o Sistema de Gestão da Qualidade.
          </CustomOverTitle>
          <CustomOverTitle>
            Para tal, são implementados os mecanismos considerados como os mais apropriados a essa supervisão. Os resultados são analisados
            durante reuniões de gestão, nomeadamente nas de Revisão do Sistema.
          </CustomOverTitle>
          <SubTitle>Política de privacidade da Raceland Automação</SubTitle>
          <CustomOverTitle>
            Consulte ainda a nossa política de privacidade, <CustomSpan> </CustomSpan>
            <a href="https://raceland.pt" style={{ color: '#4d91ff' }}>
              {' '}
              clicando aqui
            </a>{' '}
            .
          </CustomOverTitle>
        </ContainerDiv>
      </CtaWrapper>
    </>
  );
}

const CtaWrapper = styled.div`
  margin-top: 15rem;
  padding-bottom: 16rem;

  ${media('<=tablet')} {
    padding-top: 8rem;
  }
`;

const CustomSpan = styled.span`
  min-width: 5px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const BulletPoint = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  background-color: #4d91ff;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const CustomOverTitle = styled(OverTitle)`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
  justify-content: flex-start;
`;

const CustomOverTitleBold = styled(OverTitle)`
  width: 100%;
  font-size: 14px;
  margin-bottom: 1rem;
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  color: #4d91ff;
  font-weight: bold;
  font-size: 36px;
  width: 100%;
  align-items: flex-start;
  margin: 2rem 0;
`;

const Title = styled(SectionTitle)`
  color: rgb(var(--textPrimary));
  margin-bottom: 4rem;
`;

const ContainerDiv = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NewButton = styled(Button)`
  margin-top: 25px;
  width: 80vw;
  max-width: 295px;
  font-size: 16px;
`;
