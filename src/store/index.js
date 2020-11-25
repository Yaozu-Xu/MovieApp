import { combineReducers } from 'redux';
import userReducer from './reducer/UserReducer'
import starReducer from './reducer/StarReducer'

export default combineReducers({
    user: userReducer,
    star: starReducer
})