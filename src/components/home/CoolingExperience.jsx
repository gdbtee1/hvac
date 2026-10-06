import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function CoolingExperience() {
  return (
    <section className="cooling-experience">
      <div className="cooling-backdrop" />
      <div className="cooling-vignette" />

      <div className="cooling-airfield" aria-hidden="true">
        <svg
          className="cooling-stream cooling-stream-a"
          viewBox="0 0 1400 500"
          preserveAspectRatio="none"
        >
          <path d="M-120,310 C210,120 430,120 690,250 C930,370 1110,360 1510,120" />
        </svg>

        <svg
          className="cooling-stream cooling-stream-b"
          viewBox="0 0 1400 500"
          preserveAspectRatio="none"
        >
          <path d="M-120,390 C230,230 460,250 740,330 C1030,410 1180,320 1510,190" />
        </svg>

        <svg
          className="cooling-stream cooling-stream-c"
          viewBox="0 0 1400 500"
          preserveAspectRatio="none"
        >
          <path d="M-120,220 C240,80 520,120 790,200 C1080,290 1250,240 1510,70" />
        </svg>

        <div className="cooling-mist cooling-mist-one" />
        <div className="cooling-mist cooling-mist-two" />

        <div className="cooling-particles">
          {Array.from({ length: 18 }).map((_, index) => (
            <i key={index} style={{ "--i": index }} />
          ))}
        </div>
      </div>

      <div className="cooling-inner">
        <div className="cooling-topline">
          <span>01</span>
          <span>AIR CONDITIONING</span>
          <span>WEST MICHIGAN</span>
        </div>

        <div className="cooling-copy">
          <span className="cooling-kicker">COOLING / SERVICE</span>

          <h2>
            WHEN THE AIR
            <br />
            STOPS MOVING,
            <br />
            YOU FEEL IT.
          </h2>

          <p>
            AC repair, replacement and cooling systems built around the way air
            actually moves through your home—not just the number on the thermostat.
          </p>

          <div className="cooling-actions">
            <Link to="/cooling" className="cooling-primary-link">
              EXPLORE COOLING
              <ArrowUpRight size={18} />
            </Link>

            <Link to="/contact" className="cooling-secondary-link">
              SCHEDULE AC SERVICE
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        <div className="cooling-readout">
          <span>SUPPLY AIR</span>
          <strong>54°</strong>
          <small>COOLED AIR / DELIVERY</small>
        </div>

        <div className="cooling-direction cooling-direction-one">
          <span />
          SUPPLY
        </div>

        <div className="cooling-direction cooling-direction-two">
          <span />
          RETURN
        </div>
      </div>
    </section>
  );
}

export default CoolingExperience;
