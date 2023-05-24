import styled from 'styled-components';
import AboutUs from 'components/AboutUs';
import Privacy from 'components/Privacy';
import SectionDistinct from 'components/SectionDistinct';
import SectionSvgAbout from 'components/SectionSvgAbout';
import FaqSection from 'views/PricingPage/FaqSection';

export default function AboutPage() {
  return (
    <AboutUs title="Sobre Nós">
      <Wrapper>
        <SectionSvgAbout
          imageUrl="/Logo.svg"
          title="Quem somos?"
          overTitle="Somos um grupo diversificado de pensadores e realizadores, a reinventar continuamente os nossos produtos e práticas para ajudar as pessoas de novas maneiras."
          reversed={true}
        ></SectionSvgAbout>
        <SectionDistinct
          title="O que nos destingue"
          overTitle1="Contribuição para recursos open source"
          overTitle2="Privacidade e respeito pelo cliente"
          overTitle3="Garantia que o cliente mantém controle sobre a sua informação"
          reversed={false}
        ></SectionDistinct>
        <Privacy />
      </Wrapper>
    </AboutUs>
  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;
