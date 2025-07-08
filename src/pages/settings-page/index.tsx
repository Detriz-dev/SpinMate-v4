import { Link } from "react-router-dom";
import { Header } from "../../componets/header";

export function SettingsPage() {
  return (
    <>
      <Header />
      <div className="settings-page">
        <h1>Settings Page</h1>
        <nav>
          <ul className="settings-menu">
            <li>
              <Link to="/labels" className="settings-link">
                Labels
              </Link>
            </li>
            <li>
              <Link to="/mechanics" className="settings-link">
                Mechanics
              </Link>
            </li>
            <li>
              <Link to="/services" className="settings-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/service-parts" className="settings-link">
                Service Parts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}