import Map from "../components/Maps";

function MapPage() {
  return (
    <main className="map-page">

      <div className="map-header">

        <p className="section-label">
          EXPLORE BY LOCATION
        </p>

        <h1>
          Discover Kenya on the map
        </h1>

        <p>
          Find recreational destinations across Kenya
          and explore their locations.
        </p>

      </div>

      <Map />

    </main>
  );
}

export default MapPage;