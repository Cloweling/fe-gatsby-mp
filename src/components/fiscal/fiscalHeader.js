import * as React from "react";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { FiscalContext } from "../../contexts/fiscalContext";

const FiscalHeader = () => {
  const handleShow = () => setShow(true);
  const { setShow } = React.useContext(FiscalContext);

  return (
    <>
      <Col md="8">
        <Form>
          <Form.Group controlId="formSearch.ControlInput">
            <Form.Control type="text" placeholder="Buscar Fiscal" />
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

export default FiscalHeader
