import todoReducer from './todoSlice'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    tasks: todoReducer,
})

export default rootReducer
