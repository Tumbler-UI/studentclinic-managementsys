import React from "react";
import "../styles/About.css";

function About() {
  return (
    <main className="about-page">

      <section className="about-header">

        <p className="section-label">
          ABOUT EXPLOREKE
        </p>

        <h1>
          Discover more of Kenya.
        </h1>

        <p>
          ExploreKE is designed to help people
          discover recreational destinations,
          outdoor experiences and places worth
          visiting across Kenya.
        </p>

      </section>

      <section className="about-grid">

        <div>
          <h2>
            Discover
          </h2>

          <p>
            Find recreational destinations based
            on location, activity and experience.
          </p>
        </div>

        <div>
          <h2>
            Navigate
          </h2>

          <p>
            Explore destinations on an interactive
            map and find your way to them.
          </p>
        </div>

        <div>
          <h2>
            Experience
          </h2>

          <p>
            Build your own itinerary and discover
            new adventures around Kenya.
          </p>
        </div>

      </section>

    </main>
  );
}

export default About;