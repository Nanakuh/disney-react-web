import { NavLink } from "react-router-dom";
import "./header.css"


const Header = () => {
  return (
    <div className="navbar">
      <div className="container">
        <NavLink to="/" className="brand-logo">
          <img className="header-logo" src="../../../../logo.jpeg" alt="header-logo" />
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/faqs">FAQS</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
