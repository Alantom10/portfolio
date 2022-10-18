import {Link, NavLink} from "react-router-dom";
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";

const Header = () => (
    <div className='header'>
        <div className='header_content'>
            <div className='header_logo-container'>
                <div className='header_logo-img-cont'>
                    <Link className='logo' to='/'>
                        <img src={LogoS} alt="logo" className='header_logo-img' />
                    </Link>
                </div>
                <span className='header_logo-sub'>Alan Thomas</span>
            </div>
            <div className='header_main'>
                <nav className='header_links'>
                    <NavLink className='header_link-wrapper' exact="true" activeclassname="active" to="/">
                        <FontAwesomeIcon className='header_link' icon={faHome} color="#4d4d4e" />
                    </NavLink>
                    <NavLink className='header_link-wrapper' exact="true" activeclassname="active" className="about-link" to="/about">
                        <FontAwesomeIcon className='header_link' icon={faUser} color="#4d4d4e" />
                    </NavLink>
                    <NavLink className='header_link-wrapper' exact="true" activeclassname="active" className="contact-link" to="/contact">
                        <FontAwesomeIcon className='header_link' icon={faEnvelope} color="#4d4d4e" />
                    </NavLink>
                </nav>
            </div>
        </div>
    </div>
)

export default Header