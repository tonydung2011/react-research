import {
    combineReducers,
} from 'redux'

import drawer from './drawer/reducer'
import global from './global/reducer'
import project from './project/reducer'

export default combineReducers({
    drawer,
    global,
    project,
})
