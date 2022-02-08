import * as React from "react";
import Table from "react-bootstrap/Table";

import FiscalIcons from "./fiscalIcons";
import { HomeContext } from "../../contexts/homeContext";

const FiscalTable = () => {
  const { fiscaliaList } = React.useContext(HomeContext);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Ubicacion</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {fiscaliaList.map((fiscalia) => {
          return (
            <tr key={fiscalia.id}>
              <td>{fiscalia.id}</td>
              <td>{fiscalia.name}</td>
              <td>{fiscalia.telefono}</td>
              <td>{fiscalia.ubicacion.name}</td>
              <td>
                <FiscalIcons fiscalia={fiscalia} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default FiscalTable;
