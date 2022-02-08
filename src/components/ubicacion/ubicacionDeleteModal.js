import * as React from "react";
import { NotificationManager } from "react-notifications";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { UbicacionContext } from "../../contexts/ubicacionContext";
import { HomeContext } from "../../contexts/homeContext";

import { get, del } from "../../services/ubicacionApi";

const UbicacionDeleteModal = () => {
  const { showDelete, setShowDelete, form } = React.useContext(UbicacionContext);
  const { setUbicacionList, searchUbicacion: search } = React.useContext(HomeContext);

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
      setUbicacionList(resData.data);
    };

    getApi();
  };

  return (
    <Modal show={showDelete} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Ubicacion</Modal.Title>
      </Modal.Header>
      <Modal.Body>{`Estas seguro que quieres eliminar al: ${form.name}`}</Modal.Body>
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

export default UbicacionDeleteModal;
