import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contactlist.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.contactList}>
    {contacts.map(({ name, number, id }) => (
        <li key = {id} className={styles.contactItem}>
            <p className={styles.contactText}>
            {name}: {number}
            </p>
            <button onClick={()=>onDeleteContact(id)} className={styles.contactBtn}>Delete</button>
        </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,      
    })
    ),
};

export default ContactList;