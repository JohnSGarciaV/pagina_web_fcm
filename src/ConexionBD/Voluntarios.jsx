import axios from "axios";


const obtenerTodosVoluntarios = () => {
    return axios
        .create({
            baseURL: "https://secure-earth-28511.herokuapp.com/",
            headers: {
                "Content-type": "application/json",
            },
        })
        .get("voluntarios");
};

const crearVoluntario = (voluntario) => {
    return axios
        .create({
            baseURL: "https://secure-earth-28511.herokuapp.com/",
            headers: {
                "Content-type": "application/json",
            },
        })
        .post("voluntarios/new", voluntario);
}

function crearDocumentoDrive(documento, nombre, NombreCarpeta) {
    return new Promise(function (resolve, reject) {

        var reader = new FileReader() //this for convert to Base64 
        reader.readAsDataURL(documento) //start conversion...
        reader.onload = function (e) { //.. once finished..c
            var rawLog = reader.result.split(',')[1]; //extract only thee file data part
            var dataSend = { dataReq: { data: rawLog, name: nombre, type: documento.type, folder: NombreCarpeta }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
            fetch('https://script.google.com/macros/s/AKfycbzNWiU5nqzb8-_2wKTPXhXAQ-m9HSw5TmF4LCqeIZrS5kyrfwkyVqCAZNK9iigAW-kWJQ/exec', //your AppsScript URL
                {
                    method: "POST",
                    body: JSON.stringify(dataSend),
                }) //send to Api
                .then((res) => res.json())
                .then((data) => {
                    resolve(data)
                })// Or Error in console
        }
    }
    )
}

const buscarVoluntario = (id) => {
    return axios
        .create({
            baseURL: "https://secure-earth-28511.herokuapp.com/",
            headers: {
                "Content-type": "application/json",
            },
        })
        .get(`voluntario/${id}`);
}


function crearDocumentosVoluntario(Didentidad, DSSocial, DPasaporte, DSViaje, DHV, DMotivacion, DVoluntades, DUsoImagen, NombreCarpeta) {
    return new Promise(function (resolve, reject) {
        var cantCrear = 0;
        var cantCreada = 0;
        var nombre = "";
        var dataSend = { dataReq: { nameFolder: NombreCarpeta }, fname: "createFolder" }; //preapre info to send to API
        var urlsdoc = new Map();
        fetch('https://script.google.com/macros/s/AKfycbzNWiU5nqzb8-_2wKTPXhXAQ-m9HSw5TmF4LCqeIZrS5kyrfwkyVqCAZNK9iigAW-kWJQ/exec', //your AppsScript URL
            {
                method: "POST",
                body: JSON.stringify(dataSend),
            })
            .then(res => res.json())
            .then(data => {
                if (Didentidad !== null) {
                    cantCrear++
                    nombre = "DocumentoIdentidad" + NombreCarpeta;
                    crearDocumentoDrive(Didentidad, nombre, NombreCarpeta).then(function (url) {
                        urlsdoc.set("cedula", url.url);
                        cantCreada++
                    });
                } else {
                    urlsdoc.set("cedula", "");
                }

                if (DSSocial !== null) {
                    cantCrear++
                    nombre = "DocumentoSeguridadSocial" + NombreCarpeta;
                    crearDocumentoDrive(DSSocial, nombre, NombreCarpeta).then(function (url) {
                        urlsdoc.set("seguridadsocial", url.url);
                        cantCreada++
                    }
                    );
                } else {
                    urlsdoc.set("seguridadsocial", "");
                }

                if (DPasaporte !== null) {
                    cantCrear++
                    nombre = "DocumentoPasaporte" + NombreCarpeta;
                    crearDocumentoDrive(DPasaporte, nombre, NombreCarpeta).then(function (url) {
                        urlsdoc.set("pasaporte", url.url);
                        cantCreada++
                    }
                    );
                } else {
                    urlsdoc.set("pasaporte", "");
                }

                if (DSViaje !== null) {
                    cantCrear++
                    nombre = "DocumentoSeguroViaje" + NombreCarpeta;
                    crearDocumentoDrive(DSViaje, nombre, NombreCarpeta).then(function (url) {
                        urlsdoc.set("seguroviaje", url.url);
                        cantCreada++
                    }
                    );
                } else {
                    urlsdoc.set("seguroviaje", "");
                }

                if (DHV !== null) {
                    cantCrear++
                    nombre = "DocumentoHojaVida" + NombreCarpeta;
                    crearDocumentoDrive(DHV, nombre, NombreCarpeta).then(function (url) {
                        urlsdoc.set("hojavida", url.url);
                        cantCreada++
                    }
                    );
                } else {
                    urlsdoc.set("hojavida", "");
                }

                if (DMotivacion !== null) {
                    cantCrear++
                    nombre = "DocumentoMotivacion" + NombreCarpeta;
                    crearDocumentoDrive(DMotivacion, nombre, NombreCarpeta).then(function (url) {
                        urlsdoc.set("motivacion", url.url);
                        cantCreada++
                    }
                    );
                } else {
                    urlsdoc.set("motivacion", "");
                }
                if (DVoluntades !== null) {
                    cantCrear++
                    nombre = "DocumentoVoluntades" + NombreCarpeta;
                    crearDocumentoDrive(DVoluntades, nombre, NombreCarpeta).then(function (url) {
                        urlsdoc.set("voluntades", url.url);
                        cantCreada++
                    }
                    );
                } else {
                    urlsdoc.set("voluntades", "");
                }
                if (DUsoImagen !== null) {
                    cantCrear++
                    nombre = "DocumentoUsoImagen" + NombreCarpeta;
                    crearDocumentoDrive(DUsoImagen, nombre, NombreCarpeta).then(function (url) {
                        urlsdoc.set("usoimagen", url.url);
                        cantCreada++
                    }
                    );
                } else {
                    urlsdoc.set("usoimagen", "");
                }

            }).catch(e => {
                reject("error")
            })

    var id = setInterval(() =>{
        if(cantCrear > 0 && cantCreada === cantCrear){
            clearInterval(id)
            resolve(urlsdoc)
        }
    }, 300);


            
    })
}

export {
    obtenerTodosVoluntarios,
    crearVoluntario,
    crearDocumentosVoluntario,
    buscarVoluntario
}
