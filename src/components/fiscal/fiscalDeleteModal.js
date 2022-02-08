import * as React from "react";
import { NotificationManager } from "react-notifications";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { FiscalContext } from "../../contexts/fiscalContext";
import { HomeContext } from "../../contexts/homeContext";

import { get, del } from "../../services/fiscaliaApi";

const FiscalDeleteModal = () => {
  const { showDelete, setShowDelete, form } = React.useContext(FiscalContext);
  const { setFiscaliaList, searchFiscal: search } = React.useContext(HomeContext);

  const handleClose = () => setShowDelete(false);

  const handleSubmit = () => {
    const getApi = async () => {
      const resDel = await del(form.id);

      if (resDel.status !== 200) {
        NotificationManager.error("No se puede eliminar.");
        return null;
      }

      NotificationManager.info("se elimino correctamente.");

      setShowDelete(false);
      const resData = await get(search);
      setFiscaliaList(resData.data);
    };

    getApi();
  };

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
        <Button variant="primary" onClick={handleSubmit}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FiscalDeleteModal;
