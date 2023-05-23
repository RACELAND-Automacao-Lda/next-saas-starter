import NextImage from 'next/image';
import NextLink from 'next/link';
import { FacebookIcon, LinkedinIcon } from 'react-share';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';
import RedirectButton from '/components/RedirectButton';

type SingleFooterListItem = { title: string; href: string; imageUrl: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Contactos',
    items: [
      { title: 'R. Primeiro de Maio 614D, 4445-245 Alfena', href: '', imageUrl: '/House.svg' },
      { title: 'automacao@raceland-sa.com', href: '', imageUrl: '/Mail.svg' },
      { title: '+351 22 968 72 46 \n(Chamada para rede fixa nacional)', href: '', imageUrl: '/Phone.svg' },
    ],
  },
  {
    title: 'Menções Legais',
    items: [{ title: 'Política de privacidade', href: '/privacy', imageUrl: '/reclamacoes.svg' }],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
        </ListContainer>
        <SponsorContainer>
          <ImageContainerSponsor>
            <NextImage src="/Adritem.png" width="240" height="100" />
          </ImageContainerSponsor>
          <ImageContainerSponsor>
            <NextImage src="/Fundo Social Europeu.svg" width="228" height="100" />
          </ImageContainerSponsor>
          <ImageContainerSponsor>
            <NextImage src="/Norte 2020.svg" width="326" height="100" />
          </ImageContainerSponsor>
          <ImageContainerSponsor>
            <NextImage src="/Portugal_2020.png" width="180" height="100" />
          </ImageContainerSponsor>
        </SponsorContainer>
        <BottomBar>
          <ShareBar>
            <NextLink href="https://www.instagram.com/automacaoraceland/" passHref>
              <a>
                <NextImage src="/Instagram.svg" width="50" height="50" />
              </a>
            </NextLink>

            <NextLink href="https://www.facebook.com/racelandautomacao" passHref>
              <a>
                <FacebookIcon size={50} round={true} />
              </a>
            </NextLink>

            <NextLink href="https://www.linkedin.com/company/raceland-automa%C3%A7%C3%A3o/" passHref>
              <a>
                <LinkedinIcon size={50} round={true} />
              </a>
            </NextLink>
          </ShareBar>
          <Copyright>Copyright &copy; 2023 RACELAND Automação Lda.</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      <div>
        {items.map((singleItem) => (
          <ListItem key={singleItem.imageUrl} {...singleItem} />
        ))}
      </div>
    </ListWrapper>
  );
}

function ListItem({ title, href, imageUrl }: SingleFooterListItem) {
  const lines = title.split('\n');

  if (href === '/privacy') {
    return (
      <ListItemWrapperPrivacy>
        <NextLink href={href} passHref>
          <u style={{ cursor: 'pointer', margin: '0 0 15px 0' }}>{title}</u>
        </NextLink>
        <RedirectButton
          url="https://play.google.com/store/apps/details?id=io.homeland.companion.android&hl=pt-PT"
          svg={imageUrl}
        ></RedirectButton>
      </ListItemWrapperPrivacy>
    );
  } else {
    return (
      <ListItemWrapper>
        <ImageContainer>
          <NextImage src={imageUrl} width="24" height="24" />
        </ImageContainer>
        <div>
          {lines.map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </div>
      </ListItemWrapper>
    );
  }
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  margin-right: 10px;

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const ImageContainerSponsor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  margin: 0 20px;

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const SponsorContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 100px;

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.div`
  font-size: 1.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ListItemWrapperPrivacy = styled.div`
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  display: flex;

  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
