import Head from 'next/head';
import styled from 'styled-components';
import SectionSvgAnimation from 'components/SectionSvgAnimation';
import SectionSvg from 'components/SectionSvg';
import SectionBenefits from 'components/SectionBenefits';
import SectionPartnersMobile from 'components/mobile/SectionPartnersMobile';
import InteractiveMobile from 'components/mobile/InteractiveMobile';
import SectionBenefitsMobile from 'components/mobile/SectionBenefitsMobile';
import SectionInovation from 'components/mobile/SectionInovation';
import { EnvVars } from 'env';
import isMobile from 'hooks/isMobile';
import useMySwipeHandlers from 'hooks/useMySwipeHandlers';
import { getAllPosts } from 'utils/postsFetcher';
import Interactive from '/components/Interactive';
import lottieJson from '/public/homepage/Header_3.json';

const Section1 = () => {
  const swipeHandlers = useMySwipeHandlers('section2', '', -95, -60, true);

  return (
    <div id="section1" {...swipeHandlers}>
      <SectionSvgAnimation
        svg={lottieJson}
        loop={false}
        title="Raceland Automação"
        overTitle="Serviços de Automação e Consultoria"
        width={700}
        height={650}
        top="-45%"
      ></SectionSvgAnimation>
    </div>
  );
};

const Section2 = () => {
  const swipeHandlers = useMySwipeHandlers('section3', 'section1', 60, -50, true);

  return (
    <div id="section2" {...swipeHandlers}>
      <SectionSvg
        imageUrl="/inovation.svg"
        title="Nós somos a"
        titleBold="inovação"
        overTitle1="Os nossos princípios estão na privacidade e na ética."
        overTitle2="Procurando sempre contribuir para a comunidade."
        reversed={true}
      ></SectionSvg>
    </div>
  );
};

const Section3 = () => {
  const swipeHandlers = useMySwipeHandlers('section4', 'section2', +50, -100, true);

  return (
    <div id="section3" {...swipeHandlers}>
      <Interactive imageUrl1="/icon.svg" imageUrl2="/Homeland.svg"></Interactive>
    </div>
  );
};

const Section4 = () => {
  const swipeHandlers = useMySwipeHandlers('', 'section3', 20, 0, false);

  return (
    <div id="section4" {...swipeHandlers}>
      <SectionBenefits
        imageUrl="/3.png"
        title1="Porquê ter uma"
        title2="casa inteligente?"
        overTitle="Descubra as muitas vantagens da automação residencial e assuma o controle da sua casa como nunca antes."
        reversed={true}
      ></SectionBenefits>
    </div>
  );
};

const Section1Mobile = () => {
  const swipeHandlers = useMySwipeHandlers('section2', '', -15, -150, true);

  return (
    <div id="section1" {...swipeHandlers}>
      <SectionPartnersMobile title="Raceland Automação" overTitle="Serviços de Automação e Consultoria" />
    </div>
  );
};

const Section2Mobile = () => {
  return (
    <div id="section2">
      <SectionInovation
        title="Nós somos a"
        titleBold="inovação"
        overTitle="Os nossos princípios estão na privacidade e na ética. Procurando sempre contribuir para a comunidade."
      />
    </div>
  );
};

const Section3Mobile = () => {
  return (
    <div id="section3">
      <InteractiveMobile imageUrl1="/icon.svg" imageUrl2="/Phone.png"></InteractiveMobile>
    </div>
  );
};

const Section4Mobile = () => {
  return (
    <div id="section4">
      <SectionBenefitsMobile
        title="Porquê ter uma casa inteligente?"
        overTitle="Descubra as muitas vantagens da automação residencial e assuma o controle da sua casa como nunca antes."
      ></SectionBenefitsMobile>
    </div>
  );
};

const Homepage = () => {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      {!isMobile() ? (
        <>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </>
      ) : (
        <>
          <Section1Mobile />
          <Section2Mobile />
          <Section3Mobile />
          <Section4Mobile />
        </>
      )}
    </>
  );
};

export default Homepage;

export async function getStaticProps({ req }) {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
