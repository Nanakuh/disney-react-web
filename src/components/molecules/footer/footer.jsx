import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos
          reservados.
        </p>
        <div className="footer-links">
          <p className="footer-link">Política de privacidad</p>
          <p className="footer-link">|</p>           
          <p className="footer-link">Términos de servicio</p>
          <p className="footer-link">|</p> 
          <p className="footer-link">Contacto</p> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
