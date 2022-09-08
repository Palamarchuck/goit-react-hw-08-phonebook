import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact } from './contacts-actions';

const conactsReducer = createReducer([], {
    [addContact.type]: (store, {payload}) => {
        store.push(payload)
    },
    [removeContact]: (store, {payload}) =>  store.filter(({ id }) => id !== payload)
});

export default conactsReducer;