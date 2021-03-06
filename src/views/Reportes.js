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
  Table,
} from "reactstrap";

class Reportes extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Crear reporte</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="3">
                        <FormGroup>
                          <label>Fecha Inicio</label>
                          <Input
                              defaultValue="2021-03-01"
                              placeholder="Username"
                              type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Fecha Fin</label>
                          <Input
                              defaultValue="2021-03-02"
                              placeholder="Username"
                              type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Tienda</label>
                          <Input
                              defaultValue="2021-03-02"
                              placeholder="Tienda 1"
                              type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Lista</label>
                          <Input
                              defaultValue="2021-03-02"
                              placeholder="Lista 3"
                              type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="3">
                        <FormGroup>
                          <label>Grupo</label>
                          <Input
                              defaultValue="Salud"
                              placeholder="Grupo"
                              type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Nombre</label>
                          <Input
                            defaultValue="Juan"
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1 mt-3" md="4">

                          <Button
                              className="btn-round"
                              color="primary"
                              type="submit"
                          >
                            Generar Reporte
                          </Button>
                      </Col>
                    </Row>

                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">
                    <Button color="primary">
                      <i className="fa fa-file-excel"></i> Exportar
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                <thead className="text-primary">
                <tr>
                  <th>Id</th>
                  <th>Lista</th>
                  <th>Grupo</th>
                  <th>Usuario</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>Lista 1</td>
                  <td>Salud</td>
                  <td>Carlos</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Lista 2</td>
                  <td>Salud</td>
                  <td>Alberto</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Lista 3</td>
                  <td>Orden</td>
                  <td>Juan</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Lista 4</td>
                  <td>Orden</td>
                  <td>Jesus</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Lista 5</td>
                  <td>Mantenimiento</td>
                  <td>Carlos</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Lista 6</td>
                  <td>Mantenimiento</td>
                  <td>Eduardo</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Lista 7</td>
                  <td>Mantenimiento</td>
                  <td>Angel</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Lista 8</td>
                  <td>Salud</td>
                  <td>Rodrigo</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Lista 9</td>
                  <td>Salud</td>
                  <td>María</td>
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

export default Reportes;
