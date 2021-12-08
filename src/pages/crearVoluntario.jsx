import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/stylesv.css'
import { Form, Col, Row, Modal, ModalTitle } from 'react-bootstrap';
import { Convenio, paises } from '../information/data';
import { tipoDocumento } from '../information/data';
import { FiChevronDown } from "react-icons/fi"
import { Rango } from '../information/data';
import { Tipo } from '../information/data';
import { estadoLegalizacion } from '../information/data';
import { Modalidad } from '../information/data';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

class CrearVoluntario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mensaje: [], titulo: "", show: false, nombre: "", nacionalidad: "0",
            tdocumento: "0", ndoc: "", ncelular: "", correo: "", rango: "0",
            elegalizacion: "0", docidentidad: null, docssocial: null, docpasaporte: null,
            docsviaje: null, dochvida: null, doccmotivacion: null, docdvoluntades: null,
            docuimagen: null, convenio: "0", tipo: "0", modalidad: "0", finicio: new Date(), ffinal: new Date(),
            ffinalc: false, ocupacion: ""
        }
    }

    cerrar = () => {
        if (this.state.titulo == "Exitoso") {
            this.limpiar();
        }
        this.setState({ show: false });
    }

    crearVoluntarioBD = async () => {
        if (this.comprobar()) {
            try {
                const options = {
                    method: 'POST',
                    url: 'https://secure-earth-28511.herokuapp.com/voluntarios/new',
                    headers: { 'Content-Type': 'application/json' },
                    data: this.state,
                };

                await axios.request(options).then((response) => {
                    this.setState({ titulo: "Exitoso" });
                    this.setState({ mensaje: [{ valor: "El voluntario fue creado de manera exitosa" }] });
                    this.setState({ show: true });
                }).catch(function (error) {
                    this.setState({ titulo: "Error" });
                    this.setState({ mensaje: [{ valor: error }] });
                    this.setState({ show: true });
                });
            } catch (error) {
                console.log(error);
            }

        } else {
            this.setState({ show: true });
        }


    }


    limpiar = async () => {

        this.setState({
            mensaje: [], titulo: "", show: false, nombre: "", nacionalidad: "0",
            tdocumento: "0", ndoc: "", ncelular: "", correo: "", rango: "0",
            elegalizacion: "0", docidentidad: null, docssocial: null, docpasaporte: null,
            docsviaje: null, dochvida: null, doccmotivacion: null, docdvoluntades: null,
            docuimagen: null, convenio: "0", tipo: "0", modalidad: "0", finicio: new Date(), ffinal: new Date(),
            ffinalc: false, ocupacion:""
        });

    }


    comprobar = () => {
        this.setState({ mensaje: [] });
        this.setState({ titulo: "Error" });
        var good = true;
        var mnuevo = [];

        if (this.state.nombre.toString().length <= 0) {
            good = false;
            mnuevo.push({ valor: "Debe escribir el nombre del voluntario" });
        }

        if (this.state.nacionalidad == "0") {
            good = false;
            mnuevo.push({ valor: "Debe seleccionar una nacionalidad" });
        }

        if (this.state.tdocumento == "0") {
            good = false;
            mnuevo.push({ valor: "Debe seleccionar el tipo de documento de identidad" });
        }

        if (this.state.ndoc.toString().length <= 0) {
            good = false;
            mnuevo.push({ valor: "Debe escribir el numero de documento de identidad" });
        }

        if (this.state.ncelular.toString().length <= 0) {
            good = false;
            mnuevo.push({ valor: "Debe escribir el numero de celular" });
        }

        if (this.state.correo.toString().length <= 0) {
            good = false;
            mnuevo.push({ valor: "Debe escribir el correo electronico" });
        }

        if (this.state.ocupacion.toString().length <= 0) {
            good = false;
            mnuevo.push({ valor: "Debe escribir la ocupacion" });
        }

        if (this.state.rango == "0") {
            good = false;
            mnuevo.push({ valor: "Debe seleccionar el rango" });
        }

        if (this.state.elegalizacion == "0") {
            good = false;
            mnuevo.push({ valor: "Debe seleccionar el estado de legalizacion" });
        }

        if (this.state.convenio == "0") {
            good = false;
            mnuevo.push({ valor: "Debe seleccionar el tipo de convenio" });
        }

        if (this.state.tipo == "0") {
            good = false;
            mnuevo.push({ valor: "Debe seleccionar el tipo de voluntario" });
        }

        if (this.state.modalidad == "0") {
            good = false;
            mnuevo.push({ valor: "Debe seleccionar el tipo de modalidad" });
        }

        this.setState({ mensaje: mnuevo });
        return good;
    };


    render() {
        return (
            <div className="fomularioCreacion">
                <div>
                    <Modal show={this.state.show} onHide={this.cerrar}>
                        <Modal.Header>
                            <ModalTitle>
                                {this.state.titulo}
                            </ModalTitle>
                            <button type="button" class="btn btn-danger" onClick={this.cerrar}> Cerrar</button>
                        </Modal.Header>
                        <Modal.Body>
                            {this.state.mensaje.map((elemento) =>
                                <p>{elemento.valor}</p>

                            )}
                        </Modal.Body>
                    </Modal>
                </div>

                <Form>
                    <div className="titulo">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#infogeneral" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            DATOS GENERALES <FiChevronDown /> </button>
                    </div>
                    <div class="collapse" id="infogeneral" >
                        <Form.Group as={Row} className="grupo" controlId="nombre">
                            <Form.Label column sm="2" >Nombre Completo</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Escriba el nombre completo" value={this.state.nombre} onChange={(value) => this.setState({ nombre: value.target.value })} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo" controlId="pais">
                            <Form.Label column sm="2">Nacionalidad</Form.Label>
                            <Col sm="10">
                                <Form.Select aria-label="Seleccion de nacionalidad" value={this.state.nacionalidad} onChange={(value) => this.setState({ nacionalidad: value.target.value })}>
                                    <option value="0">Seleccione una nacionalidad</option>
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
                                <Form.Select aria-label="Seleccion el tipo de documento" value={this.state.tdocumento} onChange={(value) => this.setState({ tdocumento: value.target.value })}>
                                    <option value="0">Seleccione un tipo de documento</option>
                                    {
                                        tipoDocumento.map((tipo) => (
                                            <option value={tipo.nombre}>{tipo.nombre}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo" controlId="numeroDoc">
                            <Form.Label column sm="2" >Numero del Documento</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Escriba el numero del documento" value={this.state.ndoc} onChange={(value) => this.setState({ ndoc: value.target.value })}></Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo" controlId="celular">
                            <Form.Label column sm="2" >Numero del Celular con WhatsApp</Form.Label>
                            <Col sm="10">
                                <Form.Control type="number" placeholder="Escriba el numero de celular" value={this.state.ncelular} onChange={(value) => this.setState({ ncelular: value.target.value })}></Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo" controlId="correo">
                            <Form.Label column sm="2" >Correo</Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" placeholder="Escriba el correo electronico" value={this.state.correo} onChange={(value) => this.setState({ correo: value.target.value })}></Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo" controlId="correo">
                            <Form.Label column sm="2" >Ocupación</Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" placeholder="Escriba la ocupacion" value={this.state.ocupacion} onChange={(value) => this.setState({ ocupacion: value.target.value })}></Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo" controlId="rango">
                            <Form.Label column sm="2">Rango</Form.Label>
                            <Col sm="10">
                                <Form.Select aria-label="Seleccion del rango" value={this.state.rango} onChange={(value) => this.setState({ rango: value.target.value })}>
                                    <option value="0">Seleccione el rango</option>
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
                                <Form.Select aria-label="Seleccion del rango" value={this.state.elegalizacion} onChange={(value) => this.setState({ elegalizacion: value.target.value })}>
                                    <option value="0">Seleccione el estado de legalización</option>
                                    {
                                        estadoLegalizacion.map((elemento) => (
                                            <option value={elemento.estado}>{elemento.estado}</option>
                                        ))
                                    }
                                </Form.Select>
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
                            <input class="form-control" type="file" id="didentidad" onChange={(value) => this.setState({ docidentidad: value.target.files.item(0) })}></input>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo">
                            <Form.Label>Seguridad Social</Form.Label>
                            <input class="form-control" type="file" id="ssocial" onChange={(value) => this.setState({ docssocial: value.target.files.item(0).arrayBuffer })}></input>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo">
                            <Form.Label>Pasaporte</Form.Label>
                            <input class="form-control" type="file" id="pasaporte" onChange={(value) => this.setState({ docpasaporte: value.target.files.item(0).arrayBuffer })}></input>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo">
                            <Form.Label>Seguro de Viaje</Form.Label>
                            <input class="form-control" type="file" id="sviaje" onChange={(value) => this.setState({ docsviaje: value.target.files.item(0).arrayBuffer })}></input>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo">
                            <Form.Label>Hoja de Vida</Form.Label>
                            <input class="form-control" type="file" id="hvida" onChange={(value) => this.setState({ dochvida: value.target.files.item(0).arrayBuffer })}></input>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo">
                            <Form.Label>Carta de Motivación</Form.Label>
                            <input class="form-control" type="file" id="cmotivacion" onChange={(value) => this.setState({ doccmotivacion: value.target.files.item(0).arrayBuffer })}></input>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo">
                            <Form.Label>Declaración de Voluntades</Form.Label>
                            <input class="form-control" type="file" id="dvoluntad" onChange={(value) => this.setState({ docdvoluntades: value.target.files.item(0).arrayBuffer })}></input>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo">
                            <Form.Label>Uso de Imagen</Form.Label>
                            <input class="form-control" type="file" id="dimagen" onChange={(value) => this.setState({ docuimagen: value.target.files.item(0).arrayBuffer })}></input>
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
                                <Form.Select aria-label="Seleccion del rango" value={this.state.convenio} onChange={(value) => this.setState({ convenio: value.target.value })}>
                                    <option>Seleccione el convenio</option>
                                    {
                                        Convenio.map((elemento) => (
                                            <option value={elemento.tipo}>{elemento.tipo}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo" controlId="convenio">
                            <Form.Label column sm="2">Tipo de voluntario</Form.Label>
                            <Col sm="10">
                                <Form.Select aria-label="Seleccion del rango" value={this.state.tipo} onChange={(value) => this.setState({ tipo: value.target.value })}>
                                    <option value="0">Seleccione el tipo de voluntario</option>
                                    {
                                        Tipo.map((elemento) => (
                                            <option value={elemento.tipo}>{elemento.tipo}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo" controlId="convenio">
                            <Form.Label column sm="2">Modalidad</Form.Label>
                            <Col sm="10">
                                <Form.Select aria-label="Seleccion del rango" value={this.state.modalidad} onChange={(value) => this.setState({ modalidad: value.target.value })}>
                                    <option valur="0">Seleccione la modalidad </option>
                                    {
                                        Modalidad.map((elemento) => (
                                            <option value={elemento.tipo}>{elemento.tipo}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo" controlId="numeroDoc">
                            <Form.Label column sm="2">Fecha de Inicio</Form.Label>
                            <Col sm="10">
                                <DatePicker selected={this.state.finicio} onChange={(date) => this.setState({ finicio: date })} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo" controlId="numeroDoc">
                            <Form.Label column sm="2">Fecha de Finalizacion</Form.Label>

                            <Col sm="10">
                                <input class="form-check-input" type="checkbox" value={this.state.ffinalc} id="flexCheckChecked" />
                                <DatePicker selected={this.state.ffinal} onChange={(date) => this.setState({ ffinal: date })} />
                            </Col>
                        </Form.Group>
                    </div>
                </Form>
                <button type="button" class="btn btn-success" onClick={this.crearVoluntarioBD}> CREAR VOLUNTARIO</button>
            </div>
        );
    }
}

export default CrearVoluntario;