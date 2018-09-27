import React from 'react'
import {
    Route,
    Switch,
} from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Home from '@internal/containers/MainPage/HomeContainer'
import New from '@internal/containers/MainPage/NewContainer'
import Drawer from '@internal/containers/ui/DrawerContainer'
import Root from '@internal/containers/Root/Contaienr'
import {
    AppConfig,
} from '@internal/constants'

class App extends React.Component {
    componentDidMount = () => {
    }

    render = () => (
        <Root>
            <React.Fragment>
                <Drawer />
                <Switch>
                    <Route
                        path={AppConfig.route.newTodo}
                        component={New}
                        exact
                    />
                    <Route
                        path={AppConfig.route.home}
                        component={Home}
                        exact
                    />
                </Switch>
            </React.Fragment>
        </Root>
    )
}

export default hot(module)(App)
