import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const CalendarioAFormacion = () => {
    const localizer = momentLocalizer(moment);
    const [eventos, setEventos] = useState([]);
    const [actividades, setActividades] = useState([]);
    let history = useHistory();

    const showEvent = (index) =>{
       var elemento = actividades[index];
       history.push(`/veravoluntariado/${elemento._id}`);
    }

    useEffect(async () => {
        const options = {
            method: 'GET',
            url: 'https://secure-earth-28511.herokuapp.com/actividadesv',
        };

        await axios.request(options).then((response) => {
            setActividades(response.data);
            var allEventos = [];
            var cont=0;
            actividades.map((element) =>{
                allEventos.push({title:element.proyecto, allDay:true, start: Date.parse(element.fecha), end: Date.parse(element.fecha), index: cont});
                cont++;
            });
            setEventos(allEventos);

        }).catch(function (error) {
            console.error(error);
        });
    }, [eventos]);

    return (
        <div style={{ justifyContent: "center", alignContent: "center", paddingLeft: "32vh" }}>
            <Calendar localizer={localizer} events={eventos} startAccessor="start" endAccessor="end" style={{ width: "80%", height: "40vh" }} 
            onSelectEvent={(event) =>{ showEvent(event.index) }}
            eventPropGetter={(event) => {
                const backgroundColor = actividades[event.index].estado === "Realizado" ? 'green' : 'red';
                return { style: { backgroundColor } }
              }}
            />
        </div>
    )
}

export default CalendarioAFormacion;