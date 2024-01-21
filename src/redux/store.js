import { applyMiddleware, combineReducers, createStore } from "redux";
import { roomsReducer } from "./reducers/rooms";
import { authReducer } from "./reducers/authReducer";
import { thunk } from "redux-thunk";
import { bookReducer } from "./reducers/bookReducer";

const Reducer = combineReducers({
    rooms: roomsReducer,
    authReducer: authReducer,
    bookReducer: bookReducer,
})

const store = createStore(Reducer, applyMiddleware(thunk))
export default store;