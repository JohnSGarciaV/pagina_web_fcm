import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Row, Table, Container, Modal, ModalTitle } from 'react-bootstrap';
import { Proyecto } from '../information/data';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Rol } from "../information/data";
import { estadoActividad } from '../information/data';

const CrearActividadVoluntariado = () => {
    const [mensaje, setMensaje] = useState([]);
    const [titulo, setTitulo] = useState([]);
    const [show, setShow] = useState(false);
    const modalOpen = () => setShow(true);
    const modalClose = () => setShow(false);

    const [tparticipantes, setTParticipantes] = useState([]);
    const [rol, setRol] = useState(0);
    const [pseleccionado, setPSeleccionado] = useState(0);
    const [ind, setInd] = useState(1);

    const [estado, setEstado]= useState("0");
    const [sparticipantes, setSParticipantes] = useState([]);
    const [proyecto, setProyecto] = useState("0");
    const [familia, setFamilia] = useState("");
    const [nbeneficiarios, setNBeneficiarios] = useState(0);
    const [nhoras, setNHoras] = useState(0);
    const [fecha, setFecha] = useState(new Date());


    const agregarVoluntario = () => {
        if (undefined === sparticipantes.find(p => p.ndoc === pseleccionado) && rol !== "0") {
            const par = tparticipantes.find(p => p.ndoc === pseleccionado);
            if (par !== undefined) {
                sparticipantes.push(
                    { nombre: par.nombre, ndoc: par.ndoc, rol: rol, id: par._id });
            }
            setPSeleccionado("0");
            setRol("0");
        };
    }

    const eliminarVoluntario = (elemento) => {
        var i = sparticipantes.indexOf(elemento);
        sparticipantes.splice(i, 1);
        setPSeleccionado(tparticipantes[i].ndoc);
        ind == 1 ? setInd(2) : setInd(1);
    }

    const comprobarCampos = () => {
        setMensaje([]);
        setTitulo("Error");
        var good=true;
        var mnuevo=[];
        if(proyecto === "0"){
            good=false;
            mnuevo.push({valor:"Debe seleccionar un proyecto"});
        }

        if(estado === "0"){
            good=false;
            mnuevo.push({valor:"Debe seleccionar un estado"});
        }

        if(familia.toString().length <= 0){
            good=false;
            mnuevo.push({valor:"Debe escribir la Familia/Comunidad beneficiada"});
        }

        if(nbeneficiarios.valueOf() <= 0){
            good=false;
            mnuevo.push({valor:"El numero de beneficiarios debe ser mayor a 0"});
        }
        
        if(nhoras.valueOf() <= 0){
            good=false;
            mnuevo.push({valor:"El numero de horas debe ser mayor a 0"});
        }

        if(sparticipantes.length <= 0){
            good=false;
            mnuevo.push({valor:"Debe agregar al menos un voluntario a la actividad"});
        }
        setMensaje(mnuevo);
        return good;

    }

    const crearDB = async () => {
        if(comprobarCampos()){
            const options= {
                method: 'POST',
                url: 'https://secure-earth-28511.herokuapp.com/actividadesv/new',
                headers: { 'Content-Type': 'application/json' },
                data: {proyecto: proyecto, beneficiados: familia, nbeneficiado: nbeneficiarios, horas: nhoras, fecha: fecha, participantes: sparticipantes, estado: estado },
            };

            await axios.request(options).then((response) => {
               setMensaje([]);
               setTitulo("Exitoso");
               setMensaje([{valor:"La actividad fue creada"}]);
               modalOpen();
               setProyecto("0");
               setFamilia("");
               setNBeneficiarios(0);
               setNHoras(0);
               setEstado(0);
               setSParticipantes([]);

            }).catch(function (error){
               setMensaje([]);
               setTitulo("Error");
               setMensaje([{valor: error.toString()}]);
               modalOpen();
            });
        }else{
          modalOpen();
        }
    }

    useEffect(async () => {
        const options = {
            method: 'GET',
            url: 'https://secure-earth-28511.herokuapp.com/voluntarios',
        };

        await axios.request(options).then((response) => {
            setTParticipantes(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    return (
        <div>
            <h4>Crear Actividad de Voluntariado </h4>
            <div>
                <Modal show={show} onHide={modalClose}>
                    <Modal.Header>
                        <ModalTitle>
                         {titulo}
                        </ModalTitle>
                        <button type="button" class="btn btn-danger" onClick={modalClose}> Cerrar</button>
                    </Modal.Header>
                    <Modal.Body>
                        {   mensaje.map((elemento) =>
                            <p>{elemento.valor}</p>

                        )}
                    </Modal.Body>
                </Modal>
            </div>


            <Form.Group as={Row} className="grupo" controlId="proyecto">
                <Form.Label column sm="2">Proyecto</Form.Label>
                <Col sm="10">
                    <Form.Select aria-label="Seleccion del proyecto" value={proyecto} onChange={(e) => setProyecto(e.target.value)} >
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
                    <Form.Control type="text" value={familia} onChange={(e) => setFamilia(e.target.value)} placeholder="Escriba el nombre de la familia o comunidad"></Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="grupo" controlId="beneficarios">
                <Form.Label column sm="2">Numero de Beneficiarios</Form.Label>
                <Col sm="10">
                    <Form.Control type="number" value={nbeneficiarios} onChange={(e) => setNBeneficiarios(e.target.value)} placeholder="Escriba la cantidad de beneficiarios"></Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="grupo" controlId="beneficarios">
                <Form.Label column sm="2">Numero de horas</Form.Label>
                <Col sm="10">
                    <Form.Control type="number" value={nhoras} onChange={(e) => setNHoras(e.target.value)} placeholder="Escriba numero de horas"></Form.Control>
                </Col>
            </Form.Group>


            <Form.Group as={Row} className="grupo" controlId="numeroDoc">
                <Form.Label column sm="2">Fecha de la Actividad</Form.Label>

                <Col sm="10">
                    <DatePicker selected={fecha} onChange={(date) => setFecha(date)} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="grupo" controlId="estado">
                <Form.Label column sm="2">Estado</Form.Label>
                <Col sm="10">
                    <Form.Select aria-label="Seleccion del proyecto" value={estado} onChange={(e) => setEstado(e.target.value)} >
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
                <Col sm="10">
                    <Form.Label column sm="2">Nombre</Form.Label>
                    <select value={pseleccionado} onChange={(e) => { setPSeleccionado(e.target.value) }}>
                        <option value="0">Seleccione un voluntario</option>
                        {
                            tparticipantes.map((elemento) =>
                                <option value={elemento.ndoc}>{elemento.nombre} </option>
                            )
                        }
                    </select>
                    <select value={rol} onChange={(e) => setRol(e.target.value)}>
                        <option value="0"> Seleccione el rol</option>
                        {
                            Rol.map((elemento) =>
                                <option value={elemento.tipo}>{elemento.tipo} </option>)
                        }
                    </select>
                    <button type="button" class="btn btn-success" onClick={() => agregarVoluntario()}> Agregar</button>
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
                                <th>ACCIONES </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sparticipantes.map((elemento) => (
                                    <tr>
                                        <td>{elemento.nombre}</td>
                                        <td>{elemento.ndoc}</td>
                                        <td>{elemento.rol}</td>
                                        <td>
                                            <button type="button" class="btn btn-danger" onClick={() => eliminarVoluntario(elemento)}> Eliminar </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Container>
            </div>

            <div>
                <button type="button" class="btn btn-success" onClick={crearDB}> CREAR ACTIVIDAD </button>
            </div>
        </div>
    )
}

export default CrearActividadVoluntariado;