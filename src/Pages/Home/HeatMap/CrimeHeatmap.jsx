import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.heat';
import 'leaflet/dist/leaflet.css';

const divisions = [
  { id: 'dhaka', name: 'Dhaka' },
  { id: 'chittagong', name: 'Chittagong' },
  { id: 'rajshahi', name: 'Rajshahi' },
  { id: 'khulna', name: 'Khulna' },
];

const districts = {
  dhaka: ['Dhaka', 'Gazipur', 'Narayanganj'],
  chittagong: ['Chittagong', 'Cox\'s Bazar'],
  rajshahi: ['Rajshahi', 'Natore'],
  khulna: ['Khulna', 'Satkhira'],
};

const heatmapData = {
  dhaka: [[23.8103, 90.4125, 0.5], [23.8338, 90.4165, 0.8]],
  chittagong: [[22.3569, 91.7832, 0.7]],
  rajshahi: [[24.3636, 88.6241, 0.6]],
  khulna: [[22.8456, 89.5403, 0.9]],
};

// Crime marker locations
const markerData = {
  dhaka: [{ lat: 23.8103, lng: 90.4125, address: 'Crime at Motijheel' }, { lat: 22.8103, lng: 91.4125, address: 'Crime at Cummila' }],
  chittagong: [{ lat: 22.3569, lng: 91.7832, address: 'Crime near Agrabad' }],
  rajshahi: [{ lat: 24.3636, lng: 88.6241, address: 'Crime near Rajshahi University' }],
  khulna: [{ lat: 22.8456, lng: 89.5403, address: 'Crime near Khulna City' }],
};

function Heatmap({ points }) {
  const map = useMap();

  useEffect(() => {
    if (map && points) {
      const heatLayer = L.heatLayer(points.map(([lat, lng, intensity]) => [lat, lng, intensity]), {
        radius: 25,
        blur: 15,
        maxZoom: 17,
      }).addTo(map);

      return () => {
        map.removeLayer(heatLayer);
      };
    }
  }, [map, points]);

  return null;
}

// Custom marker icon
const crimeIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/2991/2991231.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function CrimeHeatmap() {
  const [selectedDivision, setSelectedDivision] = useState('dhaka');
  const [selectedDistrict, setSelectedDistrict] = useState('Dhaka');

  return (
    <div className="card  rounded-md  p-6">
      <h2 className="text-3xl font-bold text-center mb-4">Crime Heatmap</h2>
      <p className="text-center text-gray-600 mb-6">
        Visualize crime-prone areas based on community reports.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <select 
          className="select select-bordered w-full" 
          value={selectedDivision} 
          onChange={(e) => {
            setSelectedDivision(e.target.value);
            setSelectedDistrict(districts[e.target.value][0]);
          }}
        >
          {divisions.map((division) => (
            <option key={division.id} value={division.id}>
              {division.name}
            </option>
          ))}
        </select>
        <select 
          className="select select-bordered w-full" 
          value={selectedDistrict} 
          onChange={(e) => setSelectedDistrict(e.target.value)}
        >
          {districts[selectedDivision]?.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>
      <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
        <MapContainer center={[23.8103, 90.4125]} zoom={8} className="h-full w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Heatmap points={heatmapData[selectedDivision]} />
          {markerData[selectedDivision]?.map(({ lat, lng, address }) => (
            <Marker key={`${lat}-${lng}`} position={[lat, lng]} icon={crimeIcon}>
              <Popup>{address}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
