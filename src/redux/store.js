import { createStore } from "redux";
import { ADD_CONTACT, REMOVE_CONTACT} from "./types";

const initialStore = {
//   contacts: {
//     items: [],
//     filter: ''
//   }
    
    contacts: []

}

const reducer = (store = initialStore, {type, payload}) => {
    
    switch (type) {
        case ADD_CONTACT:
            return { ...store, contacts: [...store.contacts, payload] };
        case REMOVE_CONTACT:
            const newContacts = store.contacts.filter(({ id }) => id !== payload);
            return {...store, contacts:newContacts}
        default:
            return store;
    }
    
}


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

// console.log(store.getState()); 
