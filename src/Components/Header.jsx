import logo from '../media/logo_fcm.png'
import '../styles/styles.css'
import '../Components/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const Header = () => {
    return (
        <header>
            <nav className="navbar" class="navbar navbar-light ">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <li>
                    <h4> Sistema de Gestión de Voluntariado</h4>
                </li>

                <li>
                    <img src={logo} alt='Logo FCM' className="logo" />
                </li>
            </nav>
        </header>
    );
};

export default Header;