import React, {
    Component,
} from 'react'
// import {
    // Link,
// } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import {
    // AppLang,
    AppConfig,
} from '@internal/constants'
import {
    styles,
} from '@internal/styles'
import {
    // Avatar,
} from '@internal/ui'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskList: [],
            usingCardItem: window.innerWidth > 600,
        }
    }

    static propTypes = {
        taskList: PropTypes.array.isRequired,
        classes: PropTypes.object.isRequired,
        toggleDrawer: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired,
    }

    static defaultProps = {
        taskList: [],
        toggleDrawer: () => {},
        history: {},
    }

    componentDidMount = () => {
        this.setState({
            taskList: this.props.taskList,
        })
        window.addEventListener('resize', this.updateCard)
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.updateCard)
    }

    updateCard = e => this.setState({
        usingCardItem: e.target.innerWidth > 600
    })

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.taskList !== this.props.taskList) {
            this.setState({
                taskList: nextProps.taskList,
            })
        }
    }

    navigateToNewTask = () => {
        this.props.toggleDrawer()
        this.props.history.push(AppConfig.route.newTodo)
    }

	render = () => {
        const { classes } = this.props
        console.log(classes)

        return (
            <React.Fragment>
                <Grid
                    container
                    alignItems='center'
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <div
                            className={classnames('coverImageTop', 'middleContent')}
                        >
                            {/* <Avatar /> */}
                        </div>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

export default withStyles(styles.pages.home)(Home)
