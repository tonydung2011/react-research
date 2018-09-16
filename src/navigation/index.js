import React from 'react'
import {
    Route,
    Switch,
} from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Home from '@internal/containers/MainPage/HomeContainer'
import New from '@internal/containers/MainPage/NewContainer'
// import {
//     NavBar,
//     Header,
//     Footer,
// } from '@internal/ui'
import {
    AppConfig,
} from '@internal/constants'

class App extends React.Component {
    render() {
        return (
            <div>
                {/* <Header />
                <NavBar /> */}
                <Switch>
                    <Route
                        path={AppConfig.route.new}
                        component={New}
                        exact
                    />
                    <Route
                        path={AppConfig.route.home}
                        component={Home}
                        exact
                    />
                </Switch>
                {/* <Footer /> */}
            </div>
        )
    }
}

export default hot(module)(App)
