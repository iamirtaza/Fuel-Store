import {combineReducers} from "redux";
import TalentReducer from "./TalentReducer";
import ListReducer from "./ListReducer";
import UserReducer from "./UserReducer"

export default combineReducers({
    user: UserReducer,
    talent: TalentReducer,
    list: ListReducer
});