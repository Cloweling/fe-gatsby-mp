import * as React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { UbicacionContext } from "../../contexts/ubicacionContext";
import { HomeContext } from "../../contexts/homeContext";

import { get } from "../../services/ubicacionApi";

const FiscalHeader = () => {
  const { setShow, setSearch, setForm, setTypeForm } = React.useContext(UbicacionContext);
  const { setUbicacionList } = React.useContext(HomeContext);
  const { watch, register } = useForm();

  const handleShow = () => {
    setTypeForm("Agregar");
    setForm({
      id: null,
      name: "",
    });
    setShow(true);
  };

  useEffect(() => {
    const getApi = async () => {
      const name = watch("name");
      const ubicaciones = await get(name);
      if (ubicaciones.status === 200) {
        setUbicacionList(ubicaciones.data);
      }

      setSearch(name);
    };

    getApi();
  }, [watch("name")]);

  return (
    <>
      <Col md="8">
        <Form>
          <Form.Group controlId="formSearch.ControlInputUbicacion">
            <Form.Control type="text" {...register("name")} placeholder="Buscar Ubicacion" />
          </Form.Group>
        </Form>
      </Col>
      <Col className="button-modal-add">
        <Button variant="primary" onClick={handleShow}>
          Agregar
        </Button>
      </Col>
    </>
  );
};

export default FiscalHeader;
