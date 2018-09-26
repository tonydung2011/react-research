import {
    combineReducers,
} from 'redux'

import task from './todo/reducer'
import drawer from './drawer/reducer'
import global from './global/reducer'

export default combineReducers({
    task,
    drawer,
    global,
})
