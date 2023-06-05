import styled from 'styled-components';
import AboutUs from 'components/AboutUs';
import AboutUsMobile from 'components/mobile/AboutUsMobile';
import PrivacyMobile from 'components/mobile/PrivacyMobile';
import SectionAboutMobile from 'components/mobile/SectionAboutMobile';
import SectionDistinctMobile from 'components/mobile/SectionDistinctMobile';
import Privacy from 'components/Privacy';
import SectionDistinct from 'components/SectionDistinct';
import SectionSvgAbout from 'components/SectionSvgAbout';
import isMobile from 'hooks/isMobile';

export default function AboutPage() {
  return (
    <>
      {!isMobile() ? (
        <AboutUs title="Sobre Nós">
          <Wrapper>
            <>
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
              ></SectionDistinct>
              <Privacy />
            </>
          </Wrapper>
        </AboutUs>
      ) : (
        <>
          <AboutUsMobile title="Sobre Nós">
            <Wrapper>
              <SectionAboutMobile
                title="Quem somos?"
                overTitle="Somos um grupo diversificado de pensadores e realizadores, a reinventar continuamente os nossos produtos e práticas para ajudar as pessoas de novas maneiras."
              ></SectionAboutMobile>
              <SectionDistinctMobile
                title="O que nos destingue"
                overTitle1="Contribuição para recursos open source"
                overTitle2="Privacidade e respeito pelo cliente"
                overTitle3="Garantia que o cliente mantém controle sobre a sua informação"
              ></SectionDistinctMobile>
              <PrivacyMobile />
            </Wrapper>
          </AboutUsMobile>
        </>
      )}
    </>
  );
}

const Wrapper = styled.div`
  background: rgb(var(--navbarBackground));
  & > :last-child {
    margin-bottom: 15rem;
  }
`;
