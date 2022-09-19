import { useSelector, useDispatch } from "react-redux";

import { logout } from "redux/auth/auth-operations";

import { getUser } from "redux/auth/auth-selectors";

const UserMenu = () => {
    const { email } = useSelector(getUser);
    const dispatch = useDispatch();
    
    const onLogout = () => dispatch(logout())

    return (
        <div>
            <span>{email}</span> | 
            <button onClick={onLogout} type="button">Logout</button>
        </div>
    )
}

export default UserMenu