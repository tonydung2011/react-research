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
import CardHeader from '@material-ui/core/CardHeader'
import TocIcon from '@material-ui/icons/toc'

import PropTypes from 'prop-types'

import NavBar from '@internal/containers/ui/NavBarContainer'
import {
    AppLang, AppConfig,
} from '@internal/constants'
import {
    styles,
} from '@internal/styles'
import {
    ListenerLib,
} from '@internal/lib'
import {
    HoverAddButton,
} from '@internal/ui';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskList: [
                {
                    title: 'Bob',
                    text: 'hi, what your name?',
                    id: '1',
                },
                {
                    title: 'Laura',
                    text: 'hello',
                    id: '2',
                }
            ],
            usingCardItem: window.innerWidth > 600,
        }
    }

    static propTypes = {
        taskList: PropTypes.array.isRequired,
        classes: PropTypes.object.isRequired,
    }

    static defaultProps = {
        taskList: [],
    }

    componentDidMount = () => {
        // this.setState({
        //     taskList: this.props.taskList,
        // })
        ListenerLib.windowResizeListener(({ width }) => {
                this.setState({
                usingCardItem: width > 600,
            })
        })
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.taskList !== this.props.taskList) {
            this.setState({
                taskList: nextProps.taskList,
            })
        }
    }

    renderItem = item => {
        const itemRef = React.createRef()
        return (
            <Grid
                item
                xs={12}
                sm={4}
                key={item.id}
            >
                {
                    this.state.usingCardItem ? (
                        <Card
                            ref={itemRef}
                            className={this.props.classes.itemHover}
                        >
                            <CardHeader>
                                {item.id}
                            </CardHeader>
                            <CardContent>
                                {item.text}
                            </CardContent>
                        </Card>
                    ) : (
                        <ListItem
                            button
                            className={this.props.classes.listItemContainer}
                        >
                            <ListItemIcon
                                className={this.props.classes.listItemIcon}
                            >
                                <TocIcon />
                            </ListItemIcon>
                            <ListItemText
                                className={this.props.classes.listItemText}
                            >
                                {item.text}
                            </ListItemText>
                        </ListItem>
                    )
                }
            </Grid>
        )
    }

	render = () => (
        <div>
            <NavBar title={AppLang.content.page.home.title} />
            <Grid
                container
            >
                <Grid item xs={false} md={2} />
                <Grid
                    item
                    xs={12}
                    md={8}
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
                        {this.state.taskList.map(this.renderItem)}
                    </Grid>
                </Grid>
                <Grid item xs={false} md={2} />
            </Grid>
            <HoverAddButton />
        </div>
	)
}

export default withStyles(styles.pages.home)(Home)
