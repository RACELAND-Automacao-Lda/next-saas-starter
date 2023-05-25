//import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import { GoogleMap, Marker, MarkerF, useLoadScript } from '@react-google-maps/api';
import { useMemo, useState } from 'react';
import styled from 'styled-components';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';
import FormSection from 'views/ContactPage/FormSection';
import InformationSection from 'views/ContactPage/InformationSection';

export default function ContactPage() {
  const [lat, setLat] = useState(41.23524698609944);
  const [lng, setLng] = useState(-8.537433518666859);

  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: true,
    }),
    [],
  );

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <Page title="Contacte-nos" description="">
      <ContactContainer>
        <InformationSection />
        <FormSection />
      </ContactContainer>
      <Title>Visite-nos</Title>
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
    </Page>
  );
}

// AIzaSyDc-u6Yc8wG6SA3qkdAGtTvRCsI-Ne8I9w
const ContactContainer = styled.div`
  display: flex;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;

const Title = styled(SectionTitle)`
  color: rgb(var(--text));
  margin-bottom: 2rem;
  margin-top: 100px;
`;

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
