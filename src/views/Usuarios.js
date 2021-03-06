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

class Usuarios extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Usuarios </CardTitle>
                  <Button color="primary">
                    <i className="fa fa-plus"> </i>&nbsp;Nuevo Usuario
                  </Button>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Id</th>
                        <th>Usuario</th>
                        <th>Email</th>
                        <th>Tienda</th>
                        <th>Rol</th>
                        <th className="text-right">Opciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Carlos</td>
                        <td>dummy@dominio.com</td>
                        <td>Tienda 1</td>
                        <td>Gerente de tienda</td>
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
                        <td>Alberto</td>
                        <td>dummy@dominio.com</td>
                        <td>Tienda 1</td>
                        <td>Gerente de tienda</td>
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
                        <td>Juan</td>
                        <td>dummy@dominio.com</td>
                        <td>Tienda 1</td>
                        <td>Gerente de tienda</td>
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
                        <td>Jesus</td>
                        <td>dummy@dominio.com</td>
                        <td>Tienda 1</td>
                        <td>Gerente de tienda</td>
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
                        <td>Carlos</td>
                        <td>dummy@dominio.com</td>
                        <td>Tienda 1</td>
                        <td>Gerente de tienda</td>
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
                        <td>Eduardo</td>
                        <td>dummy@dominio.com</td>
                        <td>Tienda 1</td>
                        <td>Gerente de tienda</td>
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
                        <td>Angel</td>
                        <td>dummy@dominio.com</td>
                        <td>Tienda 1</td>
                        <td>Gerente de tienda</td>
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
                        <td>Rodrigo</td>
                        <td>dummy@dominio.com</td>
                        <td>Tienda 1</td>
                        <td>Gerente de tienda</td>
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
                        <td>María</td>
                        <td>dummy@dominio.com</td>
                        <td>Tienda 1</td>
                        <td>Gerente de tienda</td>
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

export default Usuarios;
