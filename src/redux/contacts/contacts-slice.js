import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contacts-operations";

// fetchContacts.pending - запит пішов
// fetchContacts.fulfilled - відповідь успішна
// fetchContacts.rejected - відповідь з помилкою



const initialState = {
    items: [],
    loading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: {
        [fetchContacts.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [fetchContacts.fulfilled]: (store, { payload }) => {
            store.loading = false;
            store.items = payload;
        },
        [fetchContacts.rejected]: (store, { payload }) => {
            store.loading = false;
            store.error = payload;
        },
    }
});

export default contactsSlice.reducer;