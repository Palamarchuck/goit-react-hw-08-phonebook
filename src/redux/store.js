import { configureStore } from "@reduxjs/toolkit";

import conactsReducer from "./contacts/contacts-slice";
import filterReducer from "./filter/filter-slice";

const store = configureStore({
    reducer: {
        contacts: conactsReducer,
        filter: filterReducer,
    }
})


export default store;


