

import React, { Component } from "react";
import ContactForm from "./Contactform/Contactform";
import ContactList from "./Contactlist/Contactlist";
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
// import styles from '../Phonebook/Phonebook.modules.css';



class Phonebook extends Component {
    state = {
        contacts: [
                    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
                    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
                    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
                    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
                    ],
        filter: '',
        name: '',
        number: ''
}
    
     addNewContact = ({ name, number }) => {
        this.setState(({ contacts }) => {
        const isContact = contacts.find(contact => contact.name === name);

        if (isContact) {
            alert(`${name} is already in contact`);
            return contacts;
        } else {
            const newContact = {
            id: nanoid(),
            name,
            number,
        };
            return {
            contacts: [newContact, ...contacts],
            };
        }
        });
    };

    deleteContact = (contactId) => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== contactId),
        }))
    }; 

    changeFilter = (e) => {
        this.setState({ filter: e.currentTarget.value });
    };

    getVisibleContacts = () => {
        const { filter, contacts } = this.state;
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter))
    }

    

    render() {
        
        const visibleContacts = this.getVisibleContacts();

        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={ this.addNewContact } />                               
                <h2>Contacts</h2>
                <Filter value={this.state.filter} onChange={this.changeFilter} />
                <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
                
            </div>
        )
    }
}



export default Phonebook