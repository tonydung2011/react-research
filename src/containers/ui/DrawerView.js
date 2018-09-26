import React from 'react'
import {
    Drawer,
    ListItem,
    withStyles,
} from '@material-ui/core'
import {
    Link,
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
    }

    static defaultProps = {
        open: false,
        toggleDrawer: () => {},
        classes: {},
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
                <ListItem>
                    <Link
                        to={AppConfig.route.newTodo}
                    >
                        {AppLang.content.ui.drawer.newTodo}
                    </Link>
                </ListItem>
            </div>
        </Drawer>
    )
}

export default withStyles(styles.ui.drawer)(SideMenu)
