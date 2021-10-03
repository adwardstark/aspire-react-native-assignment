import { combineReducers } from "redux";
import card from "./card";

const rootReducer = combineReducers({
    card: card,
})

export default rootReducer;