import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Row, Table, Container } from 'react-bootstrap';
import { Formativa } from '../information/data';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const VerActividadFormacion = () => {
    const[id, setId] = useState(useParams());

    const [sparticipantes, setSParticipantes] = useState([]);
    const [proyecto, setProyecto] = useState("0");
    const [nombre, setNombre] = useState("");
    const [nhoras, setNHoras] = useState(0);
    const [fecha, setFecha] = useState(new Date());



    useEffect(async () => {
        const options = {
            method: 'GET',
            url: `https://secure-earth-28511.herokuapp.com/actividadf/${id.id}`,
        };

        await axios.request(options).then((response) => {
            setProyecto(response.data.proyecto);
            setNombre(response.data.nombre);
            setNHoras(response.data.horas);
            setFecha(Date.parse(response.data.fecha));
            setSParticipantes(response.data.participantes);
          
        }).catch(function (error) {
            console.error(error);
        });
    }, []);


    return (
        <div>
            <Form.Group as={Row} className="grupo" controlId="proyecto">
                <Form.Label column sm="2">Actividad</Form.Label>
                <Col sm="10">
                    <Form.Select aria-label="Seleccion del proyecto" value={proyecto} disabled="true" >
                        <option value="0">Seleccione el tipo de Actividad</option>
                        {
                            Formativa.map((elemento) => (
                                <option value={elemento.tipo}>{elemento.tipo}</option>
                            ))
                        }
                    </Form.Select>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="grupo" controlId="comunidad">
                <Form.Label column sm="2">Nombre de la actvidad</Form.Label>
                <Col sm="10">
                    <Form.Control type="text" value={nombre} disabled="true" placeholder="Escriba el nombre de la familia o comunidad"></Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="grupo" controlId="beneficarios">
                <Form.Label column sm="2">Numero de horas</Form.Label>
                <Col sm="10">
                    <Form.Control type="number" value={nhoras} disabled="true" placeholder="Escriba numero de horas"></Form.Control>
                </Col>
            </Form.Group>


            <Form.Group as={Row} className="grupo" controlId="numeroDoc">
                <Form.Label column sm="2">Fecha de la Actividad</Form.Label>

                <Col sm="10">
                    <DatePicker selected={fecha} disabled="true" />
                </Col>
            </Form.Group>

            <div>
                <Container maxWidth="sm">
                    <Table hover size="sm" bordered="true">
                        <thead>
                            <tr>
                                <th>NOMBRE</th>
                                <th>DOCUMENTO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sparticipantes.map((elemento) => (
                                    <tr>
                                        <td>{elemento.nombre}</td>
                                        <td>{elemento.ndoc}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Container>
            </div>

            <div>
            <Link to={{ pathname: `/editaraformacion/${id.id}` }}><button type="button" class="btn btn-primary">  MODIFICAR ACTIVIDAD </button></Link>
            </div>
        </div>
    )
}

export default VerActividadFormacion;