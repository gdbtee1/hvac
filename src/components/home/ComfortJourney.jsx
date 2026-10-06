import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function ComfortJourney() {
  return (
    <section className="comfort-journey">

      {/* =====================================
          SCENE 01 — INSIDE THE HOME
      ====================================== */}

      <div className="comfort-scene">
        <div className="comfort-copy">
          <span className="scene-label">
            01 / INSIDE THE HOME
          </span>

          <p className="comfort-statement">
            The best HVAC system is the one you stop noticing.
          </p>

          <h2>
            COMFORT
            <br />
            SHOULD REACH
            <br />
            EVERY ROOM.
          </h2>

          <p className="comfort-body">
            Heating and cooling only work when conditioned air can move through
            the home properly. Supply, return, filtration and equipment all
            have to work together.
          </p>

          <Link to="/services" className="journey-link">
            HOW HOME COMFORT WORKS
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="comfort-photo">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90"
            alt="Comfortable modern home interior"
          />

          <div className="comfort-photo-shade" />

          <div className="air-marker marker-supply">
            <i />
            <span>SUPPLY AIR</span>
          </div>

          <div className="air-marker marker-return">
            <i />
            <span>RETURN AIR</span>
          </div>

          <div className="air-marker marker-room">
            <i />
            <span>CONDITIONED SPACE</span>
          </div>
        </div>

        <svg
          className="journey-airflow journey-airflow-one"
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M-80 330 C220 330 250 80 590 125 C850 160 820 390 1280 250"
            pathLength="1"
          />
        </svg>
      </div>


      {/* =====================================
          TRANSITION
      ====================================== */}

      <div className="journey-transition">
        <span>THE AIR YOU FEEL</span>

        <div className="transition-line">
          <i />
        </div>

        <span>STARTS HERE</span>
      </div>


      {/* =====================================
          SCENE 02 — THE EQUIPMENT
      ====================================== */}

      <div className="mechanical-scene">
        <div className="mechanical-photo">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2000&q=90"
            alt="HVAC technician servicing equipment"
          />

          <div className="mechanical-photo-shade" />

          <div className="mechanical-note note-one">
            <span>01</span>
            AIR HANDLING
          </div>

          <div className="mechanical-note note-two">
            <span>02</span>
            TEMPERATURE CONTROL
          </div>

          <div className="mechanical-note note-three">
            <span>03</span>
            SYSTEM OUTPUT
          </div>
        </div>

        <div className="mechanical-copy">
          <span className="scene-label">
            02 / BEHIND THE COMFORT
          </span>

          <h2>
            WHERE AIR
            <br />
            BECOMES
            <br />
            COMFORT.
          </h2>

          <p>
            Furnaces, air conditioners, heat pumps and ductwork are not
            separate pieces. They form one system responsible for moving,
            conditioning and returning air throughout the property.
          </p>

          <div className="mechanical-links">
            <Link to="/heating">
              HEATING
              <ArrowUpRight size={16} />
            </Link>

            <Link to="/cooling">
              COOLING
              <ArrowUpRight size={16} />
            </Link>

            <Link to="/air-quality">
              INDOOR AIR
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <svg
          className="journey-airflow journey-airflow-two"
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M-100 120 C260 60 350 430 690 330 C920 260 960 80 1300 120"
            pathLength="1"
          />
        </svg>
      </div>

    </section>
  );
}

export default ComfortJourney;
