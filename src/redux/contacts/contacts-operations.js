import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "shared/api/contacts";


export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async(_, thunkAPI) => {
        try {
            const data = await api.getContacts();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }

)

// export const fetchContacts = () => {
//     const func = async(dispatch) => {
            
//         try {
//             dispatch(actions.fetchContactsLoading());
//             const data = await api.getContacts();
//             dispatch(actions.fetchContactsSuccess(data));
            
//         } catch (error) {
//             dispatch(actions.fetchContactsError(data))
//         }

//     };

//     return func; 
// }

const isDublicate = ({ name, number }, contacts) => {
    const normalizedName = name.toLowerCase();

    const result = contacts.find(item => {
        return (normalizedName === item.name.toLowerCase() && number === item.number)
    });
    return Boolean(result);
}

export const addContact = createAsyncThunk(
    "contacts/add",
    async (data, {rejectWithValue}) => {
        try {
            const result = await api.addContact(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    {
        condition: (data, { getState }) => {
            const { contacts } = getState();
            if (isDublicate(data, contacts.items)) {
                alert(`${data.name} ${data.number} is alredy exist`);
                return false;
            }
        }
    }
)

export const removeContact = createAsyncThunk(
    "contacts/remove",
    async (id, { rejectWithValue }) => {
        try {
            await api.removeContact(id);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }
        
    }
)

// export const addContact = (data) => {
//     const func = async(dispatch, getState) => {
//         const { contacts } = getState();
//         if (isDublicate(data, contacts.items)) {
//             return alert(`${data.name} ${data.number} is alredy exist`);
//         }
//         try {
//             dispatch(actions.addContactsLoading());
//             const result = await api.addContact(data);
//             dispatch(actions.addContactsSuccess(result));
            
//         } catch (error) {
//             dispatch(actions.addContactsError(error.message));
//         }

//     };

//     return func; 
// }


// export const removeContact = (id) => {
//     const func = async(dispatch) => {
//         try {
//             dispatch(actions.removeContactsLoading());
//             await api.removeContact(id)
//             dispatch(actions.removeContactsSuccess(id));
//         } catch (error) {
//             dispatch(actions.removeContactsError(error.message));
//         }
//     }
//     return func;
// }

