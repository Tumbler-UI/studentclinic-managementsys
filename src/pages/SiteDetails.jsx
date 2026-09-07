import { Link, useParams } from "react-router-dom";

import sites from "../data/sites";

import "../styles/SiteDetails.css";

function SiteDetails() {

  const { slug } = useParams();

  const site = sites.find(
    (item) => item.slug === slug
  );

  if (!site) {
    return (
      <main className="not-found">

        <h1>
          Destination not found
        </h1>

        <Link to="/explore">
          ← Back to Explore
        </Link>

      </main>
    );
  }

  return (
    <main>

      <section className="details-image">

        <img
          src={site.image}
          alt={site.name}
        />

      </section>

      <section className="details-container">

        <div className="details-main">

          <p className="section-label">
            {site.category}
          </p>

          <h1>{site.name}</h1>

          <p className="details-location">
            📍 {site.county}, Kenya
          </p>

          <div className="details-rating">
            ⭐ {site.rating} / 5
          </div>

          <p className="details-description">
            {site.description}
          </p>

          <h2>
            Activities
          </h2>

          <div className="activity-list">

            {site.activities.map(
              (activity) => (
                <span key={activity}>
                  {activity}
                </span>
              )
            )}

          </div>

        </div>

        <aside className="details-sidebar">

          <div className="info-card">

            <h3>
              Plan your visit
            </h3>

            <p>
              Entrance fee
            </p>

            <strong>
              {site.entranceFee === 0
                ? "Free"
                : `KSh ${site.entranceFee}`}
            </strong>

            <div className="details-buttons">

              <Link
                to={`/map?site=${site.id}`}
                className="primary-button"
              >
                View on Map
              </Link>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${site.latitude},${site.longitude}`}
                target="_blank"
                rel="noreferrer"
                className="direction-button"
              >
                Get Directions
              </a>

            </div>

          </div>

        </aside>

      </section>

    </main>
  );
}

export default SiteDetails;