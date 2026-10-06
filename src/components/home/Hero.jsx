import { Link } from "react-router-dom";
import { ArrowUpRight, Phone } from "lucide-react";

function Hero() {
  return (
    <section className="hvac-hero-v2">
      <div className="hvac-hero-v2-image" />
      <div className="hvac-hero-v2-overlay" />

      <div className="hvac-airflow">
        <span className="air-path air-path-1" />
        <span className="air-path air-path-2" />
        <span className="air-path air-path-3" />
      </div>

      <div className="hvac-hero-v2-inner">
        <div className="hvac-hero-v2-copy">
          <div className="hvac-hero-v2-kicker">
            <span />
            WEST MICHIGAN HEATING + COOLING
          </div>

          <h1>
            COMFORT
            <br />
            STARTS HERE.
          </h1>

          <p>
            Heating, cooling and indoor air service for homes across West
            Michigan. Installed right. Repaired right. Built to last.
          </p>

          <div className="hvac-hero-v2-actions">
            <Link to="/contact" className="hvac-main-cta">
              SCHEDULE SERVICE
              <ArrowUpRight size={19} />
            </Link>

            <a href="tel:6165550188" className="hvac-call-link">
              <Phone size={17} />
              (616) 555-0188
            </a>
          </div>
        </div>

        <div className="hvac-service-rail">
          <Link to="/heating">
            <span>01</span>
            HEATING
          </Link>

          <Link to="/cooling">
            <span>02</span>
            AIR CONDITIONING
          </Link>

          <Link to="/services">
            <span>03</span>
            HEAT PUMPS
          </Link>

          <Link to="/air-quality">
            <span>04</span>
            INDOOR AIR
          </Link>

          <Link to="/contact">
            <span>05</span>
            EMERGENCY SERVICE
          </Link>
        </div>
      </div>

      <div className="hvac-hero-temp">
        <span>HEAT</span>

        <div className="temp-line">
          <i className="temp-hot" />
          <i className="temp-neutral" />
          <i className="temp-cold" />
        </div>

        <span>COOL</span>
      </div>
    </section>
  );
}

export default Hero;
