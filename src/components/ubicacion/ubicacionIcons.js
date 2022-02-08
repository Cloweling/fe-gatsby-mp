import * as React from "react";
import Icon from "react-crud-icons";

import { UbicacionContext } from "../../contexts/ubicacionContext";

const FiscalIcons = ({ ubicacion }) => {
  const { setShow, setTypeForm, setShowDelete, setForm } = React.useContext(UbicacionContext);

  const onClickEdit = () => {
    setTypeForm("Editar");
    setForm({
      id: ubicacion.id,
      name: ubicacion.name,
    });
    setShow(true);
  };

  const onClickDelete = () => {
    setForm({
      id: ubicacion.id,
      name: ubicacion.name,
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
