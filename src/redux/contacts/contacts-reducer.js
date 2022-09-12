import { createReducer, } from '@reduxjs/toolkit';
import actions  from './contacts-actions';


const initialStore = {
    items: [],
    loading: false,
    error: null,
}

const conactsReducer = createReducer(initialStore, {
    [actions.fetchContactsLoading]: (store) => {
        store.loading = true;
        store.error = null;
    },
    [actions.fetchContactsSuccess]: (store, { payload }) => {
        store.items = payload;
        store.loading = false;
       
    },
    [actions.fetchContactsError]: (store, { payload }) => {
        store.loading = false;
        store.error = payload;
       
    },
        
        
    [actions.addContactsLoading]: (store) => {
        store.loading = true;
        store.error = null;
    },
    [actions.addContactsSuccess]: (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
    },
    [actions.addContactsError]: (store, { payload }) => {
        store.loading = false;
        store.error = payload;
       
    },

    [actions.removeContactsLoading]: (store) => {
        store.loading = true;
        store.error = null;
    },
    [actions.removeContactsSuccess]: (store, { payload }) => {
        store.loading = false;
        store.items = store.items.filter(({id}) => id !== payload)
    },
    [actions.removeContactsError]: (store, { payload }) => {
        store.loading = false;
        store.error = payload;
       
    },
})
export default conactsReducer;