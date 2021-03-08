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

class CrearLista extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Nueva Lista</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>

                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Nombre lista</label>
                          <Input
                              defaultValue="Medidas de higiene"
                              placeholder="Nombre lista"
                              type="text"
                          />
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
                        <FormGroup>
                          <Label for="exampleText">Descripción</Label>
                          <Input type="textarea" name="text" id="exampleText"
                                 defaultValue="Este listado abarca las medidas de higiene contra el covid 19" />
                        </FormGroup>
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
                  <CardTitle tag="h4">Reactivos

                  </CardTitle>
                  <Link to="/admin/crear-lista" >
                    <Button color="primary" size="sm">
                      <i className="fa fa-plus"> </i>&nbsp;Agregar
                    </Button>
                  </Link>
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
          </Row>
        </div>
      </>
    );
  }
}

export default CrearLista;
