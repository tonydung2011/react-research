import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import configureStore, { history } from '@internal/store'
import App from './app'
import '@internal/styles'
require('./favicon.ico') // Tell webpack to load favicon.ico
const store = configureStore()

render(
    (
        <AppContainer>
            <App store={store} history={history} />
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
                    <NewApp store={store} history={history} />
                </AppContainer>
            ),
            document.getElementById('app')
        )
    })
}
