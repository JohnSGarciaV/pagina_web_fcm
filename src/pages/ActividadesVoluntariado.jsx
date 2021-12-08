import React, { useState } from "react";
import { TablaActividadesFormacion} from "../Components/tablasActividades";
import 'bootstrap/dist/css/bootstrap.min.css';


const ActividadesFormacion = () => {
    return (
        <div style={{ height: "90vh", overflowY: "scroll" }}>
            <div style={{ padding: 20 }}>
                <h5>ACTIVIDADES DE FORMACIÓN</h5>
                <TablaActividadesFormacion />
            </div>
        </div>
    )

}

export default ActividadesFormacion;

