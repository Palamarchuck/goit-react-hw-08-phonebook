import useForm from "components/Phonebook/hooks/useForm";
import styles from "./register-form.module.css"
import { initialState } from "./initialState";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterForm = ({ onSubmit }) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit})

    const {name, email, password} = state;

    return (
        <Form action="" onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
                <Form.Label  className={styles.label} htmlFor="">Имя пользователя:</Form.Label>
                <Form.Control size="sm" value={name} name="name" onChange={handleChange} className={styles.input} type="text" placeholder="Введите имя пользователя" required />
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label  className={styles.label} htmlFor="">Email пользователя:</Form.Label>
                <Form.Control size="sm" value={email} name="email" onChange={handleChange} className={styles.input} type="email" placeholder="Введите email пользователя" />
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label  className={styles.label} htmlFor="">Пароль пользователя:</Form.Label>
                <Form.Control size="sm" value={password} name="password" onChange={handleChange} className={styles.input} type="password" placeholder="Введите пароль пользователя" />
            </Form.Group>
            <Form.Group className="mb-2">
                <Button type="submit">Регистрация</Button>
            </Form.Group>
        </Form>
    )
}

export default RegisterForm