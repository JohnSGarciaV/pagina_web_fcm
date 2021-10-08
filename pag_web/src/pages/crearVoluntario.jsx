import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/stylesv.css'
import { Form, Col, Row } from 'react-bootstrap';
import { paises } from '../information/data';
import { tipoDocumento } from '../information/data';
import { FiChevronDown } from "react-icons/fi"
import { Rango } from '../information/data';
const CrearVoluntario = () => {
    return (
        <div className="fomularioCreacion">
            <Form>
                <div className="titulo">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#infogeneral" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        DATOS GENERALES <FiChevronDown /> </button>
                </div>
                <div class="collapse" id="infogeneral" >
                    <Form.Group as={Row} className="grupo" controlId="nombre">
                        <Form.Label column sm="2">Nombre</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Escriba el nombre" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="grupo" controlId="pais">
                        <Form.Label column sm="2">Nacionalidad</Form.Label>
                        <Col sm="10">
                            <Form.Select aria-label="Seleccion de pais">
                                <option>Seleccione un pais</option>
                                {
                                    paises.map((pais) => (
                                        <option value={pais.nombre}>{pais.nombre}</option>
                                    ))
                                }
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="grupo" controlId="tipodocumento">
                        <Form.Label column sm="2">Tipo de Documento</Form.Label>
                        <Col sm="10">
                            <Form.Select aria-label="Seleccion el tipo de documento">
                                <option>Seleccione un tipo de documento</option>
                                {
                                    tipoDocumento.map((tipo) => (
                                        <option value={tipo.nombre}>{tipo.nombre}</option>
                                    ))
                                }
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="grupo" controlId="numeroDoc">
                        <Form.Label column sm="2">Numero del Documento</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Escriba el numero del documento"></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="grupo" controlId="celular">
                        <Form.Label column sm="2">Numero del Celular</Form.Label>
                        <Col sm="10">
                            <Form.Control type="number" placeholder="Escriba el numero de celular"></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="grupo" controlId="correo">
                        <Form.Label column sm="2">Correo</Form.Label>
                        <Col sm="10">
                            <Form.Control type="email" placeholder="Escriba el correo electronico"></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="grupo" controlId="rango">
                        <Form.Label column sm="2">Rango</Form.Label>
                        <Col sm="10">
                            <Form.Select aria-label="Seleccion del rango">
                                <option>Seleccione el rango</option>
                                {
                                    Rango.map((elemento) => (
                                        <option value={elemento.rango}>{elemento.rango}</option>
                                    ))
                                }
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="grupo" controlId="elegalizacion">
                        <Form.Label column sm="2">Estado Leglización</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Escriba el numero del documento"></Form.Control>
                        </Col>
                    </Form.Group>
                </div>

                <div className="titulo">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#documentacion" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        DOCUMENTACIÓN <FiChevronDown /> </button>
                </div>
                <div class="collapse" id="documentacion">
                    <Form.Group as={Row} className="grupo">
                        <Form.Label>Documento de identidad</Form.Label>
                        <input class="form-control" type="file" id="didentidad"></input>
                    </Form.Group>

                    <Form.Group as={Row} className="grupo">
                        <Form.Label>Seguridad Social</Form.Label>
                        <input class="form-control" type="file" id="ssocial"></input>
                    </Form.Group>

                    <Form.Group as={Row} className="grupo">
                        <Form.Label>Pasaporte</Form.Label>
                        <input class="form-control" type="file" id="pasaporte"></input>
                    </Form.Group>

                    <Form.Group as={Row} className="grupo">
                        <Form.Label>Seguro de Viaje</Form.Label>
                        <input class="form-control" type="file" id="sviaje"></input>
                    </Form.Group>

                    <Form.Group as={Row} className="grupo">
                        <Form.Label>Hoja de Vida</Form.Label>
                        <input class="form-control" type="file" id="hvida"></input>
                    </Form.Group>

                    <Form.Group as={Row} className="grupo">
                        <Form.Label>Carta de Motivación</Form.Label>
                        <input class="form-control" type="file" id="didentidad"></input>
                    </Form.Group>

                    <Form.Group as={Row} className="grupo">
                        <Form.Label>Declaración de Voluntades</Form.Label>
                        <input class="form-control" type="file" id="didentidad"></input>
                    </Form.Group>

                    <Form.Group as={Row} className="grupo">
                        <Form.Label>Uso de Imagen</Form.Label>
                        <input class="form-control" type="file" id="didentidad"></input>
                    </Form.Group>
                </div>

                <div className="titulo">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#infoVoluntariado" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        INFORMACIÓN DE VOLUNTARIADO <FiChevronDown /> </button>
                </div>
                <div class="collapse" id="infoVoluntariado">
                <Form.Group as={Row} className="grupo" controlId="convenio">
                        <Form.Label column sm="2">Convenio</Form.Label>
                        <Col sm="10">
                            <Form.Select aria-label="Seleccion del rango">
                                <option>Seleccione el convenio</option>
                                {
                                    Rango.map((elemento) => (
                                        <option value={elemento.rango}>{elemento.rango}</option>
                                    ))
                                }
                            </Form.Select>
                        </Col>
                    </Form.Group>
                </div>
            </Form>
        </div>
    );
}

export default CrearVoluntario;