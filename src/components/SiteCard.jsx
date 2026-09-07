import { Link } from "react-router-dom";

function SiteCard({ site }) {
  return (
    <article className="site-card">

      <div className="site-image">

        <img
          src={site.image}
          alt={site.name}
        />

        {site.featured && (
          <span className="featured-badge">
            Featured
          </span>
        )}

      </div>

      <div className="site-card-content">

        <p className="site-category">
          {site.category}
        </p>

        <h3>{site.name}</h3>

        <p className="site-location">
          📍 {site.county}, Kenya
        </p>

        <p className="site-description">
          {site.shortDescription}
        </p>

        <div className="site-card-footer">

          <span>
            ⭐ {site.rating}
          </span>

          <Link
            to={`/sites/${site.slug}`}
            className="view-site"
          >
            Explore →
          </Link>

        </div>

      </div>

    </article>
  );
}

export default SiteCard;