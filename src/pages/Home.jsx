import { Link } from "react-router-dom";
import sites from "../data/sites";
import SiteCard from "../components/SiteCard";

import "../styles/Home.css";

function Home() {
  const featuredSites = sites.filter(
    (site) => site.featured
  );

  return (
    <main>

      <section className="hero">

        <div className="hero-content">

          <p className="hero-label">
            DISCOVER KENYA
          </p>

          <h1>
            Your next adventure
            <br />
            starts here.
          </h1>

          <p className="hero-text">
            Discover recreational sites, outdoor adventures,
            beautiful destinations and unforgettable
            experiences across Kenya.
          </p>

          <div className="hero-actions">

            <Link
              to="/explore"
              className="hero-primary"
            >
              Explore Destinations
            </Link>

            <Link
              to="/map"
              className="hero-secondary"
            >
              Explore Map
            </Link>

          </div>

        </div>

      </section>

      <section className="featured">

        <div className="section-heading">

          <div>
            <p className="section-label">
              DISCOVER
            </p>

            <h2>
              Popular destinations
            </h2>
          </div>

          <Link to="/explore">
            View all →
          </Link>

        </div>

        <div className="sites-grid">

          {featuredSites.map((site) => (
            <SiteCard
              key={site.id}
              site={site}
            />
          ))}

        </div>

      </section>

    </main>
  );
}

export default Home;