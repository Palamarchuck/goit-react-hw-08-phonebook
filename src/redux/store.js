import { configureStore } from "@reduxjs/toolkit";

import conactsReducer from "./contacts/contacts-reducer";
import filterReducer from "./filter/filter-reducer";

const store = configureStore({
    reducer: {
        contacts: conactsReducer,
        filter: filterReducer,
    }
})


export default store;


