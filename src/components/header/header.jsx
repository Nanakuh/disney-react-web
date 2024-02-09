import { NavLink } from "react-router-dom";
import "./header.css";


function Header () {
  return(
  <div className="navbar">
            <div className="container">
          <a href="#" className="brand-logo">
            Logo
          </a>
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
}
export default Header;