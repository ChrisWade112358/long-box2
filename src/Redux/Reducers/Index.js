import { combineReducers } from 'redux';
import Users from './Users'
import Search from './Search'




const rootReducer = combineReducers({Users, Search})

export default rootReducer;