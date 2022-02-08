import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { NotificationContainer } from "react-notifications";

import Fiscal from "./fiscal";
import Header from "./header";
import Ubicacion from "./ubicacion";

import { HomeContext } from "./../contexts/homeContext";
import { get as getUbicacion } from "../services/ubicacionApi";
import { get as getFiscalia } from "../services/fiscaliaApi";

const Layout = () => {
  const [ubicacionList, setUbicacionList] = useState([]);
  const [fiscaliaList, setFiscaliaList] = useState([]);
  const [searchUbicacion, setSearchUbicacion] = useState("");
  const [searchFiscal, setSearchFiscal] = useState("");

  useEffect(() => {
    const getApi = async () => {
      const ubicaciones = await getUbicacion();
      if (ubicaciones.status === 200) {
        setUbicacionList(ubicaciones.data);
      }

      const fiscalias = await getFiscalia();
      if (fiscalias.status === 200) {
        setFiscaliaList(fiscalias.data);
      }
    };

    getApi();
  }, []);

  return (
    <HomeContext.Provider
      value={{
        ubicacionList,
        setUbicacionList,
        fiscaliaList,
        setFiscaliaList,
        searchFiscal,
        setSearchFiscal,
        searchUbicacion,
        setSearchUbicacion,
      }}
    >
      <Container fluid>
        <Header />
        <Fiscal />
        <Ubicacion />
      </Container>
      <NotificationContainer />
    </HomeContext.Provider>
  );
};

export default Layout;
