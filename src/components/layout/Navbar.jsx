import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X, Phone } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="hvac-navbar">
        <div className="hvac-nav-inner">
          <Link to="/" className="hvac-brand">
            <div className="hvac-brand-mark">
              <span className="brand-cold" />
              <span className="brand-hot" />
            </div>

            <div>
              <strong>NORTHLINE</strong>
              <span>HEATING + AIR</span>
            </div>
          </Link>

          <nav className="hvac-desktop-nav">
            <NavLink to="/heating">HEATING</NavLink>
            <NavLink to="/cooling">COOLING</NavLink>
            <NavLink to="/air-quality">AIR QUALITY</NavLink>
            <NavLink to="/services">SERVICES</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
          </nav>

          <div className="hvac-nav-actions">
            <a href="tel:6165550188" className="hvac-phone">
              <Phone size={17} />
              <span>(616) 555-0188</span>
            </a>

            <Link to="/contact" className="hvac-service-button">
              SCHEDULE SERVICE
              <ArrowUpRight size={17} />
            </Link>

            <button
              className="hvac-menu-button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <div className={`hvac-mobile-menu ${open ? "open" : ""}`}>
        <div className="hvac-mobile-top">
          <Link to="/" className="hvac-brand" onClick={closeMenu}>
            <div className="hvac-brand-mark">
              <span className="brand-cold" />
              <span className="brand-hot" />
            </div>

            <div>
              <strong>NORTHLINE</strong>
              <span>HEATING + AIR</span>
            </div>
          </Link>

          <button onClick={closeMenu} className="hvac-mobile-close">
            <X size={25} />
          </button>
        </div>

        <nav className="hvac-mobile-links">
          <NavLink to="/heating" onClick={closeMenu}>
            <span>01</span>
            HEATING
          </NavLink>

          <NavLink to="/cooling" onClick={closeMenu}>
            <span>02</span>
            COOLING
          </NavLink>

          <NavLink to="/air-quality" onClick={closeMenu}>
            <span>03</span>
            AIR QUALITY
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            <span>04</span>
            SERVICES
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            <span>05</span>
            ABOUT
          </NavLink>
        </nav>

        <div className="hvac-mobile-bottom">
          <a href="tel:6165550188">
            <small>CALL NORTHLINE</small>
            <strong>(616) 555-0188</strong>
          </a>

          <Link
            to="/contact"
            className="hvac-mobile-cta"
            onClick={closeMenu}
          >
            SCHEDULE SERVICE
            <ArrowUpRight size={19} />
          </Link>
        </div>

        <div className="mobile-air-line air-one" />
        <div className="mobile-air-line air-two" />
        <div className="mobile-air-line air-three" />
      </div>
    </>
  );
}

export default Navbar;
