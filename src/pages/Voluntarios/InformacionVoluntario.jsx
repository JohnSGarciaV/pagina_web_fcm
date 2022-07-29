import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TablaActividades, TablaAFormacion } from '../../Components/Voluntarios/tvoluntario';
import { TablaDocumentos } from '../../Components/Voluntarios/tvoluntario';
import { buscarVoluntario } from '../../ConexionBD/Voluntarios';


class InformacionVoluntario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            nombre: "", nacionalidad: "",
            tdocumento: " ", ndoc: "", ncelular: "", correo: "", rango: " ",
            elegalizacion: " ", docidentidad: null, docssocial: null, docpasaporte: null,
            docsviaje: null, dochvida: null, doccmotivacion: null, docdvoluntades: null,
            docuimagen: null, convenio: " ", tipo: " ", modalidad: " ", finicio: new Date(), ffinal: new Date(),
            ffinalc: false, urls: new Map()
        }
    }

    componentDidMount() {
        buscarVoluntario(this.props.location.state.ndoc).then(
            response => {
                this.setState(response.data);
                var urls = new Map();
                urls.set("docidentidad", response.data.urldocidentidad); urls.set("docssocial", response.data.urldocssocial); urls.set("docpasaporte", response.data.urldocpasaporte); urls.set("docsviaje", response.data.urldocsviaje);
                urls.set("dochvida", response.data.urldochvida); urls.set("doccmotivacion", response.data.urldoccmotivacion); urls.set("docvoluntades", response.data.urldocdvoluntades); urls.set("doucuimagen", response.data.urldocuimagen)
                this.setState({ urls: urls })
            })

    }

    render() {
        if (this.state.urls !== undefined) {
            return (
                <div style={{ height: "90vh", overflowY: "scroll" }}>
                    <div style={{ padding: 20 }}>
                        <Container maxWidth="sm">
                            <Table hover size="sm" bordered="true">
                                <thead>
                                    <tr>
                                        <th>NOMBRE</th>
                                        <th>NACIONALIDAD</th>
                                        <th>TIPO DE DOCUMENTO</th>
                                        <th>NUMERO DE DOCUMENTO</th>
                                        <th>CELULAR</th>
                                        <th>CORREO</th>
                                        <th>RANGO</th>
                                        <th>ESTADO DE LEGALIZACIÓN </th>
                                        <th>OBSERVACIONES</th>
                                        <th>ACCIONES </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>{this.state.nombre}</td>
                                        <td>{this.state.nacionalidad}</td>
                                        <td>{this.state.tdocumento}</td>
                                        <td>{this.state.ndoc}</td>
                                        <td>{this.state.ncelular}</td>
                                        <td>{this.state.correo}</td>
                                        <td>{this.state.rango}</td>
                                        <td>{this.state.elegalizacion}  </td>
                                        <td>{this.state.observaciones} </td>
                                        <td>

                                           {//<Link to={{ pathname: `/editarVoluntario/${this.state._id}`, state: { ndoc: this.state.ndoc } }}></Link>
                                           }
                                            <button type="button" class="btn btn-primary"> Editar </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Container>
                    </div>

                    <div style={{ padding: 20 }}>
                        <h5>Informacion Voluntariado</h5>
                        <Container maxWidth="sm">
                            <Table hover size="sm" bordered="true">
                                <thead>
                                    <tr>
                                        <th>CONVENIO</th>
                                        <th>TIPO</th>
                                        <th>MODALIDAD</th>
                                        <th>FECHA INICIO</th>
                                        <th>FECHA FINAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.convenio}</td>
                                        <td>{this.state.tipo}</td>
                                        <td>{this.state.modalidad}</td>
                                        <td>{this.state.finicio.toString().substr(0, 9)}</td>
                                        <td>{this.state.ffinal.toString().substr(0, 9)}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Container>
                    </div>

                    <div style={{ padding: 20 }}>
                        <h5>Documentos</h5>
                        <TablaDocumentos urls={this.state.urls} />


                    </div>

                    {/*<div style={{ padding: 20 }}>
                    <h5>Información adicional Voluntariado</h5>
                    <Container>
                        <Table hover size="sm" bordered="true">
                            <thead>
                                <tr>
                                    <th>ENTREVISTA</th>
                                    <th>INDUCCION</th>
                                    <th>PLAN DE TRABAJO</th>
                                    <th>OBJETIVO</th>
                                    <th>TEMA ESPECIFICO</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.data.map((elemento) => (
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </Table>
                    </Container>
                            </div>*/}

                    <div style={{ padding: 20 }}>
                        <TablaActividades id={this.state._id} key="TAValue" />
                    </div>

                    <div style={{ padding: 20 }}>
                        <TablaAFormacion id={this.state._id} />
                    </div>
                </div>
            );
        } else {
            return <h5>Cargando datos ...</h5>
        }
    }
}

export default InformacionVoluntario;