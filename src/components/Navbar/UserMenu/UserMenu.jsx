import { useSelector } from "react-redux"
import { getUser } from "redux/auth/auth-selectors"

const UserMenu = () => {
    const {email} = useSelector(getUser)
    return (
        <div>
            <span>{email}</span> | 
            <button type="button">Logout</button>
        </div>
    )
}

export default UserMenu