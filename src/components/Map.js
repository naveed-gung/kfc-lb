import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Delete default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const kfcLocations = [
  { name: "KFC Hamra", position: [33.8938, 35.4875], address: "Hamra Street" },
  { name: "KFC Achrafieh", position: [33.8894, 35.5166], address: "Sassine Square" },
  { name: "KFC Jounieh", position: [33.9833, 35.6167], address: "Main Street" },
  { name: "KFC Tripoli", position: [34.4333, 35.8333], address: "Al Tall" },
  { name: "KFC Saida", position: [33.5631, 35.3689], address: "Riad El Solh" }
];

const Map = () => {
  return (
    <div className="map-container" style={{ height: '400px', width: '100%', marginTop: '20px' }}>
      <MapContainer 
        center={[33.8547, 35.8623]} 
        zoom={8} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          
        />
        {kfcLocations.map((location, index) => (
          <Marker key={index} position={location.position}>
            <Popup>
              <div>
                <h6>{location.name}</h6>
                <p>{location.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;