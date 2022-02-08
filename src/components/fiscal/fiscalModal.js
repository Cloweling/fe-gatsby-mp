import * as React from "react";
import { useForm } from "react-hook-form";
import { NotificationManager } from "react-notifications";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { FiscalContext } from "../../contexts/fiscalContext";
import { HomeContext } from "../../contexts/homeContext";

import { save, get, edit } from "../../services/fiscaliaApi";

const FiscalModal = () => {
  const { show, setShow, typeForm, form } = React.useContext(FiscalContext);
  const { setFiscaliaList, ubicacionList, searchFiscal: search } = React.useContext(HomeContext);

  const handleClose = () => setShow(false);

  const { register, reset, handleSubmit, setValue } = useForm();

  const onSubmit = async (data) => {
    const name = data.name;
    const telefono = data.telefono;
    const ubicacionId = data.ubicacion;

    if (name && telefono && ubicacionId) {
      const regex = new RegExp(/\d{4}-\d{4}$/);

      if (!regex.test(telefono)) {
        NotificationManager.error("El numero debe ser ejem 4546-7879.");
        return null;
      }

      const data = {
        name,
        telefono,
        ubicacion: {
          id: parseInt(ubicacionId),
        },
      };

      if (typeForm === "Agregar") {
        await save(data);
      } else {
        data.id = form.id;
        await edit(data);
      }

      setShow(false);
      const resData = await get(search);
      setFiscaliaList(resData.data);

      NotificationManager.info(`${typeForm} la fiscalia con exito.`);
      reset({ name: "", telefono: "", ubicacion: 0 });
      setShow(false);
    } else {
      NotificationManager.error("Es obligatorio el nombre, telefono y ubicacion son obligatorios.");
    }
  };

  React.useEffect(() => {
    setValue("name", form.name);
    setValue("telefono", form.telefono);
    setValue("ubicacion", form.ubicacion.id);
  }, [form]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{typeForm} Fiscal</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="nombreFiscal">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" {...register("name")} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="telefonoFiscal">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="text" placeholder="0000-0000" {...register("telefono")} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Ubicacion</Form.Label>
            <Form.Select {...register("ubicacion")}>
              <option value="0">Seleleccione</option>
              {ubicacionList.map((ubicacion) => {
                return (
                  <option key={ubicacion.id} value={ubicacion.id}>
                    {ubicacion.name}
                  </option>
                );
              })}
            </Form.Select>
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

export default FiscalModal;
