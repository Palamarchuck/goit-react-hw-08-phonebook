import { createAction } from '@reduxjs/toolkit';
    

const fetchContactsLoading = createAction("contacts/fetch/loading");
const fetchContactsSuccess = createAction("contacts/fetch/success");
const fetchContactsError = createAction("contacts/fetch/error");

const addContactsLoading = createAction("contacts/add/loading");
const addContactsSuccess = createAction("contacts/add/success");
const addContactsError = createAction("contacts/add/error");

const removeContactsLoading = createAction("contacts/remove/loading");
const removeContactsSuccess = createAction("contacts/remove/success");
const removeContactsError = createAction("contacts/remove/error");

const actions = {
    fetchContactsLoading,
    fetchContactsSuccess,
    fetchContactsError,
    addContactsLoading,
    addContactsSuccess,
    addContactsError,
    removeContactsLoading,
    removeContactsSuccess,
    removeContactsError,
    
}

export default actions;