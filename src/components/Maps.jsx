import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import { Link } from "react-router-dom";

import sites from "../data/sites";

import "leaflet/dist/leaflet.css";

function Map() {
  return (
    <MapContainer
      center={[-1.286389, 36.817223]}
      zoom={6}
      style={{
        height: "600px",
        width: "100%",
      }}
    >

      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {sites.map((site) => (

        <Marker
          key={site.id}
          position={[
            site.latitude,
            site.longitude,
          ]}
        >

          <Popup>

            <strong>
              {site.name}
            </strong>

            <p>
              {site.category}
            </p>

            <Link
              to={`/sites/${site.slug}`}
            >
              View destination
            </Link>

          </Popup>

        </Marker>

      ))}

    </MapContainer>
  );
}

export default Map;