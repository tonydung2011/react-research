import React, {
    Component
} from 'react'
import PropTypes from 'prop-types'

export default class Root extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
    }

    static defaultProps = {
        children: <div />
    }

    render = () => (
        <div>
            {this.props.children}
        </div>
    )
}
