import React, { Component } from 'react';
import Parse from 'parse';
import { Link } from 'react-router-dom';
import { Table, Container } from 'react-bootstrap';
import '../styles/styletable.css'

class VoluntarioBD extends Component {

    constructor(props) {
        Parse.initialize('GwQYTeA6Mt1w7yPrFovVd5yAKIZ0evxdxvIE2lBr',
            'hxnOFOFSN0Kjvk0vEqNnqeE4xJkRkac6rcuwiNSD');
        Parse.serverURL = 'https://parseapi.back4app.com';
        super(props);
        this.state = {
            datos: []
        };
    }

    componentDidMount() {
        const readVoluntarios = async () => {
            const query = new Parse.Query('Voluntario');

            try {
                const todos = await query.find();
                console.log(JSON.stringify(todos));
                this.setState({ datos: todos });
            } catch (error) {
                console.error(error)
            }
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
                            <th>Tipo de documento</th>
                            <th>Numero de documento</th>
                            <th>Celular</th>
                            <th>Correo</th>
                            <th>Rango</th>
                            <th> Estado Legalizacion </th>
                            <th>Acciones </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.datos.map((elemento) => (
                                <tr>
                                    <td>{elemento.get('nombre')}</td>
                                    <td>{elemento.get('nacionalidad')}</td>
                                    <td>{elemento.get('tipodocumento')}</td>
                                    <td>{elemento.get('numerodocumento')}</td>
                                    <td>{elemento.get('celular')}</td>
                                    <td>{elemento.get('correo')}</td>
                                    <td>{elemento.get('rango')}</td>
                                    <td>{elemento.get('elegalizacion')} </td>
                                    <td>
                                        <Link to={`/InformacionVoluntario/${elemento.get('numerodocumento     ')}`}>
                                            
                                        <button type="button" class="btn btn-primary"> Ver Informacion </button> </Link>
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