import { NavLink } from "react-router-dom";
import styles from "./navbar-auth.module.css";
import Nav from 'react-bootstrap/Nav';

const NavbarAuth = () => {
    return (
        <Nav className="justify-content-end">
            <Nav.Link>
                <NavLink to="/register" className={styles.link}>Register</NavLink> 
            </Nav.Link>
            <Nav.Link>
                <NavLink to="/login" className={styles.link}>login</NavLink>
            </Nav.Link>
           
            
                
            
            
            
        </Nav>
    )
}

export default NavbarAuth;