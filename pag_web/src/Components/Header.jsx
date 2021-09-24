import logo from '../media/logo_fcm.png'
import '../styles/styles.scss'
const Header = () => {
    return (
        <header>
            <ul className="navbar">
                <li>
                    <img src={logo} alt='Logo FCM' className="logo" />
                </li>

                <li>
                    <h1> Sistema de gestion de Voluntarios</h1>
                </li>

            </ul>
        </header>
    );
};

export default Header;