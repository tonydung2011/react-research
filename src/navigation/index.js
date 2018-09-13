import React from "react";
import PropTypes from "prop-types";
import {
    NavLink,
    // Route,
    Switch,
} from "react-router-dom";
import { hot } from "react-hot-loader";


class App extends React.Component {
    render() {
        const activeStyle = { color: 'blue' };
        return (
            <div>
                <div>
                <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
                {' | '}
                <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
                {' | '}
                <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
                </div>
                <Switch>
                </Switch>
            </div>
        );
    }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);