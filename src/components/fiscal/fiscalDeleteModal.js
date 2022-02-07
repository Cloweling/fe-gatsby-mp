import * as React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { FiscalContext } from "../../contexts/fiscalContext";

const FiscalDeleteModal = () => {
  const { showDelete, setShowDelete } = React.useContext(FiscalContext);

  const handleClose = () => setShowDelete(false);

  return (
    <Modal show={showDelete} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Fiscal</Modal.Title>
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

export default FiscalDeleteModal;
