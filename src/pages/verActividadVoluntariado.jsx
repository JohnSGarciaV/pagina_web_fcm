import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Row, Table, Container, Modal, ModalTitle } from 'react-bootstrap';
import { Proyecto } from '../information/data';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { estadoActividad } from '../information/data';

const VerActividadVoluntariado = () => {
    const[id, setId] = useState(useParams());
 
    const [estado, setEstado] = useState("0");
    const [sparticipantes, setSParticipantes] = useState([]);
    const [proyecto, setProyecto] = useState("0");
    const [familia, setFamilia] = useState("");
    const [nbeneficiarios, setNBeneficiarios] = useState(0);
    const [nhoras, setNHoras] = useState(0);
    const [fecha, setFecha] = useState(new Date());


    useEffect(async () => {
        const options = {
            method: 'GET',
            url: `https://secure-earth-28511.herokuapp.com/actividadv/${id.id}`,
        };

        await axios.request(options).then((response) => {
            setProyecto(response.data.proyecto);
            setFamilia(response.data.beneficiados);
            setNBeneficiarios(response.data.nbeneficiado);
            setNHoras(response.data.horas);
            setFecha(Date.parse(response.data.fecha));
            setSParticipantes(response.data.participantes);
            setEstado(response.data.estado);
          
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    return (
        
            <div>
                 <Form.Group as={Row} className="grupo" controlId="proyecto">
                <Form.Label column sm="2">Proyecto</Form.Label>
                <Col sm="10">
                    <Form.Select aria-label="Seleccion del proyecto" value={proyecto}  disabled="true" >
                        <option value="0">Seleccione el tipo de Proyecto</option>
                        {
                            Proyecto.map((elemento) => (
                                <option value={elemento.tipo}>{elemento.tipo}</option>
                            ))
                        }
                    </Form.Select>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="grupo" controlId="comunidad">
                <Form.Label column sm="2">Familia/ Comunidad Beneficiada</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" value={familia} disabled="true" placeholder="Escriba el nombre de la familia o comunidad"></Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="grupo" controlId="beneficarios">
                <Form.Label column sm="2">Numero de Beneficiarios</Form.Label>
                <Col sm="10">
                    <Form.Control type="number" value={nbeneficiarios} disabled="true" placeholder="Escriba la cantidad de beneficiarios"></Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="grupo" controlId="beneficarios">
                <Form.Label column sm="2">Numero de horas</Form.Label>
                <Col sm="10">
                    <Form.Control type="number" value={nhoras} disabled="true" placeholder="Escriba numero de horas"></Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="grupo" controlId="estado">
                <Form.Label column sm="2">Estado</Form.Label>
                <Col sm="10">
                    <Form.Select aria-label="Seleccion del proyecto" value={estado} disabled="true" >
                        <option value="0">Seleccione el estado</option>
                        {
                            estadoActividad.map((elemento) => (
                                <option value={elemento.estado}>{elemento.estado}</option>
                            ))
                        }
                    </Form.Select>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="grupo" controlId="numeroDoc">
                <Form.Label column sm="2">Fecha de la Actividad</Form.Label>

                <Col sm="10">
                    <DatePicker selected={fecha} onChange={(date) => setFecha(date)} disabled="true"/>
                </Col>
            </Form.Group>

            <div>
                <Container maxWidth="sm">
                    <Table hover size="sm" bordered="true">
                        <thead>
                            <tr>
                                <th>NOMBRE</th>
                                <th>DOCUMENTO</th>
                                <th>ROL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sparticipantes.map((elemento) => (
                                    <tr>
                                        <td>{elemento.nombre}</td>
                                        <td>{elemento.ndoc}</td>
                                        <td>{elemento.rol}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Container>
            </div>

            <div>
            <Link to={{pathname:`/editaravoluntariado/${id.id}`}}><button type="button" class="btn btn-primary"> EDITAR ACTIVIDAD </button></Link>
            </div>
        </div>
    )
}

export default VerActividadVoluntariado;