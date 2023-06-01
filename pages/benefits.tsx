import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import Container from 'components/Container';
import SectionImgMobile from 'components/mobile/SectionImgMobile';
import SectionRowMainMobile from 'components/mobile/SectionRowMainMobile';
import SectionRowSecondMobile from 'components/mobile/SectionRowSecondMobile';
import SectionImgButton from 'components/SectionImgButton';
import SectionRowMain from 'components/SectionRowMain';
import SectionRowSecond from 'components/SectionRowSecond';
import SectionTitle from 'components/SectionTitle';
import isMobile from 'hooks/isMobile';

export default function BenefitsPage() {
  return (
    <>
      {!isMobile() ? (
        <>
          <SectionImgButton
            imageUrl="/3.png"
            title1="O futuro na sua"
            title2="casa"
            overTitle="Benefícios de Sistemas de Domótica"
            reversed={false}
            buttonText="Ver Serviços"
          ></SectionImgButton>
          <SectionRowMain
            imageUrl="/conveniencia.png"
            title="Conveniência"
            overTitle="A tecnologia de casas inteligentes permite que  controle seus eletrodomésticos e dispositivos a partir do seu telemóvel, tablet ou assistente de voz. Pode desligar as luzes, ajustar a temperatura, trancar as portas e muito mais, tudo a partir da nossa aplicação."
          ></SectionRowMain>
          <SectionRowSecond
            imageUrl="/economia.png"
            title="Economia"
            overTitle="Termostatos inteligentes podem aprender a sua rotina e preferências e ajustar a temperatura de acordo, o que pode levar a uma economia significativa de energia. Também pode monitorar o consumo de energia e ajustar o uso para optimizar a eficiência energética."
          ></SectionRowSecond>
          <SectionRowMain
            imageUrl="/seguranca.png"
            title="Segurança"
            overTitle="Sistemas de segurança de casas inteligentes permitem a monotorização da sua casa remotamente, receber alertas quando alguém entra ou sai e até mesmo ver imagens ao vivo das câmeras de segurança.  Também pode controlar quem tem acesso à sua casa."
          ></SectionRowMain>
          <SectionRowSecond
            imageUrl="/acessibilidade.png"
            title="Acessiblidade"
            overTitle="A tecnologia de domótica pode ajudar pessoas com deficiências ou mobilidade limitada a controlar a sua casa com mais facilidade. "
          ></SectionRowSecond>
          <SectionRowMain
            imageUrl="/valorizacao.png"
            title="Valorização"
            overTitle="Serviços de domótica pode aumentar o valor da sua casa, tornando-a mais atraente para potenciais compradores se  decidir vendê-la no futuro."
          ></SectionRowMain>
          <ContainerButton>
            <Title>Interessado em trazer o futuro para a sua casa?</Title>
            <NextLink href="/domotic" passHref>
              <NewButton>Ver Serviços</NewButton>
            </NextLink>
          </ContainerButton>
        </>
      ) : (
        <>
          <SectionImgMobile title="O futuro na sua sua casa" overTitle="Benefícios de Sistemas de Domótica"></SectionImgMobile>
          <SectionRowMainMobile
            imageUrl="/conveniencia_mobile.png"
            title="Conveniência"
            overTitle="A tecnologia de casas inteligentes permite que  controle seus eletrodomésticos e dispositivos a partir do seu telemóvel, tablet ou assistente de voz. Pode desligar as luzes, ajustar a temperatura, trancar as portas e muito mais, tudo a partir da nossa aplicação."
          ></SectionRowMainMobile>
          <SectionRowSecondMobile
            imageUrl="/economia_mobile.png"
            title="Economia"
            overTitle="Termostatos inteligentes podem aprender a sua rotina e preferências e ajustar a temperatura de acordo, o que pode levar a uma economia significativa de energia. Também pode monitorar o consumo de energia e ajustar o uso para optimizar a eficiência energética."
          ></SectionRowSecondMobile>
          <SectionRowMainMobile
            imageUrl="/security_mobile.png"
            title="Segurança"
            overTitle="Sistemas de segurança de casas inteligentes permitem a monotorização da sua casa remotamente, receber alertas quando alguém entra ou sai e até mesmo ver imagens ao vivo das câmeras de segurança.  Também pode controlar quem tem acesso à sua casa."
          ></SectionRowMainMobile>
          <SectionRowSecondMobile
            imageUrl="/acess_mobile.png"
            title="Acessiblidade"
            overTitle="A tecnologia de domótica pode ajudar pessoas com deficiências ou mobilidade limitada a controlar a sua casa com mais facilidade. "
          ></SectionRowSecondMobile>
          <SectionRowMainMobile
            imageUrl="/valori_mobile.png"
            title="Valorização"
            overTitle="Serviços de domótica pode aumentar o valor da sua casa, tornando-a mais atraente para potenciais compradores se  decidir vendê-la no futuro."
          ></SectionRowMainMobile>
          <ContainerButton>
            <TitleBenefits>Interessado em trazer o futuro para a sua casa?</TitleBenefits>
            <NextLink href="/domotic" passHref>
              <NewButton>Ver Serviços</NewButton>
            </NextLink>
          </ContainerButton>
        </>
      )}
    </>
  );
}

const NewButton = styled(Button)`
  margin-top: 25px;
  width: 295px;
  font-size: 16px;
`;

const Title = styled(SectionTitle)`
  color: rgb(var(--text));
  margin-bottom: 4rem;
`;

const TitleBenefits = styled(SectionTitle)`
  color: rgb(var(--text));
  margin-bottom: 4rem;
  line-height: 1.5;
`;

const ContainerButton = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 600px;
`;
