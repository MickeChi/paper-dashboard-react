/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
} from "reactstrap";
import {Link} from "react-router-dom";

class Listados extends React.Component {
  render() {
    return (
        <>
          <div className="content">
            <Row>
              <Col md="12">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">Listas Creadas  </CardTitle>
                    <Link to="/admin/crear-lista" >
                      <Button color="primary">
                        <i className="fa fa-plus"> </i>&nbsp;Nueva Lista
                      </Button>
                    </Link>
                  </CardHeader>
                  <CardBody>
                    <Table responsive>
                      <thead className="text-primary">
                      <tr>
                        <th>Nombre</th>
                        <th>Cantidad Reactivos</th>
                        <th>Grupo</th>
                        <th className="text-right">Opciones</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>Lista 1</td>
                        <td>20</td>
                        <td>Salud</td>
                        <td className="text-right">
                          <Button size="sm" color="primary">
                            <i className="fa fa-edit"></i>
                          </Button>
                          <Button size="sm" color="danger">
                            <i className="fa fa-power-off"></i>
                          </Button>
                          <Button size="sm" color="warning">
                            <i className="fa fa-list"></i>
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>Lista 2</td>
                        <td>14</td>
                        <td>Salud</td>
                        <td className="text-right">
                          <Button size="sm" color="primary">
                            <i className="fa fa-edit"></i>
                          </Button>
                          <Button size="sm" color="danger">
                            <i className="fa fa-power-off"></i>
                          </Button>
                          <Button size="sm" color="warning">
                            <i className="fa fa-list"></i>
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>Lista 3</td>
                        <td>24</td>
                        <td>Orden</td>
                        <td className="text-right">
                          <Button size="sm" color="primary">
                            <i className="fa fa-edit"></i>
                          </Button>
                          <Button size="sm" color="danger">
                            <i className="fa fa-power-off"></i>
                          </Button>
                          <Button size="sm" color="warning">
                            <i className="fa fa-list"></i>
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>Lista 4</td>
                        <td>17</td>
                        <td>Orden</td>
                        <td className="text-right">
                          <Button size="sm" color="primary">
                            <i className="fa fa-edit"></i>
                          </Button>
                          <Button size="sm" color="danger">
                            <i className="fa fa-power-off"></i>
                          </Button>
                          <Button size="sm" color="warning">
                            <i className="fa fa-list"></i>
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>Lista 5</td>
                        <td>25</td>
                        <td>Mantenimiento</td>
                        <td className="text-right">
                          <Button size="sm" color="primary">
                            <i className="fa fa-edit"></i>
                          </Button>
                          <Button size="sm" color="danger">
                            <i className="fa fa-power-off"></i>
                          </Button>
                          <Button size="sm" color="warning">
                            <i className="fa fa-list"></i>
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>Lista 6</td>
                        <td>10</td>
                        <td>Mantenimiento</td>
                        <td className="text-right">
                          <Button size="sm" color="primary">
                            <i className="fa fa-edit"></i>
                          </Button>
                          <Button size="sm" color="danger">
                            <i className="fa fa-power-off"></i>
                          </Button>
                          <Button size="sm" color="warning">
                            <i className="fa fa-list"></i>
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>Lista 7</td>
                        <td>15</td>
                        <td>Mantenimiento</td>
                        <td className="text-right">
                          <Button size="sm" color="primary">
                            <i className="fa fa-edit"></i>
                          </Button>
                          <Button size="sm" color="danger">
                            <i className="fa fa-power-off"></i>
                          </Button>
                          <Button size="sm" color="warning">
                            <i className="fa fa-list"></i>
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>Lista 8</td>
                        <td>20</td>
                        <td>Salud</td>
                        <td className="text-right">
                          <Button size="sm" color="primary">
                            <i className="fa fa-edit"></i>
                          </Button>
                          <Button size="sm" color="danger">
                            <i className="fa fa-power-off"></i>
                          </Button>
                          <Button size="sm" color="warning">
                            <i className="fa fa-list"></i>
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>Lista 9</td>
                        <td>20</td>
                        <td>Salud</td>
                        <td className="text-right">
                          <Button size="sm" color="primary">
                            <i className="fa fa-edit"></i>
                          </Button>
                          <Button size="sm" color="danger">
                            <i className="fa fa-power-off"></i>
                          </Button>
                          <Button size="sm" color="warning">
                            <i className="fa fa-list"></i>
                          </Button>
                        </td>
                      </tr>

                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </>
    );
  }
}

export default Listados;
