import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Container } from 'react-bootstrap';
import '../styles/styletable.css';
import axios from 'axios';

class VoluntarioBD extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: []
        };
    }

    componentDidMount() {
        const readVoluntarios = async () => {
            const options = {
                method: 'GET',
                url: 'https://secure-earth-28511.herokuapp.com/voluntarios'
              };
        
              await axios.request(options).then((response) => {
                this.setState({ datos: response.data })
              }).catch(function (error) {
                console.error(error);
              });
        };
        readVoluntarios();
    }

    render() {
        return (
            <Container maxWidth="sm">
                <div style={{ padding: 20 }}>
                    <h4>Listado de Voluntarios</h4>
                </div>

                <Table hover size="sm" bordered="true">
                    <thead>
                        <tr class="bg-primary">
                            <th>Nombre</th>
                            <th>Nacionalidad</th>
                            <th>Ocupación</th>
                            <th>Tipo de documento</th>
                            <th>Numero de documento</th>
                            <th>Celular</th>
                            <th>Correo</th>
                            <th>Rango</th>
                            <th> Estado Legalizacion </th>
                            <th>Observaciones</th>
                            <th>Acciones </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.datos.map((elemento) => (
                                <tr>
                                    <td>{elemento.nombre}</td>
                                    <td>{elemento.nacionalidad}</td>
                                    <td>{elemento.ocupacion}</td>
                                    <td>{elemento.tdocumento}</td>
                                    <td>{elemento.ndoc}</td>
                                    <td>{elemento.ncelular}</td>
                                    <td>{elemento.correo}</td>
                                    <td>{elemento.rango}</td>
                                    <td>{elemento.elegalizacion} </td>
                                    <td>{elemento.observaciones}</td>
                                    <td>
                                        <Link to={{pathname:`/editarVoluntario/${elemento._id}`, state:{ndoc:elemento.ndoc}}}><button type="button" class="btn btn-primary"> Editar </button></Link>
                                        <Link to={{pathname:`/InformacionVoluntario/${elemento.ndoc}`, state:{ndoc:elemento.ndoc}}}>     
                                        <button type="button" class="btn btn-success"> Ver Informacion </button> </Link>
                                        <button type="button" class="btn btn-danger" > Eliminar</button>
                                    </td>
                                </tr>

                            ))}
                    </tbody>
                </Table>

                <div style={{ padding: 20 }}>
                    <Link to='/crearVoluntario'>
                        <button type="button" class="btn btn-success"> Crear Voluntario </button>
                    </Link>

                </div>
            </Container>
        );
    }

}


export default VoluntarioBD;