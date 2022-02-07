import * as React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { FiscalContext } from "../../contexts/fiscalContext";

const FiscalModal = () => {
  const { show, setShow, typeForm } = React.useContext(FiscalContext);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{typeForm} Fiscal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="nombreFiscal">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="telefonoFiscal">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Ubicacion</Form.Label>
            <Form.Select>
              <option>Seleleccione</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleClose}>
          {typeForm}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FiscalModal;
