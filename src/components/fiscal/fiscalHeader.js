import * as React from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { FiscalContext } from "../../contexts/fiscalContext";
import { HomeContext } from "../../contexts/homeContext";

import { get } from "../../services/fiscaliaApi";

const FiscalHeader = () => {
  const { setShow, setForm, setTypeForm } = React.useContext(FiscalContext);
  const { setFiscaliaList, setSearchFiscal: setSearch } = React.useContext(HomeContext);
  const { watch, register } = useForm();

  const handleShow = () => {
    setTypeForm("Agregar");
    setForm({
      id: null,
      name: "",
      ubicacion: {
        id: null,
        name: "",
      },
    });
    setShow(true);
  };

  useEffect(() => {
    const getApi = async () => {
      const name = watch("name");
      const fiscalias = await get(name);
      if (fiscalias.status === 200) {
        setFiscaliaList(fiscalias.data);
      }

      setSearch(name);
    };

    getApi();
  }, [watch("name")]);

  return (
    <>
      <Col md="8">
        <Form>
          <Form.Group controlId="formSearch.ControlInput">
            <Form.Control type="text" {...register("name")} placeholder="Buscar Fiscal" />
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
