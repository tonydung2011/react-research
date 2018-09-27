import React, {
    Component,
} from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import NavBar from '@internal/containers/ui/NavBarContainer'
import withStyles from '@material-ui/core/styles/withStyles'

import Moment from 'moment'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {
    AppConfig,
    AppLang,
} from '@internal/constants'
import {
    styles
} from '@internal/styles'

class New extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskTitle: '',
            taskContent: '',
        }
    }

    static propTypes = {
        classes: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        addNewTask: PropTypes.func.isRequired,
    }

    static defaultProps = {
        classes: {},
        history: {},
        addNewTask: () => {},
    }

    addNewTask = () => {
        this.props.addNewTask({
            title: this.state.taskTitle,
            content: this.state.taskContent,
            id: Moment.now(),
        })
        this.props.history.push(AppConfig.route.home)
    }

	render = () => {
        const { classes } = this.props
        return (
            <React.Fragment>
                <NavBar title={AppLang.content.page.new.title} />
                <Grid
                    container
                    className={classes.pageContainer}
                >
                    <Grid item xs={false} md={4} />
                    <Grid
                        item
                        xs={12}
                        md={4}
                    >
                        <form
                            className={classnames('pad15', 'margin20', classes.formWrapper)}
                            noValidate
                            autoComplete='off'
                        >
                            <TextField
                                fullWidth
                                label={AppLang.content.page.new.taskTitle}
                                className={classes.taskTitle}
                                value={this.state.taskTitle}
                                onChange={(e) => this.setState({
                                    taskTitle: e.target.value
                                })}
                                autoFocus
                                id='task-title'
                                margin='normal'
                                placeholder={AppLang.content.page.new.taskTitlePlaceHolder}
                            />
                            <TextField
                                fullWidth
                                multiline
                                label={AppLang.content.page.new.taskContent}
                                className={classes.taskContent}
                                value={this.state.taskContent}
                                onChange={(e) => this.setState({
                                    taskContent: e.target.value
                                })}
                                id='task-content'
                                margin='normal'
                                placeholder={AppLang.content.page.new.taskContentPlaceHolder}
                                variant='outlined'
                                rows='5'
                            />
                            <Grid
                                container
                                justify='center'
                            >
                                <Grid
                                    item
                                >
                                    <Button
                                        onClick={this.addNewTask}
                                        variant='contained'
                                        className={classes.button}
                                    >
                                        {AppLang.content.page.new.submit}
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid item xs={false} md={4} />
                </Grid>
            </React.Fragment>
        )
    }
}

export default withStyles(styles.pages.news)(New)
