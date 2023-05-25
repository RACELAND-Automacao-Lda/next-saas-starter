import Head from 'next/head';
import styled from 'styled-components';
import SectionSvgAnimation from 'components/SectionSvgAnimation';
import SectionSvg from 'components/SectionSvg';
import SectionBenefits from 'components/SectionBenefits';
import { EnvVars } from 'env';
import isMobile from 'hooks/isMobile';
import useMySwipeHandlers from 'hooks/useMySwipeHandlers';
import { getAllPosts } from 'utils/postsFetcher';
import Partners from 'views/HomePage/Partners';
import Interactive from '/components/Interactive';
import lottieJson from '/public/homepage/Header_3.json';

//{isMobile() && <Partners />}
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
      <div id="section1" {...useMySwipeHandlers('section2', '', -95, -60, true)}>
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
      <div id="section2" {...useMySwipeHandlers('section3', 'section1', 60, -50, true)}>
        <SectionSvg
          imageUrl="/inovation.svg"
          title="Nós somos a"
          titleBold="inovação"
          overTitle1="Os nossos princípios estão na privacidade e na ética."
          overTitle2="Procurando sempre contribuir para a comunidade."
          reversed={true}
        ></SectionSvg>
      </div>

      <div id="section3" {...useMySwipeHandlers('section4', 'section2', +50, -100, true)}>
        <Interactive imageUrl1="/icon.svg" imageUrl2="/Homeland.svg"></Interactive>
      </div>

      <div id="section4" {...useMySwipeHandlers('', 'section3', 20, 0, false)}>
        <SectionBenefits
          imageUrl="/4.svg"
          title1="Porquê ter uma"
          title2="casa inteligente?"
          overTitle="Descubra as muitas vantagens da automação residencial e assuma o controle da sua casa como nunca antes."
          reversed={true}
        ></SectionBenefits>
      </div>
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
