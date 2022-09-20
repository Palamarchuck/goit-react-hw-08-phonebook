import { useSelector, useDispatch } from "react-redux";

import { logout } from "redux/auth/auth-operations";

import { getUser } from "redux/auth/auth-selectors";

import Button from 'react-bootstrap/Button';

import Badge from 'react-bootstrap/Badge';

const UserMenu = () => {
    const { email } = useSelector(getUser);
    const dispatch = useDispatch();
    
    const onLogout = () => dispatch(logout())

    return (
        <div>
            <Badge bg="light" text="dark"><span>{email}</span> </Badge>
            <Button onClick={onLogout} type="button">Logout</Button>
        </div>
    )
}

export default UserMenu