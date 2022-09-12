
import * as api from "shared/api/contacts";
import  actions from "./contacts-actions";


export const fetchContacts = () => {
    const func = async(dispatch) => {

        try {
            dispatch(actions.fetchContactsLoading());
            const data = await api.getContacts();
            console.log(data);
            dispatch(actions.fetchContactsSuccess(data));
            
        } catch (error) {
            dispatch(actions.fetchContactsError(error.message));
        }

    };

    return func; 
}

const isDublicate = ({ name, number }, contacts) => {
    const normalizedName = name.toLowerCase();
    const result = contacts.find(item => {
        return (normalizedName === item.name.name.toLowerCase() && number === item.number)
    });
    return Boolean(result);
}

export const addContact = (data) => {
    const func = async(dispatch, getState) => {
        const { contacts } = getState();
        if (isDublicate(data, contacts.items)) {
            return alert(`${data.name} ${data.number} is alredy exist`);
        }
        try {
            dispatch(actions.addContactsLoading());
            const result = await api.getContacts();
            dispatch(actions.addContactsSuccess(result));
            
        } catch (error) {
            dispatch(actions.addContactsError(error.message));
        }

    };

    return func; 
}


export const removeContact = (id) => {
    const func = async(dispatch) => {
        try {
            dispatch(actions.removeContactsLoading());
            await api.removeContact(id)
            dispatch(actions.removeContactsSuccess(id));
        } catch (error) {
            dispatch(actions.removeContactsError(error.message));
        }
    }
    return func;
}

