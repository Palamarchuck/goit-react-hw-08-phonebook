import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contactlist.module.css';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';



const ContactList = ({ contacts, removeContact }) => (
  <ListGroup className={styles.contactList}>
    {contacts.map(({ name, number, id }) => (
        <ListGroup.Item key = {id} className={styles.contactItem}>
            <p className={styles.contactText}>
            {name}: {number}
            </p>
            <Button onClick={()=>removeContact(id)} className={styles.contactBtn}>Delete</Button>
        </ListGroup.Item>
    ))}
  </ListGroup>
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


