import * as React from "react";
import Table from "react-bootstrap/Table";

import FiscalIcons from "./ubicacionIcons";
import { HomeContext } from "../../contexts/homeContext";

const UbiacionTable = () => {
  const { ubicacionList } = React.useContext(HomeContext);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {ubicacionList.map((ubicacion) => {
          return (
            <tr key={ubicacion.id}>
              <td>{ubicacion.id}</td>
              <td>{ubicacion.name}</td>
              <td>
                <FiscalIcons ubicacion={ubicacion} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default UbiacionTable;
