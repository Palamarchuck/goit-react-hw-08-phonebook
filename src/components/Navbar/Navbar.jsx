import { Link } from 'react-router-dom';
import styles from '../Navbar/navbar.module.css';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import UserMenu from './UserMenu/UserMenu';

import useAuth from 'shared/hooks/useAuth';


const Navbar = () => {
    const isLogin = useAuth()

    return (
        <div className={styles.wrapper}>
            <Link className={styles.logo} to="/">Logo</Link>
            {isLogin && <NavbarMenu />}
            {isLogin ? <UserMenu /> : <NavbarAuth />}
        </div>
    )
}

export default Navbar;