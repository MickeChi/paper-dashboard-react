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

class Catalogos extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Tiendas </CardTitle>
                  <Button size="sm" color="primary">
                    <i className="fa fa-plus"> </i>&nbsp;Nueva Tienda
                  </Button>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Id</th>
                        <th>Tienda</th>
                        <th className="text-right">Opciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Tienda 1</td>
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
                        <td>Tienda 1</td>
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
                        <td>Tienda 1</td>
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
                        <td>Tienda 1</td>
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
                        <td>Tienda 1</td>
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
                        <td>Tienda 1</td>
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
                        <td>Tienda 1</td>
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
                        <td>Tienda 1</td>
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
                        <td>Tienda 1</td>
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

export default Catalogos;
