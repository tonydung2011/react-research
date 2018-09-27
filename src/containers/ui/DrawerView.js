import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Drawer from '@material-ui/core/Drawer'
import withStyles from '@material-ui/core/styles/withStyles'
import {
    withRouter,
} from 'react-router-dom'
import PropTypes from 'prop-types'

import {
    AppConfig, AppLang
} from '@internal/constants'
import {
    styles,
} from '@internal/styles'

class SideMenu extends React.Component {
    static propTypes = {
        open: PropTypes.bool.isRequired,
        toggleDrawer: PropTypes.func.isRequired,
        classes: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    }

    static defaultProps = {
        open: false,
        toggleDrawer: () => {},
        classes: {},
        history: {},
    }

    navigateToNewTask = () => {
        this.props.toggleDrawer()
        this.props.history.push(AppConfig.route.newTodo)
    }

    render = () => (
        <Drawer
            anchor='left'
            open={this.props.open}
            onClose={this.props.toggleDrawer}
        >
            <div
                className={this.props.classes.drawerContainer}
            >
                <ListItem
                    button
                    onClick={this.navigateToNewTask}
                >
                    <ListItemText>
                        {AppLang.content.ui.drawer.newTodo}
                    </ListItemText>
                </ListItem>
            </div>
        </Drawer>
    )
}

export default withStyles(styles.ui.drawer)(withRouter(SideMenu))
