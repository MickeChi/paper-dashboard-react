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
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Table
} from "reactstrap";
import { Link } from "react-router-dom";

class DetallesAsignacionLista extends React.Component {
  render() {
    return (
        <>
          <div className="content">
            <Row>
              <Col md="12">
                <Card>
                  <CardHeader>
                    <h5 className="title">Historial de Listado 1</h5>
                  </CardHeader>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">Reactivos</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <ListGroup>
                      <ListGroupItem >Cuenta con tapete</ListGroupItem >
                      <ListGroupItem >Tiene filtro de sanitización</ListGroupItem >
                      <ListGroupItem >Todos usan cubrebocas</ListGroupItem >
                      <ListGroupItem >Todos usan caretas</ListGroupItem >
                      <ListGroupItem >Se toma la temperatura</ListGroupItem >
                    </ListGroup>
                  </CardBody>
                </Card>
              </Col>
              <Col md="8">
                <Card className="card-user">
                  <CardHeader>
                    <CardTitle tag="h5">Ejecuciones</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table responsive>
                      <thead className="text-primary">
                      <tr>
                        <th>Id</th>
                        <th>Lista</th>
                        <th>Grupo</th>
                        <th>Fecha inicio</th>
                        <th>Fecha fin</th>
                        <th className="text-right">Opciones</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>1</td>
                        <td>Lista 1</td>
                        <td>Salud</td>
                        <td>2021-01-02 12:45:33</td>
                        <td>2021-01-02 12:53:21</td>
                        <td className="text-right">
                          <Link to="/admin/detalles-asignacion-lista" >
                            <Button color="info" size="sm">
                              <i className="fa fa-tasks"></i>
                            </Button>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Lista 1</td>
                        <td>Salud</td>
                        <td>2021-01-02 12:45:33</td>
                        <td>2021-01-02 12:53:21</td>
                        <td className="text-right">
                          <Link to="/admin/detalles-asignacion-lista" >
                            <Button color="info" size="sm">
                              <i className="fa fa-tasks"></i>
                            </Button>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Lista 1</td>
                        <td>Salud</td>
                        <td>2021-01-02 12:45:33</td>
                        <td>2021-01-02 12:53:21</td>
                        <td className="text-right">
                          <Link to="/admin/detalles-asignacion-lista" >
                            <Button color="info" size="sm">
                              <i className="fa fa-tasks"></i>
                            </Button>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Lista 1</td>
                        <td>Salud</td>
                        <td>2021-01-02 12:45:33</td>
                        <td>2021-01-02 12:53:21</td>
                        <td className="text-right">
                          <Link to="/admin/detalles-asignacion-lista" >
                            <Button color="info" size="sm">
                              <i className="fa fa-tasks"></i>
                            </Button>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Lista 1</td>
                        <td>Salud</td>
                        <td>2021-01-02 12:45:33</td>
                        <td>2021-01-02 12:53:21</td>
                        <td className="text-right">
                          <Link to="/admin/detalles-asignacion-lista" >
                            <Button color="info" size="sm">
                              <i className="fa fa-tasks"></i>
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

export default DetallesAsignacionLista;
