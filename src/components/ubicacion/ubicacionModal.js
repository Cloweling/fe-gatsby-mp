import * as React from "react";
import { useForm } from "react-hook-form";
import { NotificationManager } from "react-notifications";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { UbicacionContext } from "../../contexts/ubicacionContext";
import { HomeContext } from "../../contexts/homeContext";

import { save, get as getUbicacion, edit } from "../../services/ubicacionApi";
import { get as getFiscal} from "../../services/fiscaliaApi"

const UbicacionModal = () => {
  const { show, setShow, typeForm, form } = React.useContext(UbicacionContext);
  const { setUbicacionList, setFiscaliaList, searchUbicacion, searchFiscal } = React.useContext(HomeContext);

  const handleClose = () => setShow(false);

  const { register, reset, handleSubmit, setValue } = useForm();

  const onSubmit = async (data) => {
    const name = data.name;

    if (name) {
      if (typeForm === "Agregar") {
        await save(data);
      } else {
        const data = {
          id: form.id,
          name,
        };

        await edit(data);
      }
      setShow(false);
      let resData = await getUbicacion(searchUbicacion);
      setUbicacionList(resData.data);

      resData = await getFiscal(searchFiscal)
      setFiscaliaList(resData.data)

      NotificationManager.info(`${typeForm} la ubicacion con exito.`);
      reset({ name: "" });
      setShow(false);
    } else {
      NotificationManager.error("Es obligatorio el nombre de ubicacion.");
    }
  };

  React.useEffect(() => {
    setValue("name", form.name);
  }, [form]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{typeForm} Ubicacion</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="nombreFiscal">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" {...register("name")} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button type="submit" variant="primary">
            {typeForm}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default UbicacionModal;
