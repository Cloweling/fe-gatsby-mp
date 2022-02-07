import * as React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { UbicacionContext } from "../../contexts/ubicacionContext"
const UbicacionDeleteModal = () => {
  const { showDelete, setShowDelete } = React.useContext(UbicacionContext);

  const handleClose = () => setShowDelete(false);

  return (
    <Modal show={showDelete} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Ubicacion</Modal.Title>
      </Modal.Header>
      <Modal.Body>Estas seguro que quieres eliminarlo</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UbicacionDeleteModal;
