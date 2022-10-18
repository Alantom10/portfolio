import {Link, NavLink} from "react-router-dom";
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faSkype, faTwitch} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="logo-sub" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="moreferrer" href="https://www.linkedin.com/in/alanthomas2000/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="moreferrer" href="https://github.com/Alantom10">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="moreferrer" href="skype:live:acthomas2000_1">
                    <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="moreferrer" href="https://www.twitch.tv/granturnmeon">
                    <FontAwesomeIcon icon={faTwitch} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar