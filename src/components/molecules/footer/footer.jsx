import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos
          reservados.
        </p>
        <nav className="footer-links">
          <NavLink to="/privacy" className="footer-link">
            Política de privacidad
          </NavLink>
         {" | "}
          <NavLink to="/terms-service" className="footer-link">Términos de servicio</NavLink>
          {" | "}         
          <p className="footer-link">Contacto</p>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
