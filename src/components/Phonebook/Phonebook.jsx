

// import React, { useState, useEffect } from "react";
import ContactForm from "./Contactform/Contactform";
import ContactList from "./Contactlist/Contactlist";
import Filter from './Filter/Filter';
// import { nanoid } from 'nanoid';
// import useLocalStorage from './hooks/localStorage'
import { useSelector, useDispatch } from 'react-redux';
import { addContact, removeContact, setFilter } from "redux/contacts/contacts-actions";
import { getFilterContacts, getFilter } from "redux/selectors";




export default function Phonebook() {
    const contacts = useSelector(getFilterContacts);
    const filter = useSelector(getFilter)

    const dispatch = useDispatch();

    const onAddContact = (payload) => {
        const action = addContact(payload);
        dispatch(action);
    }

    const onRemoveContact = (payload) => {
        dispatch(removeContact(payload));
    }

    const onSetFilter = ({target}) => {
        dispatch (setFilter(target.value))
    }
    
        return (
            <div>
                <h1>Phonebook</h1>
                {/* <ContactForm onSubmit={addNewContact} />  */}
                <ContactForm onSubmit={onAddContact}/> 
                <h2>Contacts</h2>
                {/* <Filter value={filter} onChange={changeFilter} />
                <ContactList contacts={visibleContacts()} onDeleteContact={deleteContact} /> */}
                <Filter value={filter} onChange={onSetFilter} />
                <ContactList contacts={contacts} removeContact={onRemoveContact} />
                
            </div>
        )
    
}

    // const [contacts, setContacts] = useLocalStorage('contacts', []);
    // const [filter, setFilter] = useState('');
    
    // const addNewContact = ({ name, number }) => {
    // const isContact = contacts.find(contact => contact.name === name);
    //     if (isContact) {
    //         alert(`${name} is already in contact`);
    //         setContacts(contacts);
    //     } else {
    //         setContacts([
    //             {
    //                 id: nanoid(),
    //                 name,
    //                 number,
    //             }, ...contacts,]) 
    //      };
    // };

    // const deleteContact = (contactId) => {
    //     setContacts(contacts => (
    //         contacts.filter(contact => contact.id !== contactId)
    //     ))
    // }; 

    // const changeFilter = (e) => {
    //     setFilter(e.currentTarget.value);
    // };

    // const visibleContacts = () => {
    //     const normalizedFilter = filter.toLowerCase();
    //     return contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(normalizedFilter))
    // }

    // useEffect(() => {
    //     const contacts = localStorage.getItem('contacts');
    //     const parsedContacts = JSON.parse(contacts);

    //     if (parsedContacts) {
    //         setContacts(parsedContacts)}
    // }, [setContacts])
    
    // useEffect(() => {
    //     window.localStorage.setItem('contacts', JSON.stringify(contacts))
    // }, [contacts])