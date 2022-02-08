import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import UbicacionModal from "./ubicacionModal";
import UbicacionTable from "./ubicacionTable";
import UbicacionHeader from "./ubicacionHeader";
import UbicacionDeleteModal from "./ubicacionDeleteModal";

import { UbicacionContext } from "../../contexts/ubicacionContext";

import "./style.css";

const Ubicacion = () => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    id: null,
    name: "",
  });

  const [typeForm, setTypeForm] = useState("Guardar");
  const [showDelete, setShowDelete] = useState(false);

  return (
    <UbicacionContext.Provider
      value={{ show, setShow, showDelete, setShowDelete, typeForm, setTypeForm, form, setForm }}
    >
      <Container className="mt-4">
        <h1>Ubicacion</h1>
        <Row>
          <UbicacionHeader />
        </Row>
        <Row className="mt-3">
          <UbicacionTable />
        </Row>
      </Container>
      <UbicacionModal />
      <UbicacionDeleteModal />
    </UbicacionContext.Provider>
  );
};

export default Ubicacion;
