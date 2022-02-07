import Table from "react-bootstrap/Table";

import FiscalIcons from "./ubicacionIcons"

const UbiacionTable = () => {
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>
              <FiscalIcons />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>
              <FiscalIcons />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>
              <FiscalIcons />
            </td>
          </tr>
        </tbody>
      </Table>
    );
}

export default UbiacionTable