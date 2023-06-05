import { GoogleMap, Marker, MarkerF, useLoadScript } from '@react-google-maps/api';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import PageContacts from 'components/PageContacts';
import SectionTitle from 'components/SectionTitle';
import isMobile from 'hooks/isMobile';
import { media } from 'utils/media';
import FormSection from 'views/ContactPage/FormSection';
import InformationSection from 'views/ContactPage/InformationSection';

const libraries = ['places'];
const mapOptions = {
  disableDefaultUI: true,
  clickableIcons: true,
  scrollwheel: true,
};

export default function ContactPage() {
  const [lat, setLat] = useState(41.23524698609944);
  const [lng, setLng] = useState(-8.537433518666859);
  const mapCenter = useMemo(() => ({ lat, lng }), [lat, lng]);
  const isMobileDevice = isMobile();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  useEffect(() => {
    if (isLoaded) {
      console.log('Google Maps loaded successfully.');
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <PageContacts title="Contactos" description="">
        <ContactContainer>
          <InformationSection />
          <FormSection />
        </ContactContainer>
        <Title>Visite-nos</Title>
        {isMobileDevice ? <Section2Mobile mapCenter={mapCenter} /> : <Section1Mobile mapCenter={mapCenter} />}
      </PageContacts>
    </>
  );
}

const ContactContainer = styled.div`
  display: flex;

  ${media('<=tablet')} {
    width: 100%;
    flex-direction: column;
  }
`;

const Title = styled(SectionTitle)`
  color: rgb(var(--text));
  margin-bottom: 2rem;
  margin-top: 100px;

  ${media('<=tablet')} {
    & {
      font-size: 24px;
      margin-bottom: 1rem;
    }
  }
`;

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  ${media('<=tablet')} {
    & {
      margin-top: 20px;
    }
  }
`;

function Section1Mobile({ mapCenter }: any) {
  return (
    <MapContainer>
      <GoogleMap
        zoom={17}
        center={mapCenter}
        options={mapOptions}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '78vw', height: '45vh' }}
      >
        <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
      </GoogleMap>
    </MapContainer>
  );
}

function Section2Mobile({ mapCenter }: any) {
  return (
    <MapContainer>
      <GoogleMap
        zoom={16}
        center={mapCenter}
        options={mapOptions}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '100vw', height: '55vh' }}
      >
        <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
      </GoogleMap>
    </MapContainer>
  );
}
