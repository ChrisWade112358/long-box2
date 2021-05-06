import { combineReducers } from 'redux';
import Users from './Users'
import Comics from './Comics'
import Collection from './Collection'




const rootReducer = combineReducers({Users, Comics, Collection})

export default rootReducer;