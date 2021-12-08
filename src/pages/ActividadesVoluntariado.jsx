import { TablaActividadesVoluntariado } from "../Components/tablasActividades";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import { useState } from "react";
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';



const ActividadesVoluntariado = () => {
    const localizer = momentLocalizer(moment);
    const [eventos, setEventos]= useState([]);

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
        <div style={{justifyContent:"center", alignContent:"center", paddingLeft:"32vh"}}>
          <Calendar localizer={localizer} events={eventos} startAccessor="start" endAccessor="end"  style={{width:"80%", height:"40vh"}}/>
        </div>
        </div>
    )

}

export default ActividadesVoluntariado;

