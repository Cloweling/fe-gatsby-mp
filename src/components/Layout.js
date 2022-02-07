import Container from "react-bootstrap/Container";
import Fiscal from "./fiscal";
import Header from "./header";
import Ubicacion from "./ubicacion"

const Layout = () => {
  return (
    <Container fluid>
        <Header />
        <Fiscal />
        <Ubicacion />
    </Container>
  );
};

export default Layout;
