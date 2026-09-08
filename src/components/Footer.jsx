import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import {
  FiMail,
  FiPhone,
} from "react-icons/fi";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">

          <h2>
            ROAM
            <span> KENYA</span>
          </h2>

          <p>
            Go Beyond the Ordinary.
          </p>

          <span>
            Explore. Experience. Belong.
          </span>

        </div>


        {/* CONTACT */}
        <div className="footer-contact">

          {/* PHONE */}
          <a
            href="tel:+254793057401"
            className="footer-contact-item"
          >
            <FiPhone />

            <div>
              <strong>
                +254 793 057 401
              </strong>

              <span>
                Call us
              </span>
            </div>
          </a>


          {/* WHATSAPP */}
          <a
            href="https://wa.me/254793057401"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-item"
          >
            <FaWhatsapp />

            <div>
              <strong>
                WhatsApp
              </strong>

              <span>
                Chat with us
              </span>
            </div>
          </a>


          {/* EMAIL */}
          <a
            href="mailto:roamkenya88@gmail.com"
            className="footer-contact-item"
          >
            <FiMail />

            <div>
              <strong>
                roamkenya88@gmail.com
              </strong>

              <span>
                Let's plan your next adventure
              </span>
            </div>
          </a>

        </div>


        {/* SOCIAL MEDIA */}
        <div className="footer-social">

          <button
            type="button"
            aria-label="Instagram"
            title="Instagram"
          >
            <FaInstagram />
          </button>

          <button
            type="button"
            aria-label="Facebook"
            title="Facebook"
          >
            <FaFacebook />
          </button>

          <button
            type="button"
            aria-label="TikTok"
            title="TikTok"
          >
            <FaTiktok />
          </button>

          <button
            type="button"
            aria-label="YouTube"
            title="YouTube"
          >
            <FaYoutube />
          </button>

          <span>
            @RoamKenya
          </span>

        </div>

      </div>


      {/* COPYRIGHT */}
      <div className="footer-bottom">

        © 2026 Roam Kenya. All rights reserved.

      </div>

    </footer>
  );
}

export default Footer;