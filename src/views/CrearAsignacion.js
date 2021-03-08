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
  Table, ListGroup, ListGroupItem,
    Label
} from "reactstrap";
import {Link} from "react-router-dom";

class CrearAsignacion extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Nueva Asignación</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>

                    <Row>

                      <Col className="" md="6">
                        <Label for="inputState">Tipo de asignación</Label><br></br>
                        <div className="form-check-radio form-check-inline">
                          <Label className="form-check-label">
                            <Input type="radio" name="exampleRadios1" id="exampleRadios11" value="option1" />
                            Lista
                            <span className="form-check-sign"></span>
                          </Label>
                        </div>
                        <div className="form-check-radio form-check-inline">
                          <Label className="form-check-label">
                            <Input type="radio" name="exampleRadios1" id="exampleRadios12" value="option2" defaultChecked/>
                            Grupo lista
                            <span className="form-check-sign"></span>
                          </Label>
                        </div>
                      </Col>
                    </Row>
                    <Row>

                      <Col className="" md="6">
                        <FormGroup>
                          <Label for="inputState">Listado</Label>
                          <Input type="select" name="select" id="inputState" >
                            <option>Seleccione una lista</option>
                            <option>Medidas de higiene Covid19</option>
                            <option>Organización de la tienda</option>
                            <option>Limpieza de areas</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col className="" md="6">
                        <FormGroup>
                          <Label for="inputState">Grupo</Label>
                          <Input type="select" name="select" id="inputState" >
                            <option>Seleccione un grupo</option>
                            <option>Salud</option>
                            <option>Mantenimiento</option>
                            <option>Orden</option>
                          </Input>
                        </FormGroup>
                      </Col>


                    </Row>
                    <Row>
                      <Col md="12">
                        <Table responsive>
                          <thead className="text-primary">
                          <tr>
                            <th>Id</th>
                            <th>Usuario</th>
                            <th>Email</th>
                            <th>Tienda</th>
                            <th>Puesto</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>
                                <FormGroup check>
                                  <Label className="form-check-label">
                                    <Input className="form-check-input" type="checkbox" value=""/>
                                    <span className="form-check-sign">
                                  <span className="check"></span>
                                </span>
                                  </Label>
                                </FormGroup>
                            </td>
                            <td>Ernesto</td>
                            <td>dummy@dominio.com</td>
                            <td>Tienda 1</td>
                            <td>
                              Gerente tienda
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <FormGroup check>
                                <Label className="form-check-label">
                                  <Input className="form-check-input" type="checkbox" value=""/>
                                  <span className="form-check-sign">
                                  <span className="check"></span>
                                </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>Luis</td>
                            <td>dummy@dominio.com</td>
                            <td>Tienda 2</td>
                            <td>
                              Gerente tienda
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <FormGroup check>
                                <Label className="form-check-label">
                                  <Input className="form-check-input" type="checkbox" value=""/>
                                  <span className="form-check-sign">
                                  <span className="check"></span>
                                </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>Adriana</td>
                            <td>dummy@dominio.com</td>
                            <td>Tienda 3</td>
                            <td>
                              Gerente tienda
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <FormGroup check>
                                <Label className="form-check-label">
                                  <Input className="form-check-input" type="checkbox" value=""/>
                                  <span className="form-check-sign">
                                  <span className="check"></span>
                                </span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>Cesar</td>
                            <td>dummy@dominio.com</td>
                            <td>Tienda 4</td>
                            <td>
                              Gerente tienda
                            </td>
                          </tr>

                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pl-1 mt-3 text-right" md="12">

                          <Button
                              className="btn-round"
                              color="primary"
                              type="submit"
                          >
                            Guardar
                          </Button>
                      </Col>
                    </Row>

                  </Form>
                </CardBody>
              </Card>
            </Col>

            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Usuarios asignados

                  </CardTitle>
                  <Link to="/admin/crear-lista" >
                    <Button color="primary" size="sm">
                      <i className="fa fa-plus"> </i>&nbsp;Agregar
                    </Button>
                  </Link>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                    <tr>
                      <th>Id</th>
                      <th>Usuario</th>
                      <th>Email</th>
                      <th>Tienda</th>
                      <th className="text-right">Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>1</td>
                      <td>Carlos</td>
                      <td>dummy@dominio.com</td>
                      <td>Tienda 1</td>
                      <td className="text-right">
                        <Button size="sm" color="danger">
                          <i className="fa fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Alberto</td>
                      <td>dummy@dominio.com</td>
                      <td>Tienda 2</td>
                      <td className="text-right">
                        <Button size="sm" color="danger">
                          <i className="fa fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Juan</td>
                      <td>dummy@dominio.com</td>
                      <td>Tienda 3</td>
                      <td className="text-right">
                        <Button size="sm" color="danger">
                          <i className="fa fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Jesus</td>
                      <td>dummy@dominio.com</td>
                      <td>Tienda 4</td>
                      <td className="text-right">
                        <Button size="sm" color="danger">
                          <i className="fa fa-trash"></i>
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

export default CrearAsignacion;
