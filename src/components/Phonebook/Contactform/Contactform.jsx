import React, { Component } from 'react';
import styles from './Contactform.module.css';


class ContactForm extends Component {
    state = {
        name: '',
        number: '',
        }

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
        [name]: value,
        })
    }

    reset = () => {
        this.setState({ name: '', number: ''})
    }


    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        this.props.onSubmit(this.state);
        this.reset();
    }

    render() {
        
        return (
                <form onSubmit={this.handleSubmit} className={styles.contactForm}>
                    <label className={styles.contactLabel}>
                        Name 
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={this.state.name}
                        onChange={this.handleChange}
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
                            value={this.state.number}
                        onChange={this.handleChange}
                        className={styles.contactInput}
                            />

                    </label>
                    <button type="submit" className={styles.contactBtn}>Add contact</button>

                </form>

        )
    }
    
    
    
}

export default ContactForm;