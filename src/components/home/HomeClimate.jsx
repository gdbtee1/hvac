import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const systems = [
  {
    id: "01",
    name: "HEATING",
    short: "WARMTH",
    title: "HEAT WHERE YOU NEED IT.",
    description:
      "A properly designed heating system moves warm air evenly through the home without creating hot rooms, cold corners or wasted energy.",
    className: "state-heating",
  },
  {
    id: "02",
    name: "COOLING",
    short: "COOLING",
    title: "COOL AIR. EVENLY DELIVERED.",
    description:
      "Cooling is more than lowering the thermostat. Airflow, equipment sizing and duct performance determine how the house actually feels.",
    className: "state-cooling",
  },
  {
    id: "03",
    name: "AIRFLOW",
    short: "MOVEMENT",
    title: "AIR HAS TO MOVE.",
    description:
      "Supply vents and returns work together to move conditioned air through every room and back through the system.",
    className: "state-airflow",
  },
  {
    id: "04",
    name: "AIR QUALITY",
    short: "INDOOR AIR",
    title: "WHAT YOU BREATHE MATTERS.",
    description:
      "Filtration, humidity and ventilation all affect the air moving through your home every day.",
    className: "state-quality",
  },
];

function HomeClimate() {
  const [active, setActive] = useState(1);
  const system = systems[active];

  return (
    <section className={`home-climate ${system.className}`}>
      <div className="home-climate-head">
        <div>
          <span>HOME COMFORT / 01</span>

          <h2>
            AIR MOVES
            <br />
            THROUGH
            <br />
            EVERYTHING.
          </h2>
        </div>

        <div className="home-climate-intro">
          <p>
            Your equipment is only one part of the system. Comfort depends on
            how heating, cooling, airflow and indoor air work together.
          </p>

          <div className="climate-mode-nav">
            {systems.map((item, index) => (
              <button
                key={item.id}
                className={active === index ? "active" : ""}
                onClick={() => setActive(index)}
              >
                <span>{item.id}</span>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="climate-scene">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90"
          alt="Modern home interior"
        />

        <div className="climate-scene-shade" />

        <div className="climate-air climate-air-one" />
        <div className="climate-air climate-air-two" />
        <div className="climate-air climate-air-three" />

        <div className="climate-annotation annotation-supply">
          <span />
          SUPPLY AIR
        </div>

        <div className="climate-annotation annotation-return">
          <span />
          RETURN AIR
        </div>

        <div className="climate-annotation annotation-temp">
          <span />
          CONDITIONED SPACE
        </div>

        <div className="climate-scene-copy">
          <span>
            {system.id} / {system.short}
          </span>

          <h3>{system.title}</h3>

          <p>{system.description}</p>

          <Link
            to={active === 0 ? "/heating" : active === 1 ? "/cooling" : active === 3 ? "/air-quality" : "/services"}
          >
            EXPLORE {system.name}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeClimate;
