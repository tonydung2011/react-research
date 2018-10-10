import React, {
    Component
} from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase/app'

import {
    AppConfig
} from '@internal/constants'

export default class Root extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
        getProjectList: PropTypes.func.isRequired,
    }

    static defaultProps = {
        children: <div />,
        getProjectList: () => {},
    }

    componentDidMount = () => {
        firebase.initializeApp(AppConfig.firebaseConfig)
        this.props.getProjectList()
    }

    render = () => (
        <div>
            {this.props.children}
        </div>
    )
}
