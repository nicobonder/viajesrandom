import React, { useEffect } from 'react'

export default function Mapa() {
  useEffect(()=> {
    const iframeData =document.getElementById('iframeId')
    const lat = Math.random() * (64.9 - -54.40) + -54.40
    const lon = Math.random() * (-150.00 - -38.00) + -38.00;
    const zoom = '5z';
    iframeData.src =`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
  })

  //https://www.google.com/maps/place/31%C2%B027'00.0%22S+64%C2%B032'24.0%22W/@-31.45,-64.54,12z/data=!4m5!3m4!1s0x0:0xc4425da490b11ad7!8m2!3d-31.45!4d-64.54?hl=es-ES
  //https://www.google.com/maps/place/31%C2%B027'00.0%22S+64%C2%B032'24.0%22W/@-31.45,-64.6100378,11z/data=!4m5!3m4!1s0x0:0xc4425da490b11ad7!8m2!3d-31.45!4d-64.54?hl=es-ES

  return (
    <div>
      <iframe title='Google Maps' id='iframeId' height="500px" width="500px"/>
    </div>
  )
}




// import React from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// import { Marker } from '@react-google-maps/api';
// import GOOGLE_API_KEY from '../../../env'

// ver https://www.npmjs.com/package/@react-google-maps/api
// AIzaSyCplIjhFxPJ5JXbvsy6wF88gQrg7rXcyhM

// const containerStyle = {
//     width: '400px',
//     height: '400px'
//   };
  
//   const center = {
//     lat: -31.745,
//     lng: -64.523
//   };

// export default function Mapa() {
//     const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: 'AIzaSyCplIjhFxPJ5JXbvsy6wF88gQrg7rXcyhM',
//       })
    
//       const [map, setMap] = React.useState(null)
    
//       const onLoad = React.useCallback(function callback(map) {
//         const bounds = new window.google.maps.LatLngBounds(center);
//         map.fitBounds(bounds);
//         setMap(map)
//       }, [])
    
//       const onUnmount = React.useCallback(function callback(map) {
//         setMap(null)
//       }, [])
    
//       return isLoaded ? (
//           <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={center}
//             markers={[{ lat: -31.45, lng: -64.45 }]}
//             zoom={4}
//             onLoad={onLoad}
//             onUnmount={onUnmount}
            
//           >
//             {/*<Marker
//              icon={{
//               path:
//                 "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
//               fillColor: "yellow",
//               fillOpacity: 0.9,
//               scale: 2,
//               strokeColor: "gold",
//               strokeWeight: 2,
//             }}
//             onLoad={onLoad}
//             position={center}
//             /> */}
//             { /* Child components, such as markers, info windows, etc. */ }
            
//           </GoogleMap>
//       ) : <></>
//     }
    