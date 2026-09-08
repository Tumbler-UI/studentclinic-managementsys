import { useState } from "react";
import "../styles/Planner.css";
import sites from "../data/sites";

function TripPlanner() {

  const [selectedSites, setSelectedSites] =
    useState([]);

  function toggleSite(site) {

    const exists =
      selectedSites.some(
        (item) => item.id === site.id
      );

    if (exists) {

      setSelectedSites(
        selectedSites.filter(
          (item) => item.id !== site.id
        )
      );

    } else {

      setSelectedSites([
        ...selectedSites,
        site,
      ]);

    }
  }

  return (
    <main className="planner-page">

      <section className="planner-header">

        <p className="section-label">
          PLAN YOUR ADVENTURE
        </p>

        <h1>
          Build your Kenya adventure
        </h1>

        <p>
          Select destinations and create your
          own adventure itinerary.
        </p>

      </section>

      <section className="planner-content">

        <div>

          <h2>
            Choose destinations
          </h2>

          <div className="planner-sites">

            {sites.map((site) => {

              const selected =
                selectedSites.some(
                  (item) =>
                    item.id === site.id
                );

              return (
                <button
                  key={site.id}
                  onClick={() =>
                    toggleSite(site)
                  }
                  className={
                    selected
                      ? "planner-site selected"
                      : "planner-site"
                  }
                >

                  <strong>
                    {site.name}
                  </strong>

                  <span>
                    {site.county}
                  </span>

                </button>
              );
            })}

          </div>

        </div>

        <aside className="itinerary">

          <h2>
            My itinerary
          </h2>

          {selectedSites.length === 0 ? (

            <p>
              Select destinations to start
              building your trip.
            </p>

          ) : (

            <ol>

              {selectedSites.map(
                (site) => (

                  <li key={site.id}>
                    {site.name}
                  </li>

                )
              )}

            </ol>

          )}

        </aside>

      </section>

    </main>
  );
}

export default TripPlanner;