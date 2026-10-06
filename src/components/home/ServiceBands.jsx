import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const bands = [
  {
    id: "01",
    slug: "cooling",
    eyebrow: "Air Conditioning",
    title: "COOL AIR.\nRIGHT WHERE\nYOU NEED IT.",
    body:
      "Fast AC repair, high-efficiency replacement and cooling systems built to keep homes comfortable through peak summer demand.",
    cta: "Explore Cooling",
    to: "/cooling",
    theme: "band-cooling",
    note: "Cooling repair + installation",
  },
  {
    id: "02",
    slug: "heating",
    eyebrow: "Heating",
    title: "RELIABLE\nHEAT.\nBUILT FOR\nWINTER.",
    body:
      "Furnace service, heating replacement and dependable system upgrades designed for clean starts, strong output and consistent warmth.",
    cta: "Explore Heating",
    to: "/heating",
    theme: "band-heating",
    note: "Heating service + replacement",
  },
  {
    id: "03",
    slug: "air-quality",
    eyebrow: "Indoor Air Quality",
    title: "CLEANER AIR.\nBETTER\nLIVING.",
    body:
      "Filtration, airflow and indoor air quality solutions that help the home feel fresher, cleaner and easier to live in every day.",
    cta: "Explore Air Quality",
    to: "/air-quality",
    theme: "band-air",
    note: "Filtration + airflow + purification",
  },
];

function ServiceBands() {
  return (
    <section className="service-bands">
      {bands.map((band) => (
        <section
          key={band.slug}
          className={`service-band ${band.theme}`}
        >
          <div className="service-band-motion" aria-hidden="true">
            <span className="motion-line line-1" />
            <span className="motion-line line-2" />
            <span className="motion-line line-3" />
            <span className="motion-line line-4" />
            <span className="motion-glow" />
          </div>

          <div className="service-band-inner">
            <div className="service-band-topline">
              <span>{band.id}</span>
              <span>{band.eyebrow}</span>
            </div>

            <div className="service-band-grid">
              <div className="service-band-left">
                <h2>
                  {band.title.split("\n").map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h2>
              </div>

              <div className="service-band-right">
                <p>{band.body}</p>

                <div className="service-band-actions">
                  <Link to={band.to} className="band-link-primary">
                    {band.cta}
                    <ArrowUpRight size={18} />
                  </Link>

                  <Link to="/contact" className="band-link-secondary">
                    Schedule Service
                    <ArrowUpRight size={18} />
                  </Link>
                </div>

                <div className="service-band-note">{band.note}</div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}

export default ServiceBands;
