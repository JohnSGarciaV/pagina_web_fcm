import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Form, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Inicio = () => {
    return (
        <div style={{ paddingRight:"30vh", paddingLeft: "40vh", paddingTop: "20vh", height: "100%", width: "100%", alignContent:"center", justifyContent:"center"}}>
            
                <Card style={{ height: "50vh", width: "100vh", margin: 0 }}>
                    <div style={{ paddingBottom: "15px", paddingTop: "15px", textAlign: "center" }}>
                        <h3>INICIO DE SESIÓN</h3>
                    </div>

                    <hr style={{ marginLeft: "10px", marginRight: "10px", marginTop: 0 }} />

                    <Form.Group as={Row} controlId="usuario" style={{ padding: "0px", marginBottom: 50, marginTop: 50, justifyContent: "center" }}>
                        <Form.Label column sm="2" >USUARIO</Form.Label>
                        <Col sm="5">
                            <Form.Control type="text" placeholder="Escriba el nombre de usuario" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="contrasena" style={{ paddin: "0px", justifyContent: "center", marginBottom: 50 }}>
                        <Form.Label column sm="2">CONTRASEÑA</Form.Label>
                        <Col sm="5">
                            <Form.Control type="password" placeholder="Escriba la contraseña" />
                        </Col>
                    </Form.Group>

                    <Link to="/voluntarios">
                        <button type="button" class="btn btn-success btn-lg" style={{ marginLeft: "45vh", marginRight: "35vh" }}> INICIAR SESIÓN</button>
                    </Link>
                </Card>

        </div>
    )

}

export default Inicio;