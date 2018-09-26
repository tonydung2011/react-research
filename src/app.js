import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
import AppNavigation from '@internal/navigation'
import {
    styles,
} from '@internal/styles'

export default class Root extends Component {
    render() {
        const { store, history } = this.props
        return (
            <MuiThemeProvider theme={styles.master} >
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <AppNavigation />
                    </ConnectedRouter>
                </Provider>
            </MuiThemeProvider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}
