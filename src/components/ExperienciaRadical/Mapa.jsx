import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

//ver https://www.npmjs.com/package/@react-google-maps/api
//AIzaSyCplIjhFxPJ5JXbvsy6wF88gQrg7rXcyhM

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -31.745,
    lng: -64.523
  };

export default function Mapa() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCplIjhFxPJ5JXbvsy6wF88gQrg7rXcyhM"
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
    
      return isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            markers={[{ lat: -31.45, lng: -64.45 }]}
            zoom={6}
            onLoad={onLoad}
            onUnmount={onUnmount}
            
          >
            {/*<Marker
             icon={{
              path:
                "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
              fillColor: "yellow",
              fillOpacity: 0.9,
              scale: 2,
              strokeColor: "gold",
              strokeWeight: 2,
            }}
            onLoad={onLoad}
            position={center}
            /> */1}
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
      ) : <></>
    }
    