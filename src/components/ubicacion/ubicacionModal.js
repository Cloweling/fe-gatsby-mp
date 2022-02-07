import * as React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { UbicacionContext } from "../../contexts/ubicacionContext";

const UbicacionModal = () => {
  const { show, setShow, typeForm } = React.useContext(UbicacionContext);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{typeForm} Ubicacion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="nombreFiscal">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" />
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

export default UbicacionModal;
