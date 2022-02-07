import * as React from "react";
import Icon from "react-crud-icons";

import { UbicacionContext } from "../../contexts/ubicacionContext";

const FiscalIcons = () => {
  const { setShow, setTypeForm, setShowDelete } = React.useContext(UbicacionContext);

  const onClickEdit = () => {
    setTypeForm("Editar");
    setShow(true);
  };

  const onClickDelete = () => setShowDelete(true);

  return (
    <div className="btn-crud">
      <Icon name="edit" theme="light" size="tiny" onClick={onClickEdit} />
      <Icon name="delete" theme="light" size="tiny" onClick={onClickDelete} />
    </div>
  );
};

export default FiscalIcons;
