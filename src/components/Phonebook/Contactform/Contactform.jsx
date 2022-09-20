import { useState } from 'react';
import styles from './Contactform.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function ContactForm({ onSubmit }) {
       
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
   
    const handleNameChange = e => {
        setName(e.currentTarget.value);
    };

    const handleNumberChange = e => {
        setNumber(e.currentTarget.value);
    };


    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ name, number });
        setName('');
        setNumber('');
    };

        return (
            <Form onSubmit={handleSubmit} className={styles.contactForm}>
                <Form.Label className={styles.contactLabel}>
                    Name
                    <Form.Control
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={handleNameChange}
                        className={styles.contactInput}
                            
                    />
                </Form.Label>
                <Form.Label className={styles.contactLabel}>Number
                    <Form.Control
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={handleNumberChange}
                        className={styles.contactInput}
                    />

                </Form.Label>
                <Button type="submit" className={styles.contactBtn}>Add contact</Button>

            </Form>

        )
    
    }

