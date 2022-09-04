import { SET_FILTER} from "./filter-types";

const initialStore = "";

const filterReducer = (store = initialStore, {type, payload}) => {
    
    switch (type) {

        case SET_FILTER:
            return { ...store, filter: payload };
        default:
            return store;
    }
    
}

export default filterReducer;