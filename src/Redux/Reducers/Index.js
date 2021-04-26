import { combineReducers } from 'redux';
import Users from './Users'
import Search from './Search'
import Collection from './Collection'




const rootReducer = combineReducers({Users, Search, Collection})

export default rootReducer;