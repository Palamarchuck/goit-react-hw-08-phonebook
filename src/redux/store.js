import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/auth-slice"
import conactsReducer from "./contacts/contacts-slice";
import filterReducer from "./filter/filter-reducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: conactsReducer,
        filter: filterReducer,
    }
})


export default store;


