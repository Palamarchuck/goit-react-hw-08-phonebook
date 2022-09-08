import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import conactsReducer from "./contacts/contacts-slice";
import filterReducer from "./filter/filter-slice";

const rootReducer = combineReducers({
    
            items: conactsReducer,
            filter: filterReducer,
        
})

const persistConfig = {
    key: "contacts",
    storage,
};


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);







