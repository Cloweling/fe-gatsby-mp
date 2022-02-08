import * as React from "react";
import Icon from "react-crud-icons";

import { FiscalContext } from "../../contexts/fiscalContext";

const FiscalIcons = ({ fiscalia }) => {
  const { setShow, setTypeForm, setShowDelete, setForm } = React.useContext(FiscalContext);

  const onClickEdit = () => {
    setTypeForm("Editar");
    setForm({
      id: fiscalia.id,
      name: fiscalia.name,
      telefono: fiscalia.telefono,
      ubicacion: {
        id: fiscalia.ubicacion.id,
        name: fiscalia.ubicacion.name,
      },
    });
    setShow(true);
  };

  const onClickDelete = () => {
    setForm({
      id: fiscalia.id,
      name: fiscalia.name,
      telefono: fiscalia.telefono,
      ubicacion: {
        id: fiscalia.ubicacion.id,
        name: fiscalia.ubicacion.name,
      },
    });
    setShowDelete(true);
  };

  return (
    <div className="btn-crud">
      <Icon name="edit" theme="light" size="tiny" onClick={onClickEdit} />
      <Icon name="delete" theme="light" size="tiny" onClick={onClickDelete} />
    </div>
  );
};

export default FiscalIcons;
