import { NavLink } from "react-router-dom";
import styles from "./navbar-menu.module.css"
import Nav from 'react-bootstrap/Nav';

const getClassName = ({ isActive }) => {
    const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
    return className;
}

const NavbarMenu = () => {
    return (
        <ul className={styles.menu}>
            <li > 
                <Nav>
                    <Nav.Link>
                        <NavLink className={getClassName} to="/contacts">Contacts</NavLink>
                    </Nav.Link>
                </Nav>
                    
                </li>
        </ul>
    )
}

export default NavbarMenu;