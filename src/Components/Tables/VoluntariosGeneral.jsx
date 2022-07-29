import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { obtenerTodosVoluntarios } from '../../ConexionBD/Voluntarios';
import { Form, Col, Row } from 'react-bootstrap';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"





class TablaVoluntariosGeneral extends Component {

    Columnas = [
        {
            dataField: "nombre",
            text: "Nombre",
            sort: true
        },
        {
            dataField: "nacionalidad",
            text: "Nacionalidad",
            sort: true
        },
        {
            dataField: "ocupacion",
            text: "Ocupación",
            sort: true
        },
        {
            dataField: "tdocumento",
            text: "Tipo de documento",
            sort: true
        },
        {
            dataField: "ndoc",
            text: "Numero de documento",
            sort: true
        },
        {
            dataField: "ncelular",
            text: "Celular",
            sort: true
        }, {
            dataField: "correo",
            text: "Correo",
            sort: true
        }
        , {
            dataField: "rango",
            text: "Rango",
            sort: true
        }
        , {
            dataField: "elegalizacion",
            text: "Estado Legalizacion",
            sort: true
        }
        , {
            dataField: "observacione",
            text: "Observaciones",
            sort: true
        }
        , {
            text: "Acciones",
            formatter: (cell, row, rowIndex, formatExtraData) => {

                return (
                    <div>
                        <div>
                            {//<Link to={{ pathname: `/editarVoluntario/${this.state.datos[rowIndex]._id}`, state: { ndoc: this.state.datos[rowIndex].ndoc } }}></Link>
                            }
                            <button type="button" class="btn btn-primary"> Editar </button>
                        </div>
                        <Link to={{ pathname: `/InformacionVoluntario/${this.state.datos[rowIndex].ndoc}`, state: { ndoc: this.state.datos[rowIndex].ndoc } }}><button type="button" class="btn btn-success"> Ver Informacion </button></Link>

                        <button type="button" class="btn btn-danger"> Eliminar </button>

                    </div>
                )
            },
            sort: false,

        },
    ]

    constructor(props) {
        super(props);
        this.state = {
            datos: [],
            busqueda: [],
            palabra: ""
        };
    }

    buscar = () => {

        if (this.state.palabra.length !== 0) {
            this.setState({
                busqueda:
                    this.state.datos.filter((elemento) => {
                        return JSON.stringify(elemento).toLowerCase().includes(this.state.palabra.toLowerCase());
                    })
            })
        } else {
            this.setState({ busqueda: this.state.datos })
        }

    }
    componentDidMount() {
        const readVoluntarios = () => {
            obtenerTodosVoluntarios().then((response) => {
                this.setState({ datos: response.data, busqueda: response.data });
            }).catch(function (error) {
                console.error(error);
            });

        };
        readVoluntarios();
    }


    render() {
        return (
            <div style={{ margin: "2rem" }}>
                <div style={{ padding: 20 }}>
                    <h4>Listado de Voluntarios</h4>
                </div>

                <Form.Group as={Row} className="grupo" controlId="nombre">
                    <Form.Label column sm="5">Termino de busqueda</Form.Label>
                    <Col sm="7">
                        <Form.Control type="text" placeholder="..." value={this.state.palabra} onChange={(value) => { this.setState({ palabra: value.target.value }); this.buscar() }} />
                    </Col>
                </Form.Group>


                <BootstrapTable
                    bootstrap4
                    striped
                    hover
                    condensed
                    keyField='ndoc'
                    data={this.state.busqueda}
                    columns={this.Columnas}
                    pagination={paginationFactory({ sizePerPage: 3, hideSizePerPage: true })}
                />

            </div>
        );
    }

}


export default TablaVoluntariosGeneral;