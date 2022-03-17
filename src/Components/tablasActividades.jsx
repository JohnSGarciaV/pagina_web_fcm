import { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TablaActividadesVoluntariado = () => {
    const [actividades, setActividades] = useState([]);

    useEffect(async () => {
        const options = {
            method: 'GET',
            url: 'https://secure-earth-28511.herokuapp.com/actividadesv',
        };

        await axios.request(options).then((response) => {
            setActividades(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    return (
        <Container maxWidth="sm">
            <Table hover size="sm" bordered="true">
                <thead>
                    <tr>
                        <th>PROYECTO</th>
                        <th>FAMILIA/COMUNIDAD</th>
                        <th># BENEFICIADOS</th>
                        <th>DURACIÓN (HORAS)</th>
                        <th># PARTICIPANTES</th>
                        <th>ESTADO</th>
                        <th>ACCIONES </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        actividades.map((elemento) => (
                            <tr>
                                <td>{elemento.proyecto}</td>
                                <td>{elemento.beneficiados}</td>
                                <td>{elemento.nbeneficiado}</td>
                                <td>{elemento.horas}</td>
                                <td>{elemento.participantes.length}</td>
                                <td>{elemento.estado}</td>
                                <td>
                                    <Link to={{ pathname: `/veravoluntariado/${elemento._id}` }}> <button type="button" class="btn btn-success"> Ver Información</button></Link>
                                    <Link to={{ pathname: `/editaravoluntariado/${elemento._id}` }}><button type="button" class="btn btn-primary"> Editar </button></Link>
                                    <button type="button" class="btn btn-danger"> Eliminar </button>
                                </td>
                            </tr>

                        ))}
                </tbody>
            </Table>
        </Container>
    )
}

const TablaActividadesFormacion = () => {
    const [actividades, setActividades] = useState([]);

    useEffect(async () => {
        const options = {
            method: 'GET',
            url: 'https://secure-earth-28511.herokuapp.com/actividadesf',
        };

        await axios.request(options).then((response) => {
            setActividades(response.data);
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    return (
        <Container maxWidth="sm">
            <Table hover size="sm" bordered="true">
                <thead>
                    <tr>
                        <th>TIPO</th>
                        <th>NOMBRE</th>
                        <th>DURACIÓN (HORAS)</th>
                        <th># PARTICIPANTES</th>
                        <th>ACCIONES </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        actividades.map((elemento) => (
                            <tr>
                                <td>{elemento.proyecto}</td>
                                <td>{elemento.nombre}</td>
                                <td>{elemento.horas}</td>
                                <td>{elemento.participantes.length}</td>
                                <td>
                                    <Link to={{ pathname: `/veraformacion/${elemento._id}` }}><button type="button" class="btn btn-success"> Ver Información</button></Link>
                                    <Link to={{ pathname: `/editaraformacion/${elemento._id}` }}><button type="button" class="btn btn-primary"> Editar </button></Link>
                                    <button type="button" class="btn btn-danger"> Eliminar </button>
                                </td>
                            </tr>

                        ))}
                </tbody>
            </Table>
        </Container>
    )
}

export {
    TablaActividadesFormacion,
    TablaActividadesVoluntariado
}