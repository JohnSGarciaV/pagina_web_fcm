import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import '../../styles/styletable.css'
import ViewPDF from '../viewPDF';

const data = [{ nactividad: " Construccion", tipo: "Misional", rol: "Lider de cuadrilla", fecha: "12/01/202", tiempo: "12" }]
const datas = [{ nactividadf: " Construccion", tipof: "Acciones de aspiracion", fechaf: "12/01/202", tiempof: "12" }]
const datag = [{ nombre: "Juan", nacionalidad: "Colombia", tdocumento: "CC", ndocumento: "20000", adocumento: "01/01/1999", rango: "Silver", correo: "john@hotmail.com", elegalizacion: true, celular: "3102341234", observaciones: "Ninguna", convenio: "Ninguno", tvoluntariado: "Voluntario", modalidad: "Virtual", entrevista: false, induccion: true, ptrabajo: true, opractica: " ", tespecifico: " ", finicio: "12/01/2021", ffinal: "12/01/2022", evaluacion: false, estado: "Activo" }];
const datav = [{ convenio: "Univerisdad", tipo: "Voluntariado", modalidad: "Mixto", finicio: "01/01/2019", ffinal: " ", estado: "Activo" }]



class TablaInfoGeneralF extends Component {
    state = {
        data: datag
    }

    render() {
        return (
            <Container maxWidth="sm">
                <Table hover size="sm" bordered="true">
                    <thead>
                        <tr>
                            <th>NOMBRE</th>
                            <th>NACIONALIDAD</th>
                            <th>TIPO DE DOCUMENTO</th>
                            <th>NUMERO DE DOCUMENTO</th>
                            <th>CECULAR</th>
                            <th>CORREO</th>
                            <th>RANGO</th>
                            <th>ESTADO DE LEGALIZACIÓN </th>
                            <th>ACCIONES </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((elemento) => (
                                <tr>
                                    <td>{elemento.nombre}</td>
                                    <td>{elemento.nacionalidad}</td>
                                    <td>{elemento.tdocumento}</td>
                                    <td>{elemento.ndocumento}</td>
                                    <td>{elemento.celular}</td>
                                    <td>{elemento.correo}</td>
                                    <td>{elemento.rango}</td>
                                    <td>{elemento.elegalizacion}  </td>
                                    <td>
                                        <button type="button" class="btn btn-primary"> Editar </button>
                                    </td>
                                </tr>

                            ))}
                    </tbody>
                </Table>
            </Container>
        );
    }
}




class TablaVoluntariado extends Component {
    state = {
        data: datav
    }

    render() {
        return (
            <Container>
                <Table hover size="sm" bordered="true">
                    <thead>
                        <tr>
                            <th>CONVENIO</th>
                            <th>TIPO</th>
                            <th>MODALIDAD</th>
                            <th>FECHA INICIO</th>
                            <th>FECHA FINAL</th>
                            <th>ESTADO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((elemento) => (
                                <tr>
                                    <td>{elemento.convenio}</td>
                                    <td>{elemento.tipo}</td>
                                    <td>{elemento.modalidad}</td>
                                    <td>{elemento.finicio}</td>
                                    <td>{elemento.ffinal}</td>
                                    <td>{elemento.estado}</td>

                                </tr>
                            ))
                        }
                    </tbody>

                </Table>
            </Container>
        );
    }
}

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

class TablaActividades extends Component {
    state = {
        data: data
    }

    render() {
        return (
            <Container>
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
                            <td>150</td>
                        </tr>
                    </tfoot>
                    <tbody>
                        {
                            this.state.data.map((elemento) => (
                                <tr>
                                    <td>{elemento.nactividad}</td>
                                    <td>{elemento.tipo}</td>
                                    <td>{elemento.rol}</td>
                                    <td>{elemento.fecha}</td>
                                    <td>{elemento.tiempo}</td>

                                </tr>
                            ))
                        }
                    </tbody>

                </Table>
            </Container>
        );
    }
}



const TablaDocumentos = () => {
    const [show, setShow]= useState(false);
    const [info, setInfo] = useState({nombre:"Cualquiera", link:"http://www.africau.edu/images/default/sample.pdf"});

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
                                    <button type="button" class="btn btn-success" onClick={() => { setInfo({nombre:"Documento de Identidad", link:"http://www.africau.edu/images/default/sample.pdf"}); setShow(true)}} >Ver</button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-success"  onClick={() => { setInfo({nombre:"Seguridad Social", link:"http://www.africau.edu/images/default/sample.pdf"}); setShow(true)}}>Ver</button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-success"  onClick={() => { setInfo({nombre:"Pasaporte", link:"http://www.africau.edu/images/default/sample.pdf"}); setShow(true)}}>Ver</button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-success"  onClick={() => { setInfo({nombre:"Aseguramiento de Viaje", link:"http://www.africau.edu/images/default/sample.pdf"}); setShow(true)}}>Ver</button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-success"  onClick={() => { setInfo({nombre:"Hoja de Vida", link:"http://www.africau.edu/images/default/sample.pdf"}); setShow(true)}}>Ver</button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-success"  onClick={() => { setInfo({nombre:"Carta de Motivacion", link:"http://www.africau.edu/images/default/sample.pdf"}); setShow(true)}}>Ver</button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-success"  onClick={() => { setInfo({nombre:"Declaracion de Voluntades", link:"http://www.africau.edu/images/default/sample.pdf"}); setShow(true)}}>Ver</button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-success"  onClick={() => { setInfo({nombre:"Uso de Imagen", link:"http://www.africau.edu/images/default/sample.pdf"}); setShow(true)}}>Ver</button>
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
    TablaInfoGeneralF,
    TablaDocumentos,
    TablaVoluntariado,
    TablaInfoAdicional
}