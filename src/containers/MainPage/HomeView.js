import React, {
    Component,
} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import {
    AppConfig,
    AppLang,
} from '@internal/constants'
import {
    styles,
} from '@internal/styles'
import {
    Avatar,
    // SocialConnect,
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

        return (
            <React.Fragment>
                <Grid
                    container
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <div className={classnames(classes.coverImageTop, 'middleContent')} >
                            <div className={classnames(classes.infoContainer)} >
                                <Avatar />
                                <div className={classnames('marginTop20', 'padBotton5')} >
                                    <Typography
                                        variant='headline'
                                        className={classes.nameTitle}
                                    >
                                        {AppLang.content.page.home.name}
                                    </Typography>
                                </div>
                                <div className={classnames('padTop5', 'marginBottom20')} >
                                    <Typography
                                        variant='subheading'
                                        className={classes.roleTitle}
                                    >
                                        {AppLang.content.page.home.role}
                                    </Typography>
                                </div>
                                {/* <div className={classnames('flexRow')}>
                                    <SocialConnect
                                        provider='facebook'
                                    />
                                    <SocialConnect
                                        provider='gmail'
                                    />
                                    <SocialConnect
                                        provider='linkedin'
                                    />
                                </div> */}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

export default withStyles(styles.pages.home)(Home)
