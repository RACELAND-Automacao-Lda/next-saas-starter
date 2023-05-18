// import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import SectionSvgAnimation from 'components/SectionSvgAnimation';
import SectionSvg from 'components/SectionSvg';
import { EnvVars } from 'env';
import isMobile from 'hooks/isMobile';
import useMySwipeHandlers from 'hooks/useMySwipeHandlers';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Partners from 'views/HomePage/Partners';
// import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
// import Testimonials from 'views/HomePage/Testimonials';

import Lottie from 'react-lottie-player';
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'
import lottieJson from '/public/homepage/Header_3.json';
// import Features from 'views/HomePage/Features';
// import FeaturesGallery from 'views/HomePage/FeaturesGallery';
// import Hero from 'views/HomePage/Hero';

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
      <div id="section1" {...useMySwipeHandlers('section2', '', true)}>
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
      <div id="section2" {...useMySwipeHandlers('section3', 'section1', true)}>
        <SectionSvg
          imageUrl="/inovation.svg"
          title="Nós somos a"
          titleBold="inovação"
          overTitle1="Os nossos princípios estão na privacidade e na ética."
          overTitle2="Procurando sempre contribuir para a comunidade."
          reversed={true}
        ></SectionSvg>
      </div>

      <div id="section3" {...useMySwipeHandlers('section4', 'section2', true)}></div>

      <div id="section4" {...useMySwipeHandlers('section5', 'section3', true)}>
        <Cta />
      </div>

      <div id="section5" {...useMySwipeHandlers('', 'section4', false)}>
        <BasicSection imageUrl="/demo-illustration-1.svg" title="Lorem ipsum dolor sit amet consectetur." overTitle="sit amet gogo">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore
            voluptate quo deleniti animi laboriosam.
          </p>
        </BasicSection>
      </div>
    </>
  );
};

export default Homepage;

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;
/*
const ScrollContainer = styled.div`
  min-height: calc(100vh - 6rem);
  overflow-y: scroll;
  scroll-behavior: smooth;
  -webkit-scroll-snap-type: y mandatory;
  -ms-scroll-snap-type: y mandatory;
  scroll-snap-type: y mandatory;
`;

const ScrollArea = styled.div`
  scroll-snap-align: start;
`;*/

export async function getStaticProps({ req }) {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
/** 
          <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Lorem ipsum dolor sit amet consectetur." overTitle="sit amet gogo">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore
              voluptate quo deleniti animi laboriosam.{' '}
              <Link href="/help-center">Possimus ullam velit rem itaque consectetur, in distinctio?</Link> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Soluta repellendus quia quos obcaecati nihil. Laudantium non accusantium, voluptate eum nesciunt
              at suscipit quis est soluta?
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Lorem ipsum dolor sit." overTitle="lorem ipsum" reversed>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore{' '}
              <strong>voluptate quo deleniti animi laboriosam</strong>. Possimus ullam velit rem itaque consectetur, in distinctio?
            </p>
            <ul>
              <li>Professional point 1</li>
              <li>Professional remark 2</li>
              <li>Professional feature 3</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
 */
