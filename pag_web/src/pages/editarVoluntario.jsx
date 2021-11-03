import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/stylesv.css'
import { Form, Col, Row } from 'react-bootstrap';
import { Convenio, paises } from '../information/data';
import { tipoDocumento } from '../information/data';
import { FiChevronDown } from "react-icons/fi"
import { Rango } from '../information/data';
import { Tipo } from '../information/data';
import { Modalidad } from '../information/data';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Parse from 'parse';


class CrearVoluntario extends Component {
    constructor(props) {
        Parse.initialize('GwQYTeA6Mt1w7yPrFovVd5yAKIZ0evxdxvIE2lBr',
            'hxnOFOFSN0Kjvk0vEqNnqeE4xJkRkac6rcuwiNSD');
        Parse.serverURL = 'https://parseapi.back4app.com';
        super(props);
        this.state = {
            nombre: "",
            nacionalidad: "",
            tdocumento: "",
            ndoc: "",
            ncelular: "",
            correo: "",
            rango: "",
            elegalizacion: "",
            docidentidad: null,
            docssocial: null,
            docpasaporte: null,
            docsviaje: null,
            dochvida: null,
            doccmotivacion: null,
            docdvoluntades: null,
            docuimagen: null,
            convenio: "",
            tipo: "",
            modalida: "",
            finicio: new Date(),
            ffinal: new Date(),
            ffinalc: false
        }
    }

    crearVoluntarioBD = async () => {
        const Documentos = new Parse.Object('Documentos');
        Documentos.set('didentidad', this.state.docidentidad);
        Documentos.set('ssocial', this.state.docssocial);
        Documentos.set('pasaporte', this.state.docpasaporte);
        Documentos.set('aviaje', this.state.docsviaje);
        Documentos.set('hvida', this.state.dochvida);
        Documentos.set('cmotivacion', this.state.doccmotivacion);
        Documentos.set('dvoluntades', this.state.docdvoluntades);
        Documentos.set('uimagen', this.state.docuimagen);
        const InfoVoluntariado = new Parse.Object('InfoVoluntariado');
        InfoVoluntariado.set('convenio', this.state.convenio);
        InfoVoluntariado.set('tipo', this.state.tipo);
        InfoVoluntariado.set('modalidad', this.state.modalida);
        InfoVoluntariado.set('fechainicio',new Date(Date.parse(this.state.finicio)));
        InfoVoluntariado.set('fechafinal', new Date(Date.parse(this.state.ffinal)));
        InfoVoluntariado.set('estado', this.state.convenio);
        const Voluntario = new Parse.Object('Voluntario');
        try {
            Voluntario.set('nombre', this.state.nombre);
            Voluntario.set('nacionalidad', this.state.nacionalidad);
            Voluntario.set('tipodocumento', this.state.tdocumento);
            Voluntario.set('numerodocumento', this.state.ndoc);
            Voluntario.set('celular', Number(this.state.ncelular));
            Voluntario.set('rango', this.state.rango);
            Voluntario.set('correo', this.state.correo);
            Voluntario.set('elegalizacion', this.state.elegalizacion);
            Voluntario.set('documentos', Documentos);
            Voluntario.set('infovoluntariado', InfoVoluntariado);
            await Voluntario.save();
            console.log("se pudo crear");
        } catch (error) {
            console.log(error);
        }

    }

    comprobar =  () => {
        console.log(this.state);
        if (this.state.nombre.length > 0 && this.state.nacionalidad.length > 0 && this.state.tdocumento.length > 0 &&
            this.state.ndoc.length > 0 && this.state.ncelular.length > 0 && this.state.correo.length > 0 && this.state.rango.length > 0 &&
            this.state.elegalizacion.length > 0 && this.state.docidentidad != null && this.state.docssocial != null  &&
            this.state.docpasaporte != null && this.state.docsviaje != null && this.state.dochvida != null &&
            this.state.doccmotivacion != null && this.state.docdvoluntades != null && this.state.docuimagen != null &&
            this.state.convenio.length > 0 && this.state.tipo.length > 0 && this.state.modalida.length > 0
        )
            return true
        else
            return false
    };

    compcrear = async () => {
            await this.crearVoluntarioBD()
            
    }

    render() {
        return (
            <div className="fomularioCreacion">
                EDITAR VOLUNTARIO
                <Form>
                    <div className="titulo">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#infogeneral" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            DATOS GENERALES <FiChevronDown /> </button>
                    </div>
                    <div class="collapse" id="infogeneral" >
                        <Form.Group as={Row} className="grupo" controlId="nombre">
                            <Form.Label column sm="2">Nombre</Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Escriba el nombre completo" onChange={(value) => this.setState({ nombre: value.target.value })} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo" controlId="pais">
                            <Form.Label column sm="2">Nacionalidad</Form.Label>
                            <Col sm="10">
                                <Form.Select aria-label="Seleccion de pais" onChange={(value) => this.setState({ nacionalidad: value.target.value })}>
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
                                <Form.Select aria-label="Seleccion el tipo de documento" onChange={(value) => this.setState({ tdocumento: value.target.value })}>
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
                                <Form.Control type="text" placeholder="Escriba el numero del documento" onChange={(value) => this.setState({ ndoc: value.target.value })}></Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo" controlId="celular">
                            <Form.Label column sm="2">Numero del Celular</Form.Label>
                            <Col sm="10">
                                <Form.Control type="number" placeholder="Escriba el numero de celular" onChange={(value) => this.setState({ ncelular: value.target.value })}></Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo" controlId="correo">
                            <Form.Label column sm="2">Correo</Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" placeholder="Escriba el correo electronico" onChange={(value) => this.setState({ correo: value.target.value })}></Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo" controlId="rango">
                            <Form.Label column sm="2">Rango</Form.Label>
                            <Col sm="10">
                                <Form.Select aria-label="Seleccion del rango" onChange={(value) => this.setState({ rango: value.target.value })}>
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
                                <Form.Control type="text" placeholder="Escriba el estado de la legalizacion" onChange={(value) => this.setState({ elegalizacion: value.target.value })} />
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
                            <input class="form-control" type="file" id="didentidad" onChange={(value) => this.setState({ docidentidad: value.target.files.item(0)})}></input>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo">
                            <Form.Label>Seguridad Social</Form.Label>
                            <input class="form-control" type="file" id="ssocial" onChange={(value) => this.setState({ docssocial: value.target.files.item(0).arrayBuffer})}></input>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo">
                            <Form.Label>Pasaporte</Form.Label>
                            <input class="form-control" type="file" id="pasaporte" onChange={(value) => this.setState({ docpasaporte:value.target.files.item(0).arrayBuffer})}></input>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo">
                            <Form.Label>Seguro de Viaje</Form.Label>
                            <input class="form-control" type="file" id="sviaje" onChange={(value) => this.setState({ docsviaje: value.target.files.item(0).arrayBuffer})}></input>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo">
                            <Form.Label>Hoja de Vida</Form.Label>
                            <input class="form-control" type="file" id="hvida" onChange={(value) => this.setState({ dochvida: value.target.files.item(0).arrayBuffer})}></input>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo">
                            <Form.Label>Carta de Motivación</Form.Label>
                            <input class="form-control" type="file" id="cmotivacion" onChange={(value) => this.setState({ doccmotivacion: value.target.files.item(0).arrayBuffer})}></input>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo">
                            <Form.Label>Declaración de Voluntades</Form.Label>
                            <input class="form-control" type="file" id="dvoluntad" onChange={(value) => this.setState({ docdvoluntades: value.target.files.item(0).arrayBuffer})}></input>
                        </Form.Group>

                        <Form.Group as={Row} className="grupo">
                            <Form.Label>Uso de Imagen</Form.Label>
                            <input class="form-control" type="file" id="dimagen" onChange={(value) => this.setState({ docuimagen: value.target.files.item(0).arrayBuffer})}></input>
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
                                <Form.Select aria-label="Seleccion del rango" onChange={(value) => this.setState({ convenio: value.target.value })}>
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
                            <Form.Label column sm="2">Tipo</Form.Label>
                            <Col sm="10">
                                <Form.Select aria-label="Seleccion del rango" onChange={(value) => this.setState({ tipo: value.target.value })}>
                                    <option>Seleccione el tipo</option>
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
                                <Form.Select aria-label="Seleccion del rango" onChange={(value) => this.setState({ modalida: value.target.value })}>
                                    <option>Seleccione la modalidad </option>
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
                <button type="button" class="btn btn-success" onClick={this.compcrear}> CREAR VOLUNTARIO</button>
            </div>
        );
    }
}

export default CrearVoluntario;