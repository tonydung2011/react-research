import React, {
    Component,
} from 'react'
import {
    // Link,
} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import withStyles from '@material-ui/core/styles/withStyles'
import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TocIcon from '@material-ui/icons/Toc'
import Typography from '@material-ui/core/Typography'

import PropTypes from 'prop-types'

import NavBar from '@internal/containers/ui/NavBarContainer'
import {
    AppLang, AppConfig,
} from '@internal/constants'
import {
    styles,
} from '@internal/styles'
import {
    HoverAddButton,
} from '@internal/ui'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskList: [],
            usingCardItem: window.innerWidth > 960,
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
        usingCardItem: e.target.innerWidth > 960
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

    renderItem = item => {
        const itemRef = React.createRef()
        return (
            <Grid
                item
                xs={12}
                lg={4}
                key={item.id}
            >
                {
                    this.state.usingCardItem ? (
                        <Card
                            ref={itemRef}
                            className={this.props.classes.itemHover}
                        >
                            <CardContent>
                                <p className='textCardHeader textColorPrimary'>
                                    {item.title}
                                </p>
                                <p className='textCardContent textColorDark'>
                                    {item.content}
                                </p>
                            </CardContent>
                        </Card>
                    ) : (
                        <ListItem
                            button
                            className={this.props.classes.listItemContainer}
                        >
                            <ListItemIcon>
                                <TocIcon />
                            </ListItemIcon>
                            <ListItemText
                                classes={styles.pages.home.listItemText}
                                primary={(
                                    <Typography variant='display1' noWrap >{item.title}</Typography>
                                )}
                                secondary={(
                                    <Typography variant='body2' noWrap >{item.content}</Typography>
                                )}
                            />
                        </ListItem>
                    )
                }
            </Grid>
        )
    }

	render = () => (
        <div>
            <NavBar isHome title={AppLang.content.page.home.title} />
            <Grid
                container
            >
                <Grid item xs={false} md={2} />
                <Grid
                    item
                    xs={12}
                    lg={8}
                >
                    <img
                        src={AppConfig.img.homeBackground}
                        className={this.props.classes.imgBackground}
                    />
                    <Grid
                        container
                        spacing={8}
                        className={this.props.classes.listWrapper}
                    >
                        <Divider />
                        {this.state.taskList.map(item => this.renderItem(item))}
                    </Grid>
                </Grid>
                <Grid item xs={false} md={2} />
            </Grid>
            <HoverAddButton callback={this.navigateToNewTask} />
        </div>
	)
}

export default withStyles(styles.pages.home)(Home)
