import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';
import '../styles/styles.scss';
import Checkbox from "@material-ui/core/Checkbox"
import { Link } from 'react-router-dom'
import { MenuItem, Select } from '@material-ui/core';
import crearVoluntario from "./createVoluntario"
import tableDocuments from './tableDocuments';

const data = [
    { nombre: "Juan", nacionalidad: "Colombia", tdocumento: "CC", ndocumento: "20000", adocumento: "01/01/1999", rango: "Silver", correo: "john@hotmail.com", elegalizacion: true, celular: "3102341234", observaciones: "Ninguna", convenio: "Ninguno", tvoluntariado: "Voluntario", modalidad: "Virtual", entrevista: false, induccion: true, ptrabajo: true, opractica: " ", tespecifico: " ", finicio: "12/01/2021", ffinal: "12/01/2022", evaluacion: false, estado: "Activo" },
    { nombre: "Marcelo", nacionalidad: "Colombia", tdocumento: "CC", ndocumento: "20000", adocumento: "01/01/1999", rango: "Silver", correo: "john@hotmail.com", elegalizacion: false, celular: "3102341234", observaciones: "Ninguna", convenio: "Ninguno", tvoluntariado: "Practicante", modalidad: "Mixta", entrevista: true, induccion: false, ptrabajo: true, opractica: " ", tespecifico: " ", finicio: "01/12/2020", ffinal: "01/12/2021", evaluacion: true, estado: "Inactivo" }];

class Voluntarios extends Component {
    state = {
        data: data
    }

    render() {
        return (

            <Container maxWidth="sm">
                <p></p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button color="success" onClick={() => crearVoluntario}> Crear Voluntario </Button>
                </div>
                <p></p>



                <Table hover size="sm" bordered="true">
                    <thead>
                        <tr class="bg-primary">
                            <th className="Center">Nombre</th>
                            <th className="Center">Nacionalidad</th>
                            <th className="Center">Tipo de documento</th>
                            <th className="Center">Numero de documento</th>
                            <th className="Center">Archivo documento</th>
                            <th className="Center">Rango</th>
                            <th className="Center">Correo</th>
                            <th className="Center">Estado de legalizacion</th>
                            <th className="Center">Celular</th>
                            <th className="Center">Observaciones</th>
                            <th className="Center">Convenio</th>
                            <th className="Center">Tipo de voluntariado</th>
                            <th className="Center">Modalidad</th>
                            <th className="Center">Entrevista</th>
                            <th className="Center">Induccion</th>
                            <th className="Center">Plan de trabajo</th>
                            <th className="Center">Objetivos de la practica</th>
                            <th className="Center">Tema en Especifico</th>
                            <th className="Center">Fecha Inicio</th>
                            <th className="Center">Fecha Fin</th>
                            <th className="Center">Evaluacion</th>
                            <th className="Center">Estado</th>
                            <th className="Center"> Acciones </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((elemento) => (
                                <tr>
                                    <td className="Data">{elemento.nombre}</td>
                                    <td className="Data">{elemento.nacionalidad}</td>
                                    <td className="Data">{elemento.tdocumento}</td>
                                    <td className="Data">{elemento.ndocumento}</td>
                                    <td className="Data">{elemento.adocumento}</td>
                                    <td className="Data">{elemento.rango}</td>
                                    <td className="Data">{elemento.correo}</td>
                                    <td className="Center">
                                        <Checkbox checked={elemento.elegalizacion} />
                                    </td>
                                    <td className="Data">{elemento.celular}</td>
                                    <td className="Data">{elemento.observaciones}</td>
                                    <td className="Data">{elemento.convenio}</td>
                                    <td className="Data">
                                        <Select value={elemento.tvoluntariado}>
                                            <MenuItem value={"Practicante"}>Practicante</MenuItem>
                                            <MenuItem value={"Voluntario"}>Voluntario</MenuItem>
                                        </Select>
                                    </td>
                                    <td className="Data">
                                        <Select value={elemento.modalidad}>
                                            <MenuItem value={"Virtual"}>Virtual</MenuItem>
                                            <MenuItem value={"Presencial"}>Presencial</MenuItem>
                                            <MenuItem value={"Mixta"}>Mixta</MenuItem>
                                        </Select>
                                    </td>
                                    <td className="Center">
                                        <Checkbox checked={elemento.entrevista} />
                                    </td>
                                    <td className="Center">
                                        <Checkbox checked={elemento.induccion} />
                                    </td>
                                    <td className="Center">
                                        <Checkbox checked={elemento.ptrabajo} />
                                    </td>
                                    <td className="Data"> {elemento.opractica}</td>
                                    <td className="Data"> {elemento.tespecifico}</td>
                                    <td className="Data"> {elemento.finicio}</td>
                                    <td className="Data"> {elemento.ffinal}</td>
                                    <td className="Center">
                                        <Checkbox checked={elemento.evaluacion} />
                                    </td>
                                    <td className="Data">
                                        <Select value={elemento.estado}>
                                            <MenuItem value={"Activo"}>Activo</MenuItem>
                                            <MenuItem value={"Inactivo"}>Inactivo</MenuItem>
                                            <MenuItem value={"Finalizado"}>Finalizado</MenuItem>
                                        </Select>
                                    </td>
                                    <td className="Center">
                                        <Button> Editar </Button>
                                        <Button color="danger"> Eliminar</Button>
                                        <Link to="/tableDocuments" >
                                        <Route path="/tableDocuments" exact={true} component={tableDocuments} />
                                            <Button color="primary"> Consultar Documentacion</Button>
                                        </Link>
 
                                    </td>
                                </tr>

                            ))}
                    </tbody>
                </Table>

            </Container>
        );
    }
}


export default Voluntarios