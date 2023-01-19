
//with redux we are creating storage of the information whenever our user login

import {createStore, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk'
import rootReducer from "../auth/reducers/rootReducer"

//session service 

//it provides us the tools to store the details of a currently logged in user.
import {sessionService} from "redux-react-session"

const initialState ={};
const  middlewares = [thunk];

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
 
sessionService.initSessionService(store)

export default store;