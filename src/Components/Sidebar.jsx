import '../styles/stylesb.css';
import { FiUsers } from "react-icons/fi";
import { FiArchive } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { FaCertificate } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi"
import { RiUserSettingsLine } from "react-icons/ri"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div>
            <div class="collapse" id="navbarToggleExternalContent" className="sidebar">
                <ul >
                    <li >
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#listVoluntarios" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <FiUsers className="boton" /> <a href="#" class="d-block" className="sletra"> Voluntarios</a> <FiChevronDown className="boton" />
                        </button>

                        <div class="collapse" id="listVoluntarios" className="lista-desplegable">
                            <div class="list-group">
                                <li><a href="/Voluntarios" class="d-block" className="sletras"> Lista de Voluntarios</a></li>
                                <li><a href="/crearVoluntario" class="d-block" className="sletras"> Crear Voluntario</a></li>
                                <li><a href="#" class="d-block" className="sletras"> Crear Grupo de Voluntarios</a></li>
                            </div>
                        </div>
                    </li>

                    <li>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#listActividades" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <FiArchive className="boton" /><a href="#" class="d-block" className="sletra"> Actividades</a> <FiChevronDown className="boton" />
                        </button>

                        <div class="collapse" id="listActividades" className="lista-desplegable" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <div class="list-group">
                                <li><a href="/actividadesvoluntariado" class="d-block" className="sletras"> Lista de Actividades de Formación</a></li>
                                <li><a href="/actividadesformacion" class="d-block" className="sletras"> Lista de Actividades de Voluntariado</a></li>
                                <li><a href="/crearavoluntariado" class="d-block" className="sletras"> Crear Actividad de Voluntariado</a></li>
                                <li><a href="/crearaformativa" class="d-block" className="sletras"> Crear Actividad Formativa </a></li>
                            </div>
                        </div>

                    </li>

                    <li>
                        <button class="navbar-toggler" type="button" >
                            <FaCertificate className="boton" /><a href="#" class="d-block" className="sletra"> Generar Certificado</a>
                        </button>

                    </li>

                    <li>
                        <button class="navbar-toggler" type="button" >
                            <RiUserSettingsLine className="boton" /><a href="#" class="d-block" className="sletra"> Gestión de usuarios </a>
                        </button>
                    </li>

                    <li>
                        <Link to="/">
                        <button class="navbar-toggler" type="button" >
                            <FiLogOut className="boton" /><a href="#" class="d-block" className="sletra"> Cerrar Sesión</a>
                        </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;