import { useSelector, useDispatch } from "react-redux";
// import { Navigate } from "react-router-dom";

import RegisterForm from "components/RegisterForm/RegisterForm"

import { signup } from "redux/auth/auth-operations";

import { getAuthError } from "redux/auth/auth-selectors";


const RegisterPage = () => {
    const dispatch = useDispatch();
    const { status, message } = useSelector(getAuthError);
   

    const onRegister = (data) => {
        dispatch(signup(data));
    }

    return (
        <div className="container">
            <h2> Register Page</h2>
            <RegisterForm onSubmit={onRegister} />
            {status && <p style={{color: 'red'}}>{message}</p>}
        </div>
    )
}

export default RegisterPage