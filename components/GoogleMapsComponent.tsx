import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

export const GoogleMapsComponent = withGoogleMap(() => (
  <GoogleMap
    defaultZoom={14} // Adjust the zoom level as needed
    defaultCenter={{ lat: 41.235410, lng: -8.537960 }} // Set the default center coordinates of the map
  >
    <Marker position={{ lat:41.235410, lng: -8.537960 }} /> 
  </GoogleMap>
));
