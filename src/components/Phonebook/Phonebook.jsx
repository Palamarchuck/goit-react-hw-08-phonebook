

import React, { useState, useEffect } from "react";
import ContactForm from "./Contactform/Contactform";
import ContactList from "./Contactlist/Contactlist";
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
// import styles from '../Phonebook/Phonebook.modules.css';


const useLocalStorage = (key, defaultValue) => {
        const [state, setState] = useState(() => {
            return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
        });
        useEffect(() => {
            window.localStorage.setItem(key, JSON.stringify(state))
        }, [key, state]);
        return [state, setState];
    }
export default function Phonebook() {
    const[contacts, setContacts] = useLocalStorage('contacts', [])
    const [filter, setFilter] = useState('');
    
     const addNewContact = ({ name, number }) => {
        const isContact = contacts.find(contact => contact.name === name);
        if (isContact) {
            alert(`${name} is already in contact`);
            setContacts(contacts);
        } else {
            setContacts([
                {
                    id: nanoid(),
                    name,
                    number,
                }, ...contacts]) 
         };
    };

    const deleteContact = (contactId) => {
        setContacts(contacts => (
            contacts.filter(contact => contact.id !== contactId)
        ))
    }; 

    const changeFilter = (e) => {
        setFilter(e.currentTarget.value);
    };

    const visibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter))
    }

    useEffect(() => {
        const contacts = localStorage.getItem('contacts');
        const parsedContacts = JSON.parse(contacts);

        if (parsedContacts) {
            setContacts(parsedContacts)}
    }, [setContacts])
    
    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])
   
    
        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={ addNewContact } />                               
                <h2>Contacts</h2>
                <Filter value={filter} onChange={changeFilter} />
                <ContactList contacts={visibleContacts} onDeleteContact={deleteContact}/>
                
            </div>
        )
    
}

