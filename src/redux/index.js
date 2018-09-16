import {
    combineReducers,
} from 'redux'

import task from './todo/reducer'

export default combineReducers({
    task,
})
