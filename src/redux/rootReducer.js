import { combineReducers } from "redux";

import conactsReducer from "./contacts/contacts-reducer";
import filterReducer from "./filter/filter-reducer";

const rootReducer = combineReducers({
    contacts: conactsReducer,
    filter: filterReducer
})
    
export default rootReducer;




