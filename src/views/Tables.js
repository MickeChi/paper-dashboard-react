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

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Listas Creadas  </CardTitle>
                  <Button color="primary">
                    <i className="fa fa-plus"> </i>&nbsp;Nueva Lista
                  </Button>
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

export default Tables;
