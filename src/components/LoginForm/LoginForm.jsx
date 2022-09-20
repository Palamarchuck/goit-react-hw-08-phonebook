import useForm from "components/Phonebook/hooks/useForm";
import styles from "./login-form.module.css"
import { initialState } from "./initialState";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = ({ onSubmit }) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})

    const {email, password} = state;

    return (
        <Form action="" onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
                <Form.Label className={styles.label} htmlFor="">Email пользователя:</Form.Label>
                <Form.Control value={email} name="email" onChange={handleChange} className={styles.input} type="email" placeholder="Введите email пользователя" />
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label className={styles.label} htmlFor="">Пароль пользователя:</Form.Label>
                <Form.Control value={password} name="password" onChange={handleChange} className={styles.input} type="password" placeholder="Введите пароль пользователя" />
            </Form.Group>
            <Form.Group className="mb-2">
                <Button variant="primary" type="submit">Регистрация</Button>
            </Form.Group>
        </Form>
    )
}

export default LoginForm