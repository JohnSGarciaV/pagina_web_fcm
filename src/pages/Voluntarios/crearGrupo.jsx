import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row } from 'react-bootstrap';
import * as XLSX from 'xlsx';

const CrearGrupoAspirantes = () => {

   // const [mensaje, setMensaje] = useState("");
   // const [nombreASrchivo, setNombreArchivo] = useState("");
   // const [datos, setDatos] = useState("");

    const mostarArchivo = async (e) => {
        if (e.target.files.length > 0) {
            try {
                var f = e.target.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    var data = e.target.result;
                    let readedData = XLSX.read(data, { type: 'binary' });
                    const wsname = readedData.SheetNames[0];
                    const ws = readedData.Sheets[wsname];

                    /* Convert array to json*/
                    const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 });
                    //setDatos(dataParse);
                    console.log(readedData);
                };
                reader.readAsBinaryString(f)
                

            } catch (exception) {
                console.log("Error al leer el archivo");
            }
        } else {
            console.log("Error Vacio");
        }
    }

    return (
        <div>
            <h4>Crear Aspirantes en Grupo</h4>
            <h5>Debe subir el archivo excel que arroja el formulario</h5>
            <Form.Group as={Row} className="grupo">
                <Form.Label>Archivo de Excel</Form.Label>
                <input class="form-control" type="file" id="ssocial" onChange={(value) => { mostarArchivo(value) }}></input>
            </Form.Group>
        </div>
    )
}

export default CrearGrupoAspirantes;