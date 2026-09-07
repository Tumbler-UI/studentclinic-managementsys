import { useState } from "react";

import sites from "../data/sites";
import SiteCard from "../components/SiteCard";

import "../styles/Explore.css";

function Explore() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(
      sites.map((site) => site.category)
    ),
  ];

  const filteredSites = sites.filter((site) => {

    const searchText =
      `${site.name} ${site.county} ${site.category}`
        .toLowerCase();

    const matchesSearch =
      searchText.includes(
        search.toLowerCase()
      );

    const matchesCategory =
      category === "All" ||
      site.category === category;

    return (
      matchesSearch &&
      matchesCategory
    );
  });

  return (
    <main className="explore-page">

      <section className="explore-header">

        <p className="section-label">
          EXPLORE KENYA
        </p>

        <h1>
          Find your next destination
        </h1>

        <p>
          Search recreational sites, adventures,
          beaches, hiking destinations and wildlife
          experiences across Kenya.
        </p>

      </section>

      <section className="filters">

        <input
          type="text"
          placeholder="Search by destination, county or activity..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />

        <div className="categories">

          {categories.map((item) => (

            <button
              key={item}
              className={
                category === item
                  ? "category-active"
                  : ""
              }
              onClick={() =>
                setCategory(item)
              }
            >
              {item}
            </button>

          ))}

        </div>

      </section>

      <div className="results-count">
        {filteredSites.length} destinations found
      </div>

      <section className="sites-grid">

        {filteredSites.map((site) => (

          <SiteCard
            key={site.id}
            site={site}
          />

        ))}

      </section>

      {filteredSites.length === 0 && (
        <div className="no-results">
          <h2>No destinations found</h2>
          <p>
            Try another search or category.
          </p>
        </div>
      )}

    </main>
  );
}

export default Explore;