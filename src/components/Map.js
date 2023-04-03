import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = () => {
  
  const markers = [
    {position: {lat: 18.6541572, lng: 73.7598665}},
    {position: {lat: 30.1349574, lng: 77.2933321}},
    {position: {lat: 18.6329228, lng: 73.780153}},
    {position: {lat: 18.6279077, lng: 73.7766358}},
    {position: {lat: 18.638027, lng: 73.7762943}},
    {position: {lat: 18.6463529, lng: 73.7526838}},
    {position: {lat: 18.6647166, lng: 73.8449435}},
    {position: {lat: 30.7355, lng: 76.7951679}},
    {position: {lat: 18.6357375, lng: 73.8208211}},
    {position: {lat: 18.633978, lng: 73.8091859}},
    {position: {lat: 18.6233201, lng: 73.846563}},
    {position: {lat: 18.6215041, lng: 73.8566447}},
    {position: {lat: 18.6164279, lng: 73.8612095}},
    {position: {lat: 18.5794, lng: 73.8128624}},
    {position: {lat: 18.5724564, lng: 73.8144123}},
    {position: {lat: 18.5571006, lng: 73.7958834}},
  ]

  return (
    <GoogleMap
      defaultZoom={10.5}
      defaultCenter={{lat: 18.7, lng: 73.803685}}
    >
      {
        markers.map((marker, index) => {
          return (
            <Marker
              key={index}
              position={marker.position}
              icon={"blue-marker.png"}
            />
          )
        })
      }
      
    </GoogleMap>
  );
}

const MapComponent = withScriptjs(withGoogleMap(Map));


const MapComp = (props) => {
  
  const { path } = props;
if(MapComponent) {
  return (
    <MapComponent
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `${path === "mapview" ? '87.5vh' : '100vh'}`, width: "100%" }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  )
} else {
  return <div>Sorry check your internet we could not load Google map</div>
}
  
};

export default MapComp;
