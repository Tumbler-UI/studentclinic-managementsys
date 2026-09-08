import { Link } from "react-router-dom";
import "../styles/Categories.css";
import sites from "../data/sites";

function Categories() {

  const categories = [
    ...new Set(
      sites.map((site) => site.category)
    ),
  ];

  return (
    <main className="categories-page">

      <div className="categories-header">

        <p className="section-label">
          DISCOVER
        </p>

        <h1>
          Explore by category
        </h1>

        <p>
          Find an experience that matches
          your idea of adventure.
        </p>

      </div>

      <div className="category-grid">

        {categories.map((category) => {

          const count =
            sites.filter(
              (site) =>
                site.category === category
            ).length;

          return (
            <Link
              key={category}
              to={`/explore?category=${encodeURIComponent(category)}`}
              className="category-card"
            >

              <h2>
                {category}
              </h2>

              <p>
                {count} destinations
              </p>

            </Link>
          );
        })}

      </div>

    </main>
  );
}

export default Categories;