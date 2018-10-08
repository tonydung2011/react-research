import React, {
    Component,
} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {
    RadialChart,
} from 'react-vis'
import Button from '@material-ui/core/Button'
import Carousel from 'nuka-carousel'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import uuid from 'uuid/v1'
import pose from 'react-pose'

import {
    AppConfig,
    AppLang,
} from '@internal/constants'
import {
    styles, colors,
} from '@internal/styles'
import {
    Avatar,
    SocialConnect,
} from '@internal/ui'

const ChartHoverWrapper = pose.div({
    hoverable: true,
    init: {
        backgroundColor: colors.primary,
    },
    hover: {
        backgroundColor: colors.secondaryHighlight,
    }
})

const ChartSkillItemContainer = pose.div({
    hoverable: true,
})

const HoverText = pose.h4({
    hoverable: true,
    init: {
        color: colors.dark,
    },
    hover: {
        color: colors.secondaryHighlight,
    }
})

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
        const temp = {}
        AppLang.content.page.home.skill.forEach((skill) => {
            Object.defineProperty(temp, skill.id, {
                value: false,
                writable: true,
            })
        })
        this.setState({
            skilChart: temp
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

    renderCareerTimePoint = (timePoint, classes) => (
        <div key={uuid()} className={classnames(classes.carouselItem)}>
            <Typography variant='subheading' align='center'>
                {timePoint.title}
            </Typography>
            <Typography variant='body1' align='center'>
                <i>{timePoint.company}</i>, {timePoint.duringTime}
            </Typography>
            <br />
            <Typography variant='body2' align='center'>
                {timePoint.description}
            </Typography>
        </div>
    )

    renderSkillChart = (skill, classes) => (
        <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={skill.id}
        >
            <ChartSkillItemContainer className='pad15'>
                <ChartHoverWrapper className={classes.chartSkillWrapper}>
                    <RadialChart
                        data={skill.chart}
                        width={200}
                        height={200}
                        innerRadius={80}
                        radius={90}
                        colorType='literal'
                    />
                </ChartHoverWrapper>
                <Typography variant='subheading' align='center' className={classnames(classes.centerNumber)}>
                    {skill.number}
                </Typography>
                <HoverText className={classes.skillTitle}>
                    {skill.title}
                </HoverText>
                <Typography variant='body2' align='center'>
                    {skill.description}
                </Typography>
            </ChartSkillItemContainer>
        </Grid>
    )

	render = () => {
        const { classes } = this.props
        return (
            <React.Fragment>
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
                        <Grid
                            container
                            spacing={32}
                            direction='row'
                            justify='center'
                        >
                            <Grid item >
                                <SocialConnect
                                    provider='facebook'
                                />
                            </Grid>
                            <Grid item >
                                <SocialConnect
                                    provider='gmail'
                                />
                            </Grid>
                            <Grid item >
                                <SocialConnect
                                    provider='linkedin'
                                />
                            </Grid>
                        </Grid>
                        <div className='marginTop40' >
                            <Grid
                                container
                                direction='row'
                                spacing={40}
                                justify='center'
                            >
                                <Grid item>
                                    <Button className={classes.buttonHireMe} variant='contained'>
                                        {AppLang.content.page.home.hireme}
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button className={classes.buttonMyWork} variant='outlined'>
                                        {AppLang.content.page.home.mywork}
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
                <Grid
                    container
                >
                    <Grid item xs={false} md={1} />
                    <Grid item xs={12} md={10} >
                        <Grid container justify='center' className='marginTop40'>
                            <Grid item sm={6} >
                                <Typography variant='headline' align='center'>
                                    {AppLang.content.page.home.careerTimeline}
                                </Typography>
                                <br />
                                <Typography variant='body2' align='center'>
                                    {AppLang.content.page.home.careerDescription}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify='center' className={classnames('marginTop40')} >
                            <Grid item sm={10}>
                                <Carousel
                                    autoplay
                                    pauseOnHover
                                    wrapAround
                                    transitionMode='scroll'
                                    autoplayInterval={3000}
                                    speed={1000}
                                    cellAlign='center'
                                    initialSlideHeight={150}
                                    autoGenerateStyleTag={false}
                                    easing='easeQuadInOut'
                                >
                                    {AppLang.content.page.home.career.map(item => this.renderCareerTimePoint(item, classes))}
                                </Carousel>
                            </Grid>
                        </Grid>
                        <Grid container justify='center' className='marginY40'>
                            <Grid item sm={6} >
                                <Typography variant='headline' align='center'>
                                    {AppLang.content.page.home.careerTimeline}
                                </Typography>
                                <br />
                                <Typography variant='body2' align='center'>
                                    {AppLang.content.page.home.careerDescription}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify='center' className='marginTop40' spacing={16}>
                            {AppLang.content.page.home.skill.map(skill => this.renderSkillChart(skill, classes))}
                        </Grid>
                        <h3>cjgskfjhgksdfjhgskdjhfgksjhglkdjfhg</h3>
                    </Grid>
                    <Grid item xs={false} md={1} />
                </Grid>
            </React.Fragment>
        )
    }
}

export default withStyles(styles.pages.home)(Home)
