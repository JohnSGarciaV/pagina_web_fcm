import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import '../../styles/styletable.css';
import ViewPDF from '../viewPDF';
import axios from 'axios';

const data = [{ nactividad: " Construccion", tipo: "Misional", rol: "Lider de cuadrilla", fecha: "12/01/202", tiempo: "12", id: "" }]
const datas = [{ nactividadf: " Construccion", tipof: "Acciones de aspiracion", fechaf: "12/01/202", tiempof: "12" }]
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
    const [nombre, setNombre] = useState("");

    const sumar = () => {
        var sum = 0;
        actividades.map((elemento) =>
            sum = Number(sum) + Number(elemento.horas)
        );
        setSuma(sum);
    }

    const buscar = async () => {
        const options = {
            method: 'GET',
            url: `https://secure-earth-28511.herokuapp.com/actividadv/voluntario/${id}`,
        };

        await axios.request(options).then((response) => {
            setActividades(response.data);
            setNombre("Actividades de Voluntariado en las que ha participado");
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(async () => {
        buscar();
        sumar();
    }, []);

return (
    <Container maxWidth="sm">
        <h5>{nombre}</h5>
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
                            <td>{elemento.tipo}</td>
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



const TablaDocumentos = () => {
    const [show, setShow] = useState(false);
    const [info, setInfo] = useState({ nombre: "Cualquiera", link: "http://www.africau.edu/images/default/sample.pdf" });

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
                        <th>DECLARACIÓN DE VOLUNTADES</th>
                        <th>USO DE IMAGEN</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        <tr>
                            <td>
                                <button type="button" class="btn btn-success" onClick={() => { setInfo({ nombre: "Documento de Identidad", link: "http://www.africau.edu/images/default/sample.pdf" }); setShow(true) }} >Ver</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-success" onClick={() => { setInfo({ nombre: "Seguridad Social", link: "http://www.africau.edu/images/default/sample.pdf" }); setShow(true) }}>Ver</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-success" onClick={() => { setInfo({ nombre: "Pasaporte", link: "http://www.africau.edu/images/default/sample.pdf" }); setShow(true) }}>Ver</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-success" onClick={() => { setInfo({ nombre: "Aseguramiento de Viaje", link: "http://www.africau.edu/images/default/sample.pdf" }); setShow(true) }}>Ver</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-success" onClick={() => { setInfo({ nombre: "Hoja de Vida", link: "http://www.africau.edu/images/default/sample.pdf" }); setShow(true) }}>Ver</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-success" onClick={() => { setInfo({ nombre: "Carta de Motivacion", link: "http://www.africau.edu/images/default/sample.pdf" }); setShow(true) }}>Ver</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-success" onClick={() => { setInfo({ nombre: "Declaracion de Voluntades", link: "http://www.africau.edu/images/default/sample.pdf" }); setShow(true) }}>Ver</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-success" onClick={() => { setInfo({ nombre: "Uso de Imagen", link: "http://www.africau.edu/images/default/sample.pdf" }); setShow(true) }}>Ver</button>
                            </td>
                        </tr>
                    }
                </tbody>

            </Table>
        </Container>
    );
}





class TablaAFormacion extends Component {
    state = {
        data: datas
    }

    render() {
        return (
            <Container>
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
                            <td>150</td>
                        </tr>
                    </tfoot>
                    <tbody>
                        {
                            this.state.data.map((elemento) => (
                                <tr>
                                    <td>{elemento.nactividadf}</td>
                                    <td>{elemento.tipof}</td>
                                    <td>{elemento.fechaf}</td>
                                    <td>{elemento.tiempof}</td>

                                </tr>
                            ))
                        }
                    </tbody>

                </Table>
            </Container>
        );
    }
}

export {
    TablaAFormacion,
    TablaActividades,
    TablaDocumentos,
    TablaInfoAdicional
}