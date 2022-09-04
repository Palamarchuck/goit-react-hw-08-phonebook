import { ADD_CONTACT, REMOVE_CONTACT,} from "./contacts-types";
;
const initialStore = [];

const conactsReducer = (store = initialStore, {type, payload}) => {
    
    switch (type) {
        case ADD_CONTACT:
            return { ...store,  payload };
        case REMOVE_CONTACT:
            const newContacts = store.filter(({ id }) => id !== payload);
            return { ...store, contacts: newContacts };
        default:
            return store;
    }
    
}

export default conactsReducer;