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
  FormGroup,
  Input,
  Label,
  CardFooter
} from "reactstrap";
import { Link } from "react-router-dom";

class EjecucionLista extends React.Component {
  render() {
    return (
        <>
          <div className="content">
            <Row>
              <Col md="12" className="d-none d-md-block">
                <Card>
                  <CardHeader>
                    <h5 className="title">Ejecución de Listado 1</h5>
                    <h6>
                      Grupo: Salud | Fecha Inicio: 2021-03-01 12:34:22 - Fecha Fin: 0000-00-00 00:00:00
                    </h6>
                  </CardHeader>
                  <CardBody>
                    <Table responsive>
                      <thead className="text-primary">
                      <tr>
                        <th>Id</th>
                        <th>Reactivo</th>
                        <th>Descripción</th>
                        <th className="text-right" colSpan="2">Opciones</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>1</td>
                        <td>Existe tapete</td>
                        <td>Si el tapete sanitizante existe en la tienda y si este esta siendo usado de manera correta </td>
                        <td>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              Sí
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                        </td>
                        <td>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              No
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Uso de careta</td>
                        <td>Si el personal de la tienda usa la careta correctamente </td>
                        <td>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              Sí
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                        </td>
                        <td>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              No
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Existe tapete</td>
                        <td>Si el tapete sanitizante existe en la tienda y si este esta siendo usado de manera correta </td>
                        <td>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              Sí
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                        </td>
                        <td>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              No
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Uso de medidas de higiene</td>
                        <td>Si el personal de la tienda se apega a las normas de higiene </td>
                        <td>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              Sí
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                        </td>
                        <td>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              No
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Uso de gel antibacterial</td>
                        <td>Si se proporciona a los clientes y empleados gel antibacterial de manera constante </td>
                        <td>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              Sí
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                        </td>
                        <td>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              No
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Toma de temperatura</td>
                        <td>Si al entrar a la tienda se le toma la temperatura tanto a clientes como empleados </td>
                        <td>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              Sí
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                        </td>
                        <td>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              No
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                  <CardFooter className="text-muted text-right">
                    <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                    >
                      Finalizar lista
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col sm="12" className="d-xs d-md-none">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <h5 className="title">Ejecución de Listado 1</h5>
                      <p>
                        Grupo: Salud <br/>Fecha Inicio: 2021-03-01 12:34:22 <br/> Fecha Fin: 0000-00-00 00:00:00
                      </p>
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table responsive>
                      <thead className="text-primary">
                      <tr>
                        <th>Reactivo</th>
                        <th>Descripción</th>
                        <th className="text-right" >Opciones</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>Existe tapete</td>
                        <td>Si el tapete sanitizante existe en la tienda y si este esta siendo usado de manera correta </td>
                        <td>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              Sí
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              No
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Uso de careta</td>
                        <td>Si el personal de la tienda usa la careta correctamente </td>
                        <td>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              Sí
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              No
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Existe tapete</td>
                        <td>Si el tapete sanitizante existe en la tienda y si este esta siendo usado de manera correta </td>
                        <td>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              Sí
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              No
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Uso de medidas de higiene</td>
                        <td>Si el personal de la tienda se apega a las normas de higiene </td>
                        <td>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              Sí
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              No
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Uso de gel antibacterial</td>
                        <td>Si se proporciona a los clientes y empleados gel antibacterial de manera constante </td>
                        <td>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              Sí
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              No
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Toma de temperatura</td>
                        <td>Si al entrar a la tienda se le toma la temperatura tanto a clientes como empleados </td>
                        <td>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              Sí
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                          <div className="form-check-radio">
                            <Label className="form-check-label">
                              <Input type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                              No
                              <span className="form-check-sign"></span>
                            </Label>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </Table>
                  </CardBody>
                  <CardFooter className="text-muted text-right">
                    <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                    >
                      Finalizar lista
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </div>
        </>
    );
  }
}

export default EjecucionLista;
