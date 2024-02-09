import PropTypes from "prop-types";
import Footer from "./components/molecules/footer/footer";
import Header from "./components/molecules/header/header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.any,
};
export default Layout;
