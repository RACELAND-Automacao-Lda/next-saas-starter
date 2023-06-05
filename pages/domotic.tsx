import styled from 'styled-components';
import DottedList from 'components/DottedList';
import DropdownSectionSvg from 'components/DropdownSectionSvg';
import FullPage from 'components/FullPage';
import HomelandBenefits from 'components/HomelandBenefits';
import HomelandHeaderSection from 'components/HomelandHeaderSection';
import HomelandSection from 'components/HomelandSection';
import MobileCatalogSection from 'components/mobile/MobileCatalogSection';
import MobileDropdownSectionSvg from 'components/mobile/MobileDropdownSectionSvg';
import MobileHomelandBenefits from 'components/mobile/MobileHomelandBenefits';
import MobileHomelandHeader from 'components/mobile/MobileHomelandHeader';
import MobileServiceDropdown from 'components/mobile/MobileServiceDropdown';
import MobileHomelandDomotic from 'components/mobile/MobileHomelandDomotic';
import MobileWifiCentral from 'components/mobile/MobileWifiCentral';
import SectionBenefitsMobile from 'components/mobile/SectionBenefitsMobile';
import SectionBenefits from 'components/SectionBenefits';
import SectionTitle from 'components/SectionTitle';
import ServiceCatalog from 'components/ServiceCatalog';
import ServiceDropdown from 'components/ServiceDropdown';
import StyledList from 'components/StyledList';
import WifiCentral from 'components/WifiCentral';
import isMobile from 'hooks/isMobile';
// @ts-ignore
import lottieJson from '/public/domotica/homeland.json';
// @ts-ignore
import MobileLottieJson from '/public/domotica/HomelandMobile.json';

export default function FeaturesPage() {
  console.log('Mobile', isMobile());

  return (
    <>
      <FullPage title="" description="">
        {isMobile() ? (
          <>
            <MobileHomelandHeader
              svg={MobileLottieJson}
              loop={true}
              title="HomeLand"
              overTitle="A sua casa na palma da sua mão"
              width={150}
              height={150}
              top="0%"
            ></MobileHomelandHeader>
            <MobileHomelandBenefits
              image1="/domotica/beneficios/1.svg"
              title1="HomePage personalizável"
              text1="Organize os comandos da forma mais eficiente para si. Junte os seus comandos mais utilizados numa só página, divida os comandos por zonas específicas, ou ambos!"
              image2="/domotica/beneficios/2.svg"
              title2="Instalação simples e rápida"
              text2="Disponível para instalação própria pelo cliente ou através do distribuidor."
              image3="/domotica/beneficios/3.svg"
              title3="Use em qualquer lugar"
              text3="Aceda à sua casa através de qualquer dispositivo. Telemóvel, tablet, portátil, etc, a sua casa estará sempre na ponta dos seus dedos."
            ></MobileHomelandBenefits>
            <MobileWifiCentral
              title="A melhor solução para qualquer caso"
              image1="/domotica/centralwifi/wifi.svg"
              image2="/domotica/centralwifi/central.svg"
            ></MobileWifiCentral>
            <ServicesWrapper>
              <SectionTitle style={{ marginTop: '7%', marginLeft: '5%', textAlign: 'left', marginRight: '5%' }}>
                Tudo o que precisa para a sua casa
              </SectionTitle>
              <MobileServiceDropdown
                imagePath="/domotica/services/Iluminacao/mobileiluminacao.png"
                imageAlt="Iluminação"
                title="Iluminação"
                subtitle="A melhor forma de dar vida a sua casa"
                dotlist={['Luzes', 'Persianas', 'Cortinas']}
              >
                <MobileTitle style={{ marginLeft: '5%', textAlign: 'left', marginRight: '5%' }}>
                  Controle a iluminação da melhor forma para si
                </MobileTitle>

                <StyledList style={{ marginLeft: '5%', textAlign: 'left' }}>
                  <DottedList isOpened={false} dotlist={['Interruptores', 'Sensores', 'Aplicação Homeland']} />
                </StyledList>
                <MobileDropdownSectionSvg
                  imageUrl="/domotica/services/Iluminacao/mobilesvg/1.svg"
                  title="A melhor iluminação para a sua rotina"
                  overTitle1="Com automações de agendamento, pode escolher a iluminação para cada hora do dia."
                  overTitle2="Os serviços de GPS também oferecem a possibilidade de controlar a iluminação consoante a sua localização."
                ></MobileDropdownSectionSvg>
                <MobileDropdownSectionSvg
                  imageUrl="/domotica/services/Iluminacao/mobilesvg/2.svg"
                  title="O ambiente certo"
                  overTitle1="A iluminação tem um enorme impacto no ambiente de cada divisão."
                  overTitle2="Com os serviços HomeLand pode escolher a iluminação certa para cada situação."
                ></MobileDropdownSectionSvg>
              </MobileServiceDropdown>

              <MobileServiceDropdown
                imagePath="/domotica/services/seguranca/mobileseguranca.png"
                imageAlt="Segurança"
                title="Segurança"
                subtitle="Proteção eficaz para o que valoriza"
                dotlist={['Alarmes e Sensores', 'Portões', 'Aplicação Homeland']}
              >
                <MobileDropdownSectionSvg
                  imageUrl="/domotica/services/seguranca/mobilesvg/1.svg"
                  title="Segurança e conforto"
                  overTitle1="Proteja o seu lar com máxima conveniência com os serviços de segurança Homeland."
                  overTitle2="Controlo de luz, portões, vídeo-porteiros, fechaduras, sensores e muito mais sempre à sua disposição."
                ></MobileDropdownSectionSvg>
                <MobileDropdownSectionSvg
                  imageUrl="/domotica/services/seguranca/mobilesvg/2.svg"
                  title="Acesso seguro e personalizado de portões, garagens e portas"
                  dotlist={[
                    'Controlo remoto através do telemóvel ou computador',
                    'Abertura e fecho automático conforme a sua localização',
                    'Controlo temporizador de abertura e fecho',
                    'Sistema de segurança com reconhecimento de matrícula',
                  ]}
                ></MobileDropdownSectionSvg>
              </MobileServiceDropdown>
              <MobileServiceDropdown
                imagePath="/domotica/services/inteligencia/mobileinteligencia.png"
                imageAlt="Inteligência Artificial"
                title="Inteligência Artificial"
                subtitle=""
                dotlist={['Segurança', 'Reconhecimento de hábitos', 'Face ID']}
              >
                <MobileDropdownSectionSvg
                  imageUrl="/domotica/services/inteligencia/mobilesvg/1.svg"
                  title="Conveniência e Segurança com reconhecimento facial"
                  dotlist={[
                    'Notificação sobre a presença de pessoas desconhecidas',
                    'Abertura e fecho de portas por reconhecimento facial',
                    'Personalização individual de automações através de reconhecimento facial',
                  ]}
                ></MobileDropdownSectionSvg>
                <MobileDropdownSectionSvg
                  imageUrl="/domotica/services/inteligencia/mobilesvg/2.svg"
                  title="Uma casa que aprende consigo"
                  dotlist={[
                    'Reconhecimento de matrículas para abertura de portas, portões e garagens',
                    'Notificação sobre a presença à sua porta de pessoas, animais, viaturas e mais',
                    'Reconhecimento de hábitos e proposta de automações auxiliares',
                  ]}
                ></MobileDropdownSectionSvg>
              </MobileServiceDropdown>
              <MobileServiceDropdown
                imagePath="/domotica/services/entretenimento/mobileentretenimento.png"
                imageAlt="Entretenimento"
                title="Entretenimento"
                subtitle="Diversão e Relaxe da forma mais prática"
                dotlist={['Televisão', 'Coluna de som', 'Projetores']}
              >
                <MobileDropdownSectionSvg
                  imageUrl="/domotica/services/entretenimento/mobilesvg/1.svg"
                  title="A experiência de entretenimento mais conveniente"
                  overTitle1="Melhore os seus serões com a possibilidade de automatizar e controlar aparelhos multimédia como televisões e projetores através da aplicação Homeland."
                  overTitle2="Com a incorporação dos seus comandos infravermelhos no sistema Homeland, ver a televisão nunca foi tão prático."
                ></MobileDropdownSectionSvg>
                <MobileDropdownSectionSvg
                  imageUrl="/domotica/services/entretenimento/mobilesvg/2.svg"
                  title="Conveniência, qualidade e conforto"
                  overTitle1="Uma experiência de conforto única com incríveis colunas de som, projetores e televisões adaptadas à sua casa."
                ></MobileDropdownSectionSvg>
              </MobileServiceDropdown>
              <MobileServiceDropdown
                imagePath="/domotica/services/climatizacao/mobileclimatizacao.png"
                imageAlt="Climatização"
                title="Climatização"
                subtitle="Conforto e Conveniência num só lugar"
                dotlist={['Controlo remoto', 'Sensores de ambiente']}
              >
                <MobileDropdownSectionSvg
                  imageUrl="/domotica/services/climatizacao/mobilesvg/1.svg"
                  title="Controlo de aparelhos de climatização"
                  overTitle1="Controle e consulte o estade de caldeiras, ventoinhas, ar condicionado e termóstatos remotamente através da aplicação Homeland."
                  overTitle2="Com a utilização de um aparelho para este fim, poderá controlar dispositivos infravermelho como ar condicionado através do seu telemóvel ou computador."
                ></MobileDropdownSectionSvg>
                <MobileDropdownSectionSvg
                  imageUrl="/domotica/services/climatizacao/mobilesvg/2.svg"
                  title="Sensores de temperatura e humidade"
                  overTitle1="A leitura da temperatura e humidade pode ter grande utilidade para manter o melhor ambiente da sua casa."
                  overTitle2="Sensores de humidade e temperatura monitorizam o seu espaço, permitindo a consulta do seu estado remotamente através da aplicação Homeland."
                ></MobileDropdownSectionSvg>
              </MobileServiceDropdown>
              <MobileServiceDropdown
                imagePath="/domotica/services/irrigacao/mobileirrigacao.png"
                imageAlt="Irrigação"
                title="Irrigação"
                subtitle="Controlo e informação de forma prática"
                dotlist={['Temperatura', 'Clima', 'Humidade']}
              >
                <MobileDropdownSectionSvg
                  imageUrl="/domotica/services/irrigacao/mobilesvg/1.svg"
                  title="Sensores e Automações"
                  overTitle1="Sensores da humidade do solo e da temperatura do ar permitem a patrulha das condições de jardins e áreas agrícolas."
                  overTitle2="Adicionalmente, é possível a criação de automações baseadas nas informações fornecidas pelos sensores, previsões climáticas e o agendamento da irrigação."
                  overTitle3="Com os serviços Homeland pode diminuir gastos ao limitar a irrigação apenas para quando necessário."
                ></MobileDropdownSectionSvg>
                <MobileDropdownSectionSvg
                  imageUrl="/domotica/services/irrigacao/mobilesvg/2.svg"
                  title="Incorporação LoRa"
                  overTitle1="A necessidade de conectividade no campo e o alcance de grandes distâncias nas áreas agrícolas representam um grande desafio para a irrigação."
                  overTitle2="Com a utilização da tecnologia LoRa o controlo de sistemas de irrigação é possível até uma distância de 4 quilómetros."
                ></MobileDropdownSectionSvg>
              </MobileServiceDropdown>
              <MobileServiceDropdown
                imagePath="/domotica/services/zigbee/mobilezigbee.png"
                imageAlt="Zigbee"
                title="Zigbee"
                subtitle="Uma rede fiável e acessível"
                dotlist={['Poupança de energia', 'Segurança', 'Velocidade de Rede']}
              >
                <MobileDropdownSectionSvg
                  imageUrl="/domotica/services/zigbee/mobilesvg/1.svg"
                  title="A melhor solução para a sua casa"
                  dotlist={[
                    'Estende a durabilidade de baterias.',
                    'Economicamente viável.',
                    'Incorporação de uma grande variedade de dispositivos.',
                    'Rapidez de comunicação.',
                    'Segurança de dados.',
                  ]}
                ></MobileDropdownSectionSvg>
                <MobileDropdownSectionSvg
                  imageUrl="/domotica/services/zigbee/mobilesvg/2.svg"
                  title="O ambiente certo"
                  overTitle1="Zigbee é um sistema de tecnologia desenvolvido especificamente para comunicações sem fio."
                  overTitle2="Esta tecnologia permite simplificar e aperfeiçoar a comunicação entre dispositivos de uma rede tornando-a perfeita para a automação de casas."
                  overTitle3="Com este sistema, dispositivos inteligentes podem criar uma rede interna, melhorando a rapidez, eficácia, fiabilidade e limitando custos."
                ></MobileDropdownSectionSvg>
              </MobileServiceDropdown>
            </ServicesWrapper>
            <MobileCatalogSection />
            <MobileHomelandDomotic imageUrlDark="/icon.svg" imageUrl="/domotica/Homeland_preto.svg" />
            <SectionBenefitsMobile
              title="Porquê ter uma casa inteligente?"
              overTitle="Descubra as muitas vantagens da automação residencial e assuma o controle da sua casa como nunca antes."
            ></SectionBenefitsMobile>
          </>
        ) : (
          <>
            <HomelandHeaderSection
              svg={lottieJson}
              loop={true}
              overTitle="A sua casa na palma da sua mão"
              width={400}
              height={400}
              top="0%"
            ></HomelandHeaderSection>
            <HomelandBenefits
              image1="/domotica/beneficios/1.svg"
              title1="HomePage personalizavel"
              text1="Organize os comandos da forma mais eficiente para si. Junte os seus comandos mais utilizados numa só página, divida os comandos por zonas específicas, ou ambos!"
              image2="/domotica/beneficios/2.svg"
              title2="Instalação simples e rápida"
              text2="Disponível para instalação própria pelo cliente ou através do distribuidor."
              image3="/domotica/beneficios/3.svg"
              title3="Use em qualquer lugar"
              text3="Aceda à sua casa através de qualquer dispositivo. Telemóvel, tablet, portátil, etc, a sua casa estará sempre na ponta dos seus dedos."
            ></HomelandBenefits>
            <WifiCentral
              title="A melhor solução para qualquer caso"
              image1="/domotica/centralwifi/wifi.svg"
              image2="/domotica/centralwifi/division.svg"
              image3="/domotica/centralwifi/central.svg"
            ></WifiCentral>
            <ServicesWrapper>
              <SectionTitle style={{ marginTop: '7%' }}>Tudo o que precisa para a sua casa</SectionTitle>
              <ServiceDropdown
                reverse={false}
                imagePath="/domotica/services/Iluminacao/Iluminacao.png"
                fullImagePath="/domotica/services/Iluminacao/fulliluminacao.png"
                imageAlt="Iluminação"
                title="Iluminação"
                subtitle="A melhor forma de dar vida a sua casa"
                dotlist={['Luzes', 'Persianas', 'Cortinas']}
              >
                <Title>Controle a iluminação da melhor forma para si</Title>
                <TextWrapperOpened>
                  <DottedList isOpened={false} dotlist={['Interruptores', 'Sensores', 'Aplicação Homeland']} />
                </TextWrapperOpened>
                <DropdownSectionSvg
                  imageUrl="/domotica/services/Iluminacao/svg/1.svg"
                  title="A melhor iluminação para a sua rotina"
                  overTitle1="Com automações de agendamento, pode escolher a iluminação para cada hora do dia."
                  overTitle2="Os serviços de GPS também oferecem a possibilidade de controlar a iluminação consoante a sua localização."
                  reversed={false}
                ></DropdownSectionSvg>
                <DropdownSectionSvg
                  imageUrl="/domotica/services/Iluminacao/svg/2.svg"
                  title="O ambiente certo"
                  overTitle1="A iluminação tem um enorme impacto no ambiente de cada divisão."
                  overTitle2="Com os serviços HomeLand pode escolher a iluminação certa para cada situação."
                  reversed={true}
                ></DropdownSectionSvg>
              </ServiceDropdown>
              <ServiceDropdown
                reverse={true}
                imagePath="/domotica/services/seguranca/seguranca.png"
                fullImagePath="/domotica/services/seguranca/fullseguranca.png"
                imageAlt="Segurança"
                title="Segurança"
                subtitle="Proteção eficaz para o que valoriza"
                dotlist={['Alarmes e Sensores', 'Portões', 'Aplicação Homeland']}
              >
                <DropdownSectionSvg
                  imageUrl="/domotica/services/seguranca/svg/1.svg"
                  title="Segurança e conforto"
                  overTitle1="Proteja o seu lar com máxima conveniência com os serviços de segurança Homeland."
                  overTitle2="Controlo de luz, portões, vídeo-porteiros, fechaduras, sensores e muito mais sempre à sua disposição."
                  reversed={false}
                ></DropdownSectionSvg>
                <DropdownSectionSvg
                  imageUrl="/domotica/services/seguranca/svg/2.svg"
                  title="Acesso seguro e personalizado de portões, garagens e portas"
                  dotlist={[
                    'Controlo remoto através do telemóvel ou computador',
                    'Abertura e fecho automático conforme a sua localização',
                    'Controlo temporizador de abertura e fecho',
                    'Sistema de segurança com reconhecimento de matrícula',
                  ]}
                  reversed={true}
                ></DropdownSectionSvg>
              </ServiceDropdown>
              <ServiceDropdown
                reverse={false}
                imagePath="/domotica/services/inteligencia/inteligencia.png"
                fullImagePath="/domotica/services/inteligencia/fullinteligencia.png"
                imageAlt="Inteligência Artificial"
                title="Inteligência Artificial"
                subtitle=""
                dotlist={['Segurança', 'Reconhecimento de hábitos', 'Face ID']}
              >
                <DropdownSectionSvg
                  imageUrl="/domotica/services/inteligencia/svg/1.svg"
                  title="Conveniência e Segurança com reconhecimento facial"
                  dotlist={[
                    'Notificação sobre a presença de pessoas desconhecidas',
                    'Abertura e fecho de portas por reconhecimento facial',
                    'Personalização individual de automações através de reconhecimento facial',
                  ]}
                  reversed={false}
                ></DropdownSectionSvg>
                <DropdownSectionSvg
                  imageUrl="/domotica/services/inteligencia/svg/2.svg"
                  title="Uma casa que aprende consigo"
                  dotlist={[
                    'Reconhecimento de matrículas para abertura de portas, portões e garagens',
                    'Notificação sobre a presença à sua porta de pessoas, animais, viaturas e mais',
                    'Reconhecimento de hábitos e proposta de automações auxiliares',
                  ]}
                  reversed={true}
                ></DropdownSectionSvg>
              </ServiceDropdown>
              <ServiceDropdown
                reverse={true}
                imagePath="/domotica/services/entretenimento/entretenimento.png"
                fullImagePath="/domotica/services/entretenimento/fullentretenimento.png"
                imageAlt="Entretenimento"
                title="Entretenimento"
                subtitle="Diversão e Relaxe da forma mais prática"
                dotlist={['Televisão', 'Coluna de som', 'Projetores']}
              >
                <DropdownSectionSvg
                  imageUrl="/domotica/services/entretenimento/svg/1.svg"
                  title="A experiência de entretenimento mais conveniente"
                  overTitle1="Melhore os seus serões com a possibilidade de automatizar e controlar aparelhos multimédia como televisões e projetores através da aplicação Homeland."
                  overTitle2="Com a incorporação dos seus comandos infravermelhos no sistema Homeland, ver a televisão nunca foi tão prático."
                  reversed={false}
                ></DropdownSectionSvg>
                <DropdownSectionSvg
                  imageUrl="/domotica/services/entretenimento/svg/2.svg"
                  title="Conveniência, qualidade e conforto"
                  overTitle1="Uma experiência de conforto única com incríveis colunas de som, projetores e televisões adaptadas à sua casa."
                  reversed={true}
                ></DropdownSectionSvg>
              </ServiceDropdown>
              <ServiceDropdown
                reverse={false}
                imagePath="/domotica/services/climatizacao/climatizacao.png"
                fullImagePath="/domotica/services/climatizacao/fullclimatizacao.png"
                imageAlt="Climatização"
                title="Climatização"
                subtitle="Conforto e Conveniência num só lugar"
                dotlist={['Controlo remoto', 'Sensores de ambiente']}
              >
                <DropdownSectionSvg
                  imageUrl="/domotica/services/climatizacao/svg/1.svg"
                  title="Controlo de aparelhos de climatização"
                  overTitle1="Controle e consulte o estade de caldeiras, ventoinhas, ar condicionado e termóstatos remotamente através da aplicação Homeland."
                  overTitle2="Com a utilização de um aparelho para este fim, poderá controlar dispositivos infravermelho como ar condicionado através do seu telemóvel ou computador."
                  reversed={false}
                ></DropdownSectionSvg>
                <DropdownSectionSvg
                  imageUrl="/domotica/services/climatizacao/svg/2.svg"
                  title="Sensores de temperatura e humidade"
                  overTitle1="A leitura da temperatura e humidade pode ter grande utilidade para manter o melhor ambiente da sua casa."
                  overTitle2="Sensores de humidade e temperatura monitorizam o seu espaço, permitindo a consulta do seu estado remotamente através da aplicação Homeland."
                  reversed={true}
                ></DropdownSectionSvg>
              </ServiceDropdown>
              <ServiceDropdown
                reverse={true}
                imagePath="/domotica/services/irrigacao/irrigacao.png"
                fullImagePath="/domotica/services/irrigacao/fullirrigacao.png"
                imageAlt="Irrigação"
                title="Irrigação"
                subtitle="Controlo e informação de forma prática"
                dotlist={['Temperatura', 'Clima', 'Humidade']}
              >
                <DropdownSectionSvg
                  imageUrl="/domotica/services/irrigacao/svg/1.svg"
                  title="Sensores e Automações"
                  overTitle1="Sensores da humidade do solo e da temperatura do ar permitem a patrulha das condições de jardins e áreas agrícolas."
                  overTitle2="Adicionalmente, é possível a criação de automações baseadas nas informações fornecidas pelos sensores, previsões climáticas e o agendamento da irrigação."
                  overTitle3="Com os serviços Homeland pode diminuir gastos ao limitar a irrigação apenas para quando necessário."
                  reversed={false}
                ></DropdownSectionSvg>
                <DropdownSectionSvg
                  imageUrl="/domotica/services/irrigacao/svg/2.svg"
                  title="Incorporação LoRa"
                  overTitle1="A necessidade de conectividade no campo e o alcance de grandes distâncias nas áreas agrícolas representam um grande desafio para a irrigação."
                  overTitle2="Com a utilização da tecnologia LoRa o controlo de sistemas de irrigação é possível até uma distância de 4 quilómetros."
                  reversed={true}
                ></DropdownSectionSvg>
              </ServiceDropdown>
              <ServiceDropdown
                reverse={false}
                imagePath="/domotica/services/zigbee/zigbee.png"
                fullImagePath="/domotica/services/zigbee/fullzigbee.png"
                imageAlt="Zigbee"
                title="Zigbee"
                subtitle="Uma rede fiável e acessível"
                dotlist={['Poupança de energia', 'Segurança', 'Velocidade de Rede']}
              >
                <DropdownSectionSvg
                  imageUrl="/domotica/services/zigbee/svg/1.svg"
                  title="A melhor solução para a sua casa"
                  dotlist={[
                    'Estende a durabilidade de baterias.',
                    'Economicamente viável.',
                    'Incorporação de uma grande variedade de dispositivos.',
                    'Rapidez de comunicação.',
                    'Segurança de dados.',
                  ]}
                  reversed={false}
                ></DropdownSectionSvg>
                <DropdownSectionSvg
                  imageUrl="/domotica/services/zigbee/svg/2.svg"
                  title="O ambiente certo"
                  overTitle1="Zigbee é um sistema de tecnologia desenvolvido especificamente para comunicações sem fio."
                  overTitle2="Esta tecnologia permite simplificar e aperfeiçoar a comunicação entre dispositivos de uma rede tornando-a perfeita para a automação de casas."
                  overTitle3="Com este sistema, dispositivos inteligentes podem criar uma rede interna, melhorando a rapidez, eficácia, fiabilidade e limitando custos."
                  reversed={true}
                ></DropdownSectionSvg>
              </ServiceDropdown>
            </ServicesWrapper>
            <ServiceCatalog />
            <HomelandSection
              imageUrl="/domotica/Homeland.svg"
              imageUrlDark="/domotica/Homeland_2.svg"
              title="Homeland"
              subtitle="A sua casa na palma da sua mão"
              reversed={false}
            ></HomelandSection>
            <SectionBenefits
              imageUrl="/4.svg"
              title1="Porquê ter uma"
              title2="casa inteligente?"
              overTitle="Descubra as muitas vantagens da automação residencial e assuma o controle da sua casa como nunca antes."
              reversed={true}
            ></SectionBenefits>
          </>
        )}
      </FullPage>
    </>
  );
}

const MobileTitle = styled.h1`
  font-size: 20px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-align: left;
  margin-top: 5rem;
  line-height: 1.5;
`;

const Title = styled.h1`
  font-size: 52px;
  line-height: 1.5;
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-align: center;
  margin-top: 5rem;
`;

const TextWrapperOpened = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  color: black;
  z-index: 2;
`;

const ServicesWrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
  margin-bottom: 10rem;
`;
