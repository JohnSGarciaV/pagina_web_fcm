import axios from "axios";

const delay = ms => new Promise(res => setTimeout(res, ms));

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

function crearDocumentoDrive(documento, nombre, carpeta) {
    return new Promise(function (resolve, reject) {

        var reader = new FileReader() //this for convert to Base64 
        reader.readAsDataURL(documento) //start conversion...
        reader.onload = function (e) { //.. once finished..c
            var rawLog = reader.result.split(',')[1]; //extract only thee file data part
            var dataSend = { dataReq: { data: rawLog, name: nombre, type: documento.type, folder: carpeta }, fname: "uploadFilesToGoogleDrive" }; //preapre info to send to API
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


function crearDocumentosVoluntario(Didentidad, DSSocial, DPasaporte, DSViaje, DHV, DMotivacion, DVoluntades, DUsoImagen, NDocumento) {
    return new Promise(function (resolve, reject) {
        var carpeta = NDocumento;
        var dataSend = { dataReq: { nameFolder: carpeta }, fname: "createFolder" }; //preapre info to send to API
        var urlsdoc = {}
        fetch('https://script.google.com/macros/s/AKfycbzNWiU5nqzb8-_2wKTPXhXAQ-m9HSw5TmF4LCqeIZrS5kyrfwkyVqCAZNK9iigAW-kWJQ/exec', //your AppsScript URL
            {
                method: "POST",
                body: JSON.stringify(dataSend),
            })
            .then(res => res.json())
            .then(data => {
                if (Didentidad !== null) {
                    var nombre = "DocumentoIdentidad" + NDocumento;
                    crearDocumentoDrive(Didentidad, nombre, carpeta).then(function (url) {
                        urlsdoc.cedula = url.url;
                    });

                } else {
                    urlsdoc.cedula = "";
                }

                if (DSSocial !== null) {
                    var nombre = "DocumentoSeguridadSocial" + NDocumento;
                    crearDocumentoDrive(DSSocial, nombre, carpeta).then(function (url) {
                        urlsdoc.seguridadsocial = url.url;
                    }
                    );
                } else {
                    urlsdoc.seguridadsocial = "";
                }

                if (DPasaporte !== null) {
                    var nombre = "DocumentoPasaporte" + NDocumento;
                    crearDocumentoDrive(DPasaporte, nombre, carpeta).then(function (url) {
                        urlsdoc.pasaporte = url.url;
                    }
                    );
                } else {
                    urlsdoc.pasaporte = "";
                }

                if (DSViaje !== null) {
                    var nombre = "DocumentoSeguroViaje" + NDocumento;
                    crearDocumentoDrive(DSViaje, nombre, carpeta).then(function (url) {
                        urlsdoc.seguroviaje = url.url;
                    }
                    );
                } else {
                    urlsdoc.seguroviaje = "";
                }

                if (DHV !== null) {
                    var nombre = "DocumentoHojaVida" + NDocumento;
                    crearDocumentoDrive(DHV, nombre, carpeta).then(function (url) {
                        urlsdoc.hojavida = url.url;
                    }
                    );
                } else {
                    urlsdoc.hojavida = "";
                }

                if (DMotivacion !== null) {
                    var nombre = "DocumentoMotivacion" + NDocumento;
                    crearDocumentoDrive(DMotivacion, nombre, carpeta).then(function (url) {
                        urlsdoc.motivacion = url.url;
                    }
                    );
                } else {
                    urlsdoc.motivacion = "";
                }
                if (DVoluntades !== null) {
                    var nombre = "DocumentoVoluntades" + NDocumento;
                    crearDocumentoDrive(DVoluntades, nombre, carpeta).then(function (url) {
                        urlsdoc.voluntades = url.url;
                    }
                    );
                } else {
                    urlsdoc.voluntades = "";
                }
                if (DUsoImagen !== null) {
                    var nombre = "DocumentoUsoImagen" + NDocumento;
                    crearDocumentoDrive(DUsoImagen, nombre, carpeta).then(function (url) {
                        urlsdoc.usoimagen = url.url;
                    }
                    );
                } else {
                    urlsdoc.usoimagen = "";
                }

            }).catch(e => {
                return "error"
            })

        setTimeout(function () {
            resolve(urlsdoc)
        }, 3000);
    }
    )
}

export {
    obtenerTodosVoluntarios,
    crearVoluntario,
    crearDocumentosVoluntario,
    buscarVoluntario
}
