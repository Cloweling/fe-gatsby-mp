import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import FiscalModal from "./fiscalModal";
import FiscalTable from "./fiscalTable";
import FiscalHeader from "./fiscalHeader";
import FiscalDeleteModal from "./fiscalDeleteModal";

import { FiscalContext } from "../../contexts/fiscalContext";

import "./style.css";

const Fiscal = () => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    id: null,
    name: "",
    ubicacion: {
      id: "",
    },
  });
  const [search, setSearch] = useState("");
  const [typeForm, setTypeForm] = useState("Guardar");
  const [showDelete, setShowDelete] = useState(false);

  return (
    <FiscalContext.Provider
      value={{ show, setShow, showDelete, setShowDelete, typeForm, setTypeForm, form, setForm, search, setSearch }}
    >
      <Container className="mt-4">
        <h1>Fiscalia</h1>
        <Row>
          <FiscalHeader />
        </Row>
        <Row className="mt-3">
          <FiscalTable />
        </Row>
      </Container>
      <FiscalModal />
      <FiscalDeleteModal />
    </FiscalContext.Provider>
  );
};

export default Fiscal;
