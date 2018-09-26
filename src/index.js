import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import CssBaseline from '@material-ui/core/CssBaseline'
import configureStore, { history } from '@internal/store'
import App from './app'
import '@internal/styles'
import './favicon.ico'
import 'typeface-roboto'
const store = configureStore()

render(
    (
        <AppContainer>
            <div>
                <CssBaseline />
                <App store={store} history={history} />
            </div>
        </AppContainer>
    ),
    document.getElementById('app')
)

if (module.hot) {
    module.hot.accept('./App', () => {
        const NewApp = require('./App').default
        render(
            (
                <AppContainer>
                    <div>
                        <CssBaseline />
                        <NewApp store={store} history={history} />
                    </div>
                </AppContainer>
            ),
            document.getElementById('app')
        )
    })
}
