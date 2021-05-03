import { createStore, combineReducers, applyMiddleware } from "redux";
import students from "./reducers/studentsReducer";
import user from "./reducers/userReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  students,
  user,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
