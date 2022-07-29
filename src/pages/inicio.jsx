import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Card, Form, Col, Row } from 'react-bootstrap';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useHistory } from 'react-router-dom';
import { Modal, ModalTitle } from 'react-bootstrap';


const Inicio = () => {
    const [correo, setCorreo] = useState("");
    const [titulo, setTitulo] = useState("")
    const [mensaje, setMensaje] = useState([])
    const [contrasena, setContrasena] = useState(".");
    const [show, setShow] = useState(false);
    const modalOpen = () => setShow(true);
    const modalClose = () => setShow(false);
    let history = useHistory();

    const comprobar = () => {
        var valormensaje = []
        var error = false;
        if (correo.length <= 0) {
            valormensaje.push({ valor: "Debe escribir un correo" })
            error = true;
        }

        if (contrasena.length <= 0) {
            valormensaje.push({ valor: "Debe escribir una contraseña" })
            error = true;
        }
        setMensaje(valormensaje)
        return error;
    }

    const iniciarSesion = async () => {

        if (comprobar() === false) {
            signInWithEmailAndPassword(auth, correo, contrasena).then((userCredential) => {
                history.push("/voluntarios");
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            })
        } else {
            setTitulo("Error");
            setShow(true);
        }

    }

    return (
        <div style={{ paddingRight: "30vh", paddingLeft: "40vh", paddingTop: "20vh", height: "100%", width: "100%", alignContent: "center", justifyContent: "center" }}>
            <div>
                <Modal show={show} onHide={modalClose}>
                    <Modal.Header>
                        <ModalTitle>
                            {titulo}
                        </ModalTitle>
                        <button type="button" class="btn btn-danger" onClick={modalClose}> Cerrar</button>
                    </Modal.Header>
                    <Modal.Body>
                        {mensaje.map((elemento) =>
                            <p>{elemento.valor}</p>

                        )}
                    </Modal.Body>
                </Modal>
            </div>



            <Card style={{ height: "50vh", width: "100vh", margin: 0 }}>
                <div style={{ paddingBottom: "15px", paddingTop: "15px", textAlign: "center" }}>
                    <h3>INICIO DE SESIÓN</h3>
                </div>

                <hr style={{ marginLeft: "10px", marginRight: "10px", marginTop: 0 }} />

                <Form.Group as={Row} controlId="usuario" style={{ padding: "0px", marginBottom: 50, marginTop: 50, justifyContent: "center" }}>
                    <Form.Label column sm="2" >USUARIO</Form.Label>
                    <Col sm="5">
                        <Form.Control type="text" placeholder="Escriba el nombre de usuario" onChange={(e) => setCorreo(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="contrasena" style={{ paddin: "0px", justifyContent: "center", marginBottom: 50 }}>
                    <Form.Label column sm="2">CONTRASEÑA</Form.Label>
                    <Col sm="5">
                        <Form.Control type="password" placeholder="Escriba la contraseña" onChange={(e) => setContrasena(e.target.value)} />
                    </Col>
                </Form.Group>


                <button type="button" class="btn btn-success btn-lg" style={{ marginLeft: "45vh", marginRight: "35vh" }} onClick={iniciarSesion}> INICIAR SESIÓN</button>

            </Card>

        </div>
    );

}

export default Inicio;