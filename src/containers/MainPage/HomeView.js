import React, {
    Component,
} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ButtonBase from '@material-ui/core/ButtonBase'
import Carousel from 'nuka-carousel'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import uuid from 'uuid/v1'
import _ from 'lodash'

import {
    AppLang,
    AppConfig,
} from '@internal/constants'
import {
    styles,
} from '@internal/styles'
import {
    Avatar,
    SocialConnect,
    HoverSkillChart,
    ImageGrid,
} from '@internal/ui'
import {
    UtilLib,
} from '@internal/lib'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowWidth: 360,
            worksList: AppConfig.mywork,
            filterForWorkGrid: arg => arg,
            workCategory: 'all',
            guessName: '',
            guessEmail: '',
            guessMessage: '',
        }
    }

    static propTypes = {
        classes: PropTypes.object.isRequired,
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
        window.addEventListener('resize', this.updateWindowHeight)
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.updateWindowHeight)
    }

    updateWindowHeight = e => this.setState({
        windowWidth: e.target.innerWidth,
    })

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

    selectWorkcategory = (category) => {
        const keepAll = arg => arg
        const keepReactWork = arg => _.filter(arg, item => _.findIndex(item.tag, t => t === 'react') !== -1)
        const keepReactNativeWork = arg => _.filter(arg, item => _.findIndex(item.tag, t => t === 'react-native') !== -1)
        this.setState({
            workCategory: category,
        })
        switch (category) {
            case 'react':
                return this.setState({
                    filterForWorkGrid: keepReactWork
                })
            case 'react-native':
                return this.setState({
                    filterForWorkGrid: keepReactNativeWork
                })

            default:
                return this.setState({
                    filterForWorkGrid: keepAll
                })
        }
    }

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
                            {AppLang.content.page.home.skill.map(skill =>
                                <HoverSkillChart
                                    skill={skill}
                                    classes={classes}
                                    key={skill.id}
                                />
                            )}
                        </Grid>
                        <Grid container justify='center' className='marginTop20'>
                            <Grid item sm={6} >
                                <Typography variant='headline' align='center'>
                                    {AppLang.content.page.home.careerTimeline}
                                </Typography>
                                <br />
                                <Typography align='center' variant='display2'>
                                    <ButtonBase disableRipple onClick={() => this.selectWorkcategory('all')}>
                                        <Typography
                                            className={classnames({
                                                'padX5': true,
                                                [`${classes.workCategory}`]: this.state.workCategory === 'all'
                                            })}
                                            variant='display2'
                                        >
                                            {AppLang.content.page.home.badge.all}
                                        </Typography>
                                    </ButtonBase>
                                    {'/'}
                                    <ButtonBase disableRipple onClick={() => this.selectWorkcategory('react-native')}>
                                        <Typography
                                            className={classnames({
                                                'padX5': true,
                                                [`${classes.workCategory}`]: this.state.workCategory === 'react-native'
                                            })}
                                            variant='display2'
                                        >
                                            {AppLang.content.page.home.badge.reactnative}
                                        </Typography>
                                    </ButtonBase>
                                    {'/'}
                                    <ButtonBase disableRipple onClick={() => this.selectWorkcategory('react')}>
                                        <Typography
                                            className={classnames({
                                                'padX5': true,
                                                [`${classes.workCategory}`]: this.state.workCategory === 'react'
                                            })}
                                            variant='display2'
                                        >
                                            {AppLang.content.page.home.badge.react}
                                        </Typography>
                                    </ButtonBase>
                                </Typography>
                                <br />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={false} md={1} />
                </Grid>
                <ImageGrid
                    data={this.state.worksList}
                    filter={this.state.filterForWorkGrid}
                    columnWidth={UtilLib.getItemWidthFromWindowSizeBreakPoint(this.state.windowWidth, {
                        xs: 6, sm: 4, md: 2
                    })}
                />
                <Typography variant='headline' align='center'>
                    {AppLang.content.page.home.careerTimeline}
                </Typography>
                <Grid container justify='center'>
                    <Grid item>
                        <Button
                            className={classes.getInTouchButton}
                            variant='contained'
                        >
                            {AppLang.content.page.home.getInTouch}
                        </Button>
                    </Grid>
                </Grid>
                <div
                    className={classes.contactContainer}
                >
                    <Typography
                        variant='headline'
                        align='center'
                        className={classes.contactMe}
                    >
                        {AppLang.content.page.home.contactMe}
                    </Typography>
                    <Typography
                        variant='body1'
                        align='center'
                        className={classes.contactMeDescription}
                    >
                        {AppLang.content.page.home.contactMeDescription}
                    </Typography>
                    <Grid
                        container
                        alignItems='center'
                        justify='center'
                    >
                        <Grid item xs={false} md={2} />
                        <Grid
                            item
                            xs={12}
                            md={8}
                        >
                            <form
                                noValidate
                                autoComplete='off'
                            >
                                <TextField
                                    className={classes.textField}
                                    label={AppLang.content.page.home.guessName}
                                    placeholder={AppLang.content.page.home.guessNamePlaceholder}
                                    variant='outlined'
                                    value={this.state.guessName}
                                    margin='normal'
                                    fullWidth
                                    disableUnderline
                                    onChange={event => this.setState({
                                        guessName: event.target.value,
                                    })}
                                />
                                <TextField
                                    className={classes.textField}
                                    label={AppLang.content.page.home.guessEmail}
                                    placeholder={AppLang.content.page.home.guessEmailPlaceholder}
                                    variant='outlined'
                                    value={this.state.guessEmail}
                                    margin='normal'
                                    fullWidth
                                    onChange={event => this.setState({
                                        guessEmail: event.target.value,
                                    })}
                                />
                                <TextField
                                    className={classes.textField}
                                    label={AppLang.content.page.home.guessMessage}
                                    placeholder={AppLang.content.page.home.guessMessagePlaceHolder}
                                    variant='outlined'
                                    value={this.state.guessMessage}
                                    margin='normal'
                                    fullWidth
                                    multiline
                                    rows='4'
                                    onChange={event => this.setState({
                                        guessMessage: event.target.value,
                                    })}
                                />
                                <Button
                                    variant='raised'
                                >
                                    {AppLang.content.page.home.submit}
                                </Button>
                            </form>
                        </Grid>
                        <Grid item xs={false} md={2} />
                    </Grid>
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(styles.pages.home)(Home)
