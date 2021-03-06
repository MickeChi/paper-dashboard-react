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
  Alert,
} from "reactstrap";
import { Link } from "react-router-dom";

class MisListas extends React.Component {
  render() {
    return (
        <>
          <div className="content">
            <Row>
              <Col md="12" className="d-none d-md-block">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">Listas asignadas  </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table responsive>
                      <thead className="text-primary">
                      <tr>
                        <th>Id</th>
                        <th>Lista</th>
                        <th>Reactivos</th>
                        <th>Grupo</th>
                        <th>Estatus</th>
                        <th className="text-right">Opciones</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>1</td>
                        <td>Lista 1</td>
                        <td>20</td>
                        <td>Salud</td>
                        <td>
                          Activo
                        </td>
                        <td className="text-right">
                          <Link to="/admin/detalles-asignacion-lista" >
                            <Button color="info" size="sm">
                              <i className="fa fa-tasks"></i>
                            </Button>
                          </Link>
                          <Button color="default" size="sm">
                            <i className="fa fa-power-off"></i>
                          </Button>
                          <Link to="/admin/ejecucion-lista" >
                            <Button color="success" size="sm">
                              <i className="fa fa-play"></i>
                            </Button>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Lista 2</td>
                        <td>25</td>
                        <td>Mantenimiento</td>
                        <td>
                          Activo
                        </td>
                        <td className="text-right">
                          <Button color="info" size="sm">
                            <i className="fa fa-tasks"></i>
                          </Button>
                          <Button color="default" size="sm">
                            <i className="fa fa-power-off"></i>
                          </Button>
                          <Button color="warning" size="sm">
                            <i className="fa fa-circle-notch fa-spin"></i>
                          </Button>
                          <Button color="danger" size="sm">
                            <i className="fa fa-stop"></i>
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Lista 3</td>
                        <td>15</td>
                        <td>Salud</td>
                        <td>
                          Inactivo
                        </td>
                        <td className="text-right">
                          <Button color="info" size="sm">
                            <i className="fa fa-tasks"></i>
                          </Button>
                          <Button color="default" size="sm">
                            <i className="fa fa-power-off"></i>
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Lista 4</td>
                        <td>20</td>
                        <td>Salud</td>
                        <td>
                          Activo
                        </td>
                        <td className="text-right">
                          <Button color="info" size="sm">
                            <i className="fa fa-tasks"></i>
                          </Button>
                          <Button color="default" size="sm">
                            <i className="fa fa-power-off"></i>
                          </Button>
                          <Link to="/admin/ejecucion-lista" >
                            <Button color="success" size="sm">
                              <i className="fa fa-play"></i>
                            </Button>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Lista 5</td>
                        <td>30</td>
                        <td>Organización</td>
                        <td>
                          Activo
                        </td>
                        <td className="text-right">
                          <Button color="info" size="sm">
                            <i className="fa fa-tasks"></i>
                          </Button>
                          <Button color="default" size="sm">
                            <i className="fa fa-power-off"></i>
                          </Button>
                          <Link to="/admin/ejecucion-lista" >
                            <Button color="success" size="sm">
                              <i className="fa fa-play"></i>
                            </Button>
                          </Link>
                        </td>
                      </tr>

                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" className="d-xs d-md-none">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">Listas asignadas  </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table responsive>
                      <thead className="text-primary">
                      <tr>
                        <th>Id</th>
                        <th>Lista</th>
                        <th className="text-right">Opciones</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>1</td>
                        <td>Lista 1</td>
                        <td className="text-right">
                          <Link to="/admin/detalles-asignacion-lista" >
                            <Button color="info" size="sm">
                              <i className="fa fa-tasks"></i>
                            </Button>
                          </Link>
                          <Button color="default" size="sm">
                            <i className="fa fa-power-off"></i>
                          </Button>
                          <Link to="/admin/ejecucion-lista" >
                            <Button color="success" size="sm">
                              <i className="fa fa-play"></i>
                            </Button>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Lista 2</td>
                        <td className="text-right">
                          <Button color="info" size="sm">
                            <i className="fa fa-tasks"></i>
                          </Button>
                          <Button color="default" size="sm">
                            <i className="fa fa-power-off"></i>
                          </Button>
                          <Button color="warning" size="sm">
                            <i className="fa fa-circle-notch fa-spin"></i>
                          </Button>
                          <Button color="danger" size="sm">
                            <i className="fa fa-stop"></i>
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Lista 3</td>
                        <td className="text-right">
                          <Button color="info" size="sm">
                            <i className="fa fa-tasks"></i>
                          </Button>
                          <Button color="default" size="sm">
                            <i className="fa fa-power-off"></i>
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Lista 4</td>
                        <td className="text-right">
                          <Button color="info" size="sm">
                            <i className="fa fa-tasks"></i>
                          </Button>
                          <Button color="default" size="sm">
                            <i className="fa fa-power-off"></i>
                          </Button>
                          <Link to="/admin/ejecucion-lista" >
                            <Button color="success" size="sm">
                              <i className="fa fa-play"></i>
                            </Button>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Lista 5</td>
                        <td className="text-right">
                          <Button color="info" size="sm">
                            <i className="fa fa-tasks"></i>
                          </Button>
                          <Button color="default" size="sm">
                            <i className="fa fa-power-off"></i>
                          </Button>
                          <Link to="/admin/ejecucion-lista" >
                            <Button color="success" size="sm">
                              <i className="fa fa-play"></i>
                            </Button>
                          </Link>
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

export default MisListas;
