import  { useState } from 'react';
import styles from './Contactform.module.css';




export default function ContactForm(onSubmit) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
   
    const handleChange = event => {
        const { name, value } = event.target;
        
        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            
            default:
                return;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ name, number });
        setName('');
        setNumber('');
    };

        return (
            <form onSubmit={handleSubmit} className={styles.contactForm}>
                <label className={styles.contactLabel}>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={handleChange}
                        className={styles.contactInput}
                            
                    />
                </label>
                <label className={styles.contactLabel}>Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={handleChange}
                        className={styles.contactInput}
                    />

                </label>
                <button type="submit" className={styles.contactBtn}>Add contact</button>

            </form>

        )
    
    }

