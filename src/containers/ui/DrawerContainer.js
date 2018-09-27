import {
    connect,
} from 'react-redux'

import * as DrawerActions from '@internal/redux/drawer/actions'
import Drawer from './DrawerView'

const mapStateToProps = state => ({
    open: state.drawer.open,
})

const mapDispatchToProps = {
    toggleDrawer: DrawerActions.toggleDrawer,
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
