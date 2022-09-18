import { NavLink } from "react-router-dom";
import styles from "./navbar-menu.module.css"

const getClassName = ({ isActive }) => {
    const className = isActive ? `${styles.link} ${styles.active}` : styles.link;
    return className;
}

const NavbarMenu = () => {
    return (
        <ul className={styles.menu}>
                <li > 
                    <NavLink className={getClassName} to="/contacts">Contacts</NavLink>
                </li>
                {/* <li> 
                    <NavLink className={getClassName} to="/movies">Movies</NavLink>
                </li> */}
        </ul>
    )
}

export default NavbarMenu;