import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Card, Form, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useHistory } from 'react-router-dom';


const Inicio = () => {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState(".");
    let history = useHistory();

    const iniciarSesion = async () => {

        signInWithEmailAndPassword(auth, correo, contrasena).then((userCredential) => {
            history.push("/voluntarios");
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

        })

    }

    return (
        <div style={{ paddingRight: "30vh", paddingLeft: "40vh", paddingTop: "20vh", height: "100%", width: "100%", alignContent: "center", justifyContent: "center" }}>

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
    )

}

export default Inicio;