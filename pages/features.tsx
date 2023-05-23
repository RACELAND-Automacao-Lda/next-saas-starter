import styled from 'styled-components';
import DottedList from 'components/DottedList';
import DropdownSectionSvg from 'components/DropdownSectionSvg';
import FullPage from 'components/FullPage';
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
            left={true}
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
            left={false}
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
            left={true}
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
            left={false}
            imagePath="/domotica/services/climatizacao/climatizacao.png"
            fullImagePath="/domotica/services/climatizacao/fullclimatizacao.png"
            imageAlt="climatizacao"
            title="climatizacao"
            subtitle="climatizacao"
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
            left={true}
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
              title="incorporação LoRa"
              overTitle1="A necessidade de conectividade no campo e o alcance de grandes distâncias nas áreas agrícolas representam um grande desafio para a irrigação."
              overTitle2="Com a utilização da tecnologia LoRa o controlo de sistemas de irrigação é possível até uma distância de 4 quilómetros."
              reversed={true}
            ></DropdownSectionSvg>
          </ServiceDropdown>
          <ServiceDropdown
            left={false}
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
                'incorporação de uma grande variedade de dispositivos',
                'Rapidez de comunicação',
                'Segurança de dados',
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
        </Wrapper>
      </FullPage>
    </>
  );
}

const Title = styled.h1`
  font-size: 3.4rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
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

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;
