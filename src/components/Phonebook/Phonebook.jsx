

import { useSelector, useDispatch } from 'react-redux';

import ContactForm from "./Contactform/Contactform";
import ContactList from "./Contactlist/Contactlist";
import Filter from './Filter/Filter';

import { addContact, removeContact} from "redux/contacts/contacts-actions";
import { setFilter } from 'redux/filter/filter-actions';
import { getFilterContacts } from 'redux/filter/filter-selectors';
import { getFilter } from 'redux/filter/filter-selectors';




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