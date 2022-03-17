import { TablaActividadesVoluntariado } from "../Components/tablasActividades";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import CalendarioAFormacion from "./CalendarioAFormacion";



const ActividadesVoluntariado = () => {
    
    return (
        <div style={{ height: "90vh", overflowY: "scroll" }}>
            <div style={{ padding: 20 }}>
                <div style={{ padding: 10 }}>
                    <h5>ACTIVIDADES DE VOLUNTARIADO</h5>
                </div>
                <TablaActividadesVoluntariado />
            </div>

            <Link to="/crearavoluntariado"><button type="button" class="btn btn-success">CREAR ACITIVIDAD DE VOLUNTARIADO</button></Link>
            <div style={{ padding: 10 }}></div>
            <CalendarioAFormacion/>
        </div>
    )

}

export default ActividadesVoluntariado;

