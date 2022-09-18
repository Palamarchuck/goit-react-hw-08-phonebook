import { Link } from 'react-router-dom';
import styles from '../Navbar/navbar.module.css';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';


const UserMenu = () => {
    return (
        <div className={styles.wrapper}>
            <Link className={styles.logo} to="/">Logo</Link>
            <NavbarMenu />
            <NavbarAuth />
        </div>
    )
}

export default UserMenu;