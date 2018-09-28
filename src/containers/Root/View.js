import React, {
    Component
} from 'react'
import PropTypes from 'prop-types'

import {
    ApiLib,
} from '@internal/lib'

export default class Root extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
    }

    static defaultProps = {
        children: <div />
    }

    componentDidMount = () => {
        ApiLib.callApi({
            url: 'http://www.mocky.io/v2/5badd51333000063000eb6c5',
        }, '', true)
    }

    render = () => (
        <div>
            {this.props.children}
        </div>
    )
}
