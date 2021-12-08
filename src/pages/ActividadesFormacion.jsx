import { TablaActividadesFormacion } from "../Components/tablasActividades";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const ActividadesFormacion = () => {
    return (
        <div style={{ height: "90vh", overflowY: "scroll" }}>
            <div style={{ padding: 50 }}>
                <div style={{ padding: 10 }}>
                    <h5>ACTIVIDADES DE FORMACIÓN</h5>
                    <TablaActividadesFormacion />
                </div>
            </div>
            <Link to="/crearaformativa"><button type="button" class="btn btn-success">CREAR ACITIVIDAD DE FORMACION</button></Link>

        </div>
    )

}

export default ActividadesFormacion;
