import {combineReducers} from "redux"
 //the concept behind the reducer  is to interact with the store whenever the values are changed 
//session
import { sessionReducer } from "redux-react-session"

const rootReducer = combineReducers({
  session: sessionReducer
})
export default rootReducer;