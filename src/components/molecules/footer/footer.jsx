
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
        <p>Política de privacidad | Términos de servicio | Contacto</p>
      </div>
    </footer>
  );
};

export default Footer;