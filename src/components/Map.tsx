import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import LocationIcon from "../images/icon-location.svg";

export interface Location {
  lat: number;
  lng: number;
  city: string;
  region: string;
  country: string;
  timezone: string;
}

const Map = ({
  location,
  isLoading,
}: {
  location?: Location;
  isLoading: boolean;
}) => {
  const iconSize = 25;

  return !isLoading && location ? (
    <MapContainer
      center={{ lat: location.lat, lng: location.lng }}
      zoom={13}
      scrollWheelZoom={false}
      className="flex-1 w-full h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[location.lat, location.lng]}
        icon={L.icon({
          iconUrl: LocationIcon,
          iconSize: [iconSize, iconSize * 1.3],
          iconAnchor: [iconSize / 2, iconSize + 9],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        })}
      >
        <Popup>{location.city}</Popup>
      </Marker>
    </MapContainer>
  ) : (
    <div className="h-full bg-slate-200 w-full animate-pulse" />
  );
};

export default Map;
