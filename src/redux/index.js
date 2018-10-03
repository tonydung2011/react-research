import {
    combineReducers,
} from 'redux'

import drawer from './drawer/reducer'
import global from './global/reducer'

export default combineReducers({
    drawer,
    global,
})
