import React, { Component } from 'react';
import { TablaActividades } from '../Components/Voluntarios/tvoluntario';
import { TablaInfoGeneralF } from '../Components/Voluntarios/tvoluntario';
import { TablaAFormacion } from '../Components/Voluntarios/tvoluntario';
import { TablaDocumentos } from '../Components/Voluntarios/tvoluntario';
import { TablaVoluntariado } from '../Components/Voluntarios/tvoluntario';
import { TablaInfoAdicional } from '../Components/Voluntarios/tvoluntario';


class InformacionVoluntario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:"this.props.location.state"
        }
    }

    render() {
        return (
            <div style={{height:"90vh", overflowY:"scroll"}}>
                <div style={{ padding: 20 }}>
                    <h5>INFORMACIÓN GENERAL</h5>
                    <TablaInfoGeneralF />
                </div>

                <div style={{ padding: 20 }}>
                    <h5>Documentos</h5>
                    <TablaDocumentos />
                </div>

                <div style={{ padding: 20 }}>
                    <h5>Información Voluntariado</h5>
                    <TablaVoluntariado />
                </div>

                <div style={{ padding: 20 }}>
                    <h5>Información adicional Voluntariado</h5>
                    <TablaInfoAdicional />
                </div>

                <div style={{ padding: 20 }}>
                    <h5>Actividades de Voluntariado en las que ha participado</h5>
                    <TablaActividades />
                </div>

                <div style={{ padding: 20 }}>
                    <h5>Actividades de Formación en las que ha participado</h5>
                    <TablaAFormacion />
                </div>
            </div>
        );
    }
}

export default InformacionVoluntario;