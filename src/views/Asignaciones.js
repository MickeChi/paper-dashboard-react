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

class Asignaciones extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Asignaciones de listas </CardTitle>
                  <Button color="primary">
                    <i className="fa fa-plus"> </i>&nbsp;Nueva Asignacion
                  </Button>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Id</th>
                        <th>Lista</th>
                        <th>Grupo</th>
                        <th>Usuario</th>
                        <th className="text-right">Opciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Lista 1</td>
                        <td>Salud</td>
                        <td>Carlos</td>
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
                        <td>2</td>
                        <td>Lista 2</td>
                        <td>Salud</td>
                        <td>Alberto</td>
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
                        <td>3</td>
                        <td>Lista 3</td>
                        <td>Orden</td>
                        <td>Juan</td>
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
                        <td>4</td>
                        <td>Lista 4</td>
                        <td>Orden</td>
                        <td>Jesus</td>
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
                        <td>5</td>
                        <td>Lista 5</td>
                        <td>Mantenimiento</td>
                        <td>Carlos</td>
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
                        <td>6</td>
                        <td>Lista 6</td>
                        <td>Mantenimiento</td>
                        <td>Eduardo</td>
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
                        <td>7</td>
                        <td>Lista 7</td>
                        <td>Mantenimiento</td>
                        <td>Angel</td>
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
                        <td>8</td>
                        <td>Lista 8</td>
                        <td>Salud</td>
                        <td>Rodrigo</td>
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
                        <td>9</td>
                        <td>Lista 9</td>
                        <td>Salud</td>
                        <td>María</td>
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
            {/*<Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Table on Plain Background</CardTitle>
                  <p className="card-category">
                    Here is a subtitle for this table
                  </p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th className="text-right">Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td className="text-right">$36,738</td>
                      </tr>
                      <tr>
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td className="text-right">$23,789</td>
                      </tr>
                      <tr>
                        <td>Sage Rodriguez</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td className="text-right">$56,142</td>
                      </tr>
                      <tr>
                        <td>Philip Chaney</td>
                        <td>Korea, South</td>
                        <td>Overland Park</td>
                        <td className="text-right">$38,735</td>
                      </tr>
                      <tr>
                        <td>Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td className="text-right">$63,542</td>
                      </tr>
                      <tr>
                        <td>Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td className="text-right">$78,615</td>
                      </tr>
                      <tr>
                        <td>Jon Porter</td>
                        <td>Portugal</td>
                        <td>Gloucester</td>
                        <td className="text-right">$98,615</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>*/}
          </Row>
        </div>
      </>
    );
  }
}

export default Asignaciones;
