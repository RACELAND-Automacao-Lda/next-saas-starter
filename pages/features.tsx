import styled from 'styled-components';
import FullPage from 'components/FullPage';
import SectionSvg from 'components/SectionSvg';
import SectionTitle from 'components/SectionTitle';
import ServiceDropdown from 'components/ServiceDropdown';

export default function FeaturesPage() {
  return (
    <>
      <FullPage title="Features" description="Elit aute do nisi Lorem id ea culpa sint duis eu tempor dolore elit.">
        <Wrapper>
          <SectionTitle>Check out this quick introduction</SectionTitle>
          <ServiceDropdown
            left={false}
            imagePath="/domotica/services/Iluminacao/Iluminacao.png"
            imageAlt="Iluminação"
            title="Iluminação"
            subtitle="A melhor forma de dar vida a sua casa"
            dotlist={['Luzes', 'Persianas', 'Cortinas']}
          >
            <SectionSvg
              imageUrl="/inovation.svg"
              title="Nós somos a"
              overTitle1="Os nossos princípios estão na privacidade e na ética."
              overTitle2="Procurando sempre contribuir para a comunidade."
              reversed={false}
            ></SectionSvg>

            <SectionSvg
              imageUrl="/inovation.svg"
              title="Nós somos a"
              overTitle1="Os nossos princípios estão na privacidade e na ética."
              overTitle2="Procurando sempre contribuir para a comunidade."
              reversed={true}
            ></SectionSvg>
          </ServiceDropdown>
          <ServiceDropdown
            left={true}
            imagePath="/domotica/services/seguranca/seguranca.png"
            imageAlt="Segurança"
            title="Segurança"
            subtitle="Proteção eficaz para o que valoriza"
            dotlist={['Alarmes e Sensores', 'Portões', 'Aplicação Homeland']}
          ></ServiceDropdown>
          <ServiceDropdown
            left={false}
            imagePath="/domotica/services/inteligencia/inteligencia.png"
            imageAlt="Inteligência Artificial"
            title="Inteligência Artificial"
            subtitle=""
            dotlist={['Segurança', 'Reconhecimento de hábitos', 'Face ID']}
          ></ServiceDropdown>
          <ServiceDropdown
            left={true}
            imagePath="/domotica/services/entretinemento/entretenimento.png"
            imageAlt="Entretinemento"
            title="Entretinemento"
            subtitle="Diversão e Relaxe da forma mais prática"
            dotlist={['Televisão', 'Coluna de som', 'Projetores']}
          ></ServiceDropdown>
          <ServiceDropdown
            left={false}
            imagePath="/domotica/services/climatizacao/climatizacao.png"
            fullImagePath="/domotica/services/climatizacao/fullclimatizacao.png"
            imageAlt="climatizacao"
            title="climatizacao"
            subtitle="climatizacao"
            dotlist={['Controlo remoto', 'Sensores de ambiente']}
          ></ServiceDropdown>
          <ServiceDropdown
            left={true}
            imagePath="/domotica/services/irrigacao/irrigacao.png"
            imageAlt="Irrigação"
            title="Irrigação"
            subtitle="Controlo e informação de forma prática"
            dotlist={['Temperatura', 'Clima', 'Humidade']}
          ></ServiceDropdown>
          <ServiceDropdown
            left={false}
            imagePath="/domotica/services/zigbee/zigbee.png"
            imageAlt="Zigbee"
            title="Zigbee"
            subtitle="Uma rede fiável e acessível"
            dotlist={['Poupança de energia', 'Segurança', 'Velocidade de Rede']}
          ></ServiceDropdown>
        </Wrapper>
      </FullPage>
    </>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;
