import { Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TablaActividadesVoluntariado = ({actividades, setActividades}) => {
    return (
        <Container maxWidth="sm">
        <Table hover size="sm" bordered="true">
            <thead>
                <tr>
                    <th>PROYECTO</th>
                    <th>FAMILIA/COMUNIDAD</th>
                    <th># BENEFICIADOA</th>
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
                            <td>{elemento.beneficiarios}</td>
                            <td>{elemento.nbeneficiarios}</td>
                            <td>{elemento.duracion}</td>
                            <td>{elemento.nparticipantes}</td>
                            <td>{elemento.estado}</td>
                            <td>
                                <Link to='/editarVoluntario'><button type="button" class="btn btn-primary"> Editar </button></Link>
                                <button type="button" class="btn btn-danger"> Eliminar </button>
                            </td>
                        </tr>

                    ))}
            </tbody>
        </Table>
    </Container>
    )
}

const TablaActividadesFormacion = ({actividades, setActividades}) => {
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
                            <td>{elemento.tipo}</td>
                            <td>{elemento.nombre}</td>
                            <td>{elemento.duracion}</td>
                            <td>{elemento.nparticipantes}</td>
                            <td>
                                <Link to='/editarVoluntario'><button type="button" class="btn btn-primary"> Editar </button></Link>
                                <button type="button" class="btn btn-danger"> Eliminar </button>
                            </td>
                        </tr>

                    ))}
            </tbody>
        </Table>
    </Container>
    )
}

export{
    TablaActividadesFormacion,
    TablaActividadesVoluntariado
}