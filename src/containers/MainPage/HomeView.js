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
} from '@internal/constants'
import {
    styles,
} from '@internal/styles'
import {
    Avatar,
    SocialConnect,
    HoverSkillChart,
    ImageGrid,
    CenterWrapper,
} from '@internal/ui'
import {
    UtilLib,
} from '@internal/lib'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowWidth: 360,
            filterForWorkGrid: arg => arg,
            workCategory: 'all',
            guessName: '',
            guessEmail: '',
            guessMessage: '',
        }
    }

    static propTypes = {
        classes: PropTypes.object.isRequired,
        projects: PropTypes.array.isRequired,
        skills: PropTypes.array.isRequired,
    }

    static defaultProps = {
        toggleDrawer: () => {},
        history: {},
        projects: [],
        skills: [],
    }

    componentDidMount = () => {
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
                            <Grid item >
                                <SocialConnect
                                    provider='skype'
                                />
                            </Grid>
                            <Grid item >
                                <SocialConnect
                                    provider='github'
                                />
                            </Grid>
                        </Grid>
                        <div className='marginTop80' >
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
                <Grid container >
                    <Grid item xs={false} md={1} />
                    <Grid item xs={12} md={10} >
                        <CenterWrapper container justify='center' className='marginY80 padX15'>
                            <React.Fragment>
                                <Typography variant='headline' align='center'>
                                    {AppLang.content.page.home.careerTimeline}
                                </Typography>
                                <br />
                                <Typography variant='body2' align='center'>
                                    {AppLang.content.page.home.careerDescription}
                                </Typography>
                            </React.Fragment>
                        </CenterWrapper>
                        <Grid container justify='center' className={classnames('marginY80')} >
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
                        <CenterWrapper className='marginY80 padX15'>
                            <React.Fragment>
                                <Typography variant='headline' align='center'>
                                    {AppLang.content.page.home.skillHeadline}
                                </Typography>
                                <br />
                                <Typography variant='body2' align='center'>
                                    {AppLang.content.page.home.skillDescription}
                                </Typography>
                            </React.Fragment>
                        </CenterWrapper>
                        <Grid container justify='center' className='marginTop80 padX15' spacing={16}>
                            {this.props.skills.map(skill =>
                                <Grid item xs={12} sm={6} md={3} key={skill.id}>
                                    <HoverSkillChart
                                        skill={skill}
                                        classes={classes}
                                    />
                                </Grid>
                            )}
                        </Grid>
                        <CenterWrapper className='marginY40'>
                            <React.Fragment>
                                <Typography variant='headline' align='center'>
                                    {AppLang.content.page.home.projectHeadline}
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
                            </React.Fragment>
                        </CenterWrapper>
                    </Grid>
                    <Grid item xs={false} md={1} />
                </Grid>
                <ImageGrid
                    data={this.props.projects}
                    filter={this.state.filterForWorkGrid}
                    columnWidth={UtilLib.getItemWidthFromWindowSizeBreakPoint(this.state.windowWidth, {
                        xs: 12, sm: 6, md: 3, lg: 2,
                    })}
                />
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
                    <br />
                    <Grid
                        container
                        spacing={32}
                        direction='row'
                        justify='center'
                    >
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
                        <Grid item >
                            <SocialConnect
                                provider='skype'
                            />
                        </Grid>
                    </Grid>
                    <br />
                    <Typography
                        variant='body1'
                        align='center'
                        className={classes.contactMeDescription}
                    >
                        {AppLang.content.page.home.bookMeeting}
                    </Typography>
                    <Grid
                        container
                        alignItems='center'
                        justify='center'
                    >
                        <Grid item xs={2} md={4} />
                        <Grid
                            item
                            xs={8}
                            md={4}
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
                                    onChange={event => this.setState({
                                        guessName: event.target.value,
                                    })}
                                    InputProps={{
                                        className: classes.textFieldInput,
                                        classes: {
                                            underline: classes.textFieldBottomLine,
                                        }
                                    }}
                                    InputLabelProps={{
                                        FormLabelClasses: {
                                            root: classes.textFieldLabel,
                                            focused: classes.formLabelFocused,
                                        }
                                    }}
                                />
                                <TextField
                                    className={classes.textField}
                                    label={AppLang.content.page.home.guessEmail}
                                    placeholder={AppLang.content.page.home.guessEmailPlaceholder}
                                    value={this.state.guessEmail}
                                    margin='normal'
                                    fullWidth
                                    onChange={event => this.setState({
                                        guessEmail: event.target.value,
                                    })}
                                    InputProps={{
                                        className: classes.textFieldInput,
                                        classes: {
                                            underline: classes.textFieldBottomLine,
                                        }
                                    }}
                                    InputLabelProps={{
                                        FormLabelClasses: {
                                            root: classes.textFieldLabel,
                                            focused: classes.formLabelFocused,
                                        }
                                    }}

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
                                    rows='6'
                                    onChange={event => this.setState({
                                        guessMessage: event.target.value,
                                    })}
                                    InputProps={{
                                        className: classes.textFieldInput,
                                        classes: {
                                            underline: classes.textFieldBottomLine,
                                        }
                                    }}
                                    InputLabelProps={{
                                        FormLabelClasses: {
                                            root: classes.textFieldLabel,
                                            focused: classes.formLabelFocused,
                                        }
                                    }}
                                />
                                <CenterWrapper>
                                    <Button
                                        variant='raised'
                                        className={classes.getInTouchButton}
                                    >
                                        {AppLang.content.page.home.submit}
                                    </Button>
                                </CenterWrapper>
                            </form>
                        </Grid>
                        <Grid item xs={2} md={4} />
                    </Grid>
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(styles.pages.home)(Home)
