import {
    connect,
} from 'react-redux'
import {

} from '@material-ui/core'
import * as DrawerActions from '@internal/redux/drawer/actions'

import NavBar from './NavBarView'

const mapStateToProps = () => ({})
const mapDispatchToProps = {
    toggleDrawer: DrawerActions.toggleDrawer,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
