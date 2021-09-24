import 'bootstrap/scss/bootstrap.scss';
import '../styles/stylesb.css';
import { MdViewHeadline } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FiArchive } from "react-icons/fi";
import { FaCertificate } from "react-icons/fa"


const Sidebar = () => {
    return (
        <div class="d-flex">

            <div class="sidebar-container" className="sidebar" >
                <div className="logo">
                    <h4>Sistema de Gestion de Voluntarios</h4>
                </div>

                <div className="menu">
                    <ul>
                        <li>
                            <MdViewHeadline size={30} />
                        </li>

                        <li>
                            <FiUsers size={22}/> <a href="#" class="d-block" className="sletra"> Voluntarios</a>
                        </li>

                        <li>
                            <FiArchive size={22} /><a href="#" class="d-block" className="sletra"> Actividades</a>
                        </li>

                        <li>
                            <FaCertificate size={22} /><a href="#" class="d-block" className="sletra"> Generar Certificado</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;