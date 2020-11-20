import { combineReducers } from 'redux';
import userReducer from './reducer/UserReducer'

export default combineReducers({
    user: userReducer
})