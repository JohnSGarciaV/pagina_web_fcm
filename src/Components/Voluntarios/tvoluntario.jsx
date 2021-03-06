import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import '../../styles/styletable.css';
import ViewPDF from '../viewPDF';
import axios from 'axios';


const datav = [{ convenio: "Univerisdad", tipo: "Voluntariado", modalidad: "Mixto", finicio: "01/01/2019", ffinal: " ", estado: "Activo" }]


class TablaInfoAdicional extends Component {
    state = {
        data: datav
    }

    render() {
        return (
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
        );
    }
}

const TablaActividades = ({ id }) => {
    const [actividades, setActividades] = useState([]);
    const [suma, setSuma] = useState(0);

    const sumar = () => {
        var sum = 0;
        actividades.map((elemento) =>
            sum = Number(sum) + Number(parseInt(elemento.horas))
        );
        setSuma(sum);
    }

    useEffect(() => {
        const buscar = async () => {
            const options = {
                method: 'GET',
                url: `https://secure-earth-28511.herokuapp.com/actividadv/voluntario/${id}`,
            };
    
            await axios.request(options).then((response) => {
                setActividades(response.data);
            }).catch(function (error) {
                //console.log(error.toString());
            });
        }
        buscar();
        sumar();
    },[]);

return (
    <Container maxWidth="sm">
        <h5>Actividades de Voluntariado</h5>
        <Table hover size="sm" bordered="true">
            <thead>
                <tr>
                    <th>NOMBRE DE LA ACTIVIDAD</th>
                    <th>TIPO</th>
                    <th>ROL</th>
                    <th>FECHA</th>
                    <th>HORAS</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <td colSpan="4">Total de Horas</td>
                    <td>{Number(suma) }</td>
                </tr>
            </tfoot>
            <tbody>
                {
                    actividades.map((elemento) => (
                        <tr>
                            <td>{elemento.proyecto}</td>
                            <td>{elemento.proyecto}</td>
                            <td>{elemento.participantes.find(elemento => elemento.id === id).rol}</td>
                            <td>{elemento.fecha}</td>
                            <td>{elemento.horas}</td>

                        </tr>
                    ))
                }
            </tbody>

        </Table>
    </Container>
);
}

const TablaAFormacion = ({id}) => {
    const [actividades, setActividades] = useState([]);
    const [suma, setSuma] = useState(0);

    const sumar = () => {
        var sum = 0;
        actividades.map((elemento) =>
            sum = Number(sum) + Number(parseInt(elemento.horas))
        );
        setSuma(sum);
    }

    useEffect(() => {
        const buscar = async () => {
            const options = {
                method: 'GET',
                url: `https://secure-earth-28511.herokuapp.com/actividadf/voluntario/${id}`,
            };
    
            await axios.request(options).then((response) => {
                setActividades(response.data);
                console.log('HOLA');
                console.log(id);
                console.log(response.data);
            }).catch(function (error) {
                //console.log(error);
            });
        }
        buscar();
        sumar();
    }, []);

        return (
            <Container maxWidth="sm">
                <h5>Actividades de Formaci??n en las que ha participado</h5>
                <Table hover size="sm" bordered="true">
                    <thead>
                        <tr>
                            <th>NOMBRE DE LA ACTIVIDAD</th>
                            <th>TIPO</th>
                            <th>FECHA</th>
                            <th>HORAS</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td colSpan="3">Total de Horas</td>
                            <td>{suma}</td>
                        </tr>
                    </tfoot>
                    <tbody>
                        {
                            actividades.map((elemento) => (
                                <tr>
                                    <td>{elemento.nombre}</td>
                                    <td>{elemento.proyecto}</td>
                                    <td>{elemento.fecha}</td>
                                    <td>{elemento.horas}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        );
}


const TablaDocumentos = ({urls}) => {
    const [show, setShow] = useState(false);
    const [info, setInfo] = useState({ nombre: "Cualquiera", link: "http://www.africau.edu/images/default/sample.pdf" });
    const [links, setLinks] = useState(urls)
    console.log(urls)
    return (
        <Container>
            <Table hover size="sm" bordered="true">
                <ViewPDF show={show} setShow={setShow} info={info} />
                <thead>
                    <tr>
                        <th>DOCUMENTO DE IDENTIDAD</th>
                        <th>SEGURIDAD SOCIAL</th>
                        <th>PASAPORTE</th>
                        <th>ASEGURAMIENTO DE VIAJE</th>
                        <th>HOJA DE VIDA</th>
                        <th>CARTA DE MOTIVACION</th>
                        <th>DECLARACI??N DE VOLUNTADES</th>
                        <th>USO DE IMAGEN</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //
                        <tr>
                            <td>
                                <button type="button" class="btn btn-success" onClick={() => { window.open(urls.get("docidentidad")) }}>Ver</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-success" onClick={() => { window.open(urls.get("Seguridad Social")) }}>Ver</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-success" onClick={() => { window.open(urls.get("Pasaporte"))}}>Ver</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-success" onClick={() => { window.open(urls.get("Aseguramiento de Viaje"))}}>Ver</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-success" onClick={() => { window.open(urls.get("Hoja de Vida")) }}>Ver</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-success" onClick={() => { window.open(urls.get("Carta de Motivacion"))}}>Ver</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-success" onClick={() => { window.open(urls.get("Declaracion de Voluntades")) }}>Ver</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-success" onClick={() => { window.open(urls.get("Uso de Imagen"))}}>Ver</button>
                            </td>
                        </tr>
                    }
                </tbody>

            </Table>
        </Container>
    );
}


export {
    TablaAFormacion,
    TablaActividades,
    TablaDocumentos,
    TablaInfoAdicional
}