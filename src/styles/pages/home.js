import {
    AppConfig,
} from '@internal/constants'
import colors from '../colors'

export default theme => ({
    coverImageTop: {
        width: '100%',
        height: window.innerWidth / 1.5,
        minHeight: '60%',
        backgroundImage: `url('${AppConfig.img.homeBackground}')`,
        overflow: 'hidden',
        backgroundSize: 'cover',
    },
    infoContainer: {
        marginTop: window.innerHeight / 6,
    },
    nameTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 30,
        color: colors.white,
        textAlign: 'center',
        fontWeight: 400,
    },
    roleTitle: {
        fontFamily: 'Montserrat',
        fontSize: 20,
        color: colors.white,
        textAlign: 'center',
        fontWeight: 300,
    },
    socialConnectWrapper: {
        width: 180,
        margin: 'auto',
        marginTop: '20px',
        marginBottom: '50px',
    },
    buttonHireMe: {
        backgroundColor: colors.primary,
        color: 'white',
        paddingTop: '12px',
        paddingBottom: '12px',
        paddingLeft: '40px',
        paddingRight: '40px',
        '&:hover': {
            color: colors.primary,
        }
    },
    buttonMyWork: {
        backgroundColor: colors.transparent,
        borderColor: colors.white,
        color: 'white',
        paddingTop: '12px',
        paddingBottom: '12px',
        paddingLeft: '40px',
        paddingRight: '40px',
    },
    carouselItem: {
        paddingBottom: 50,
        paddingLeft: 50,
        paddingRight: 50,
    },
    centerNumber: {
        position: 'relative',
        zIndex: 4,
        textAlign: 'center',
        bottom: 110,
        fontWeight: 'Bold',
        color: colors.white,
    },
    skillTitle: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        textAlign: 'center',
    },
    chartSkillWrapper: {
        width: 200,
        height: 200,
        borderRadius: '50%',
        margin: 'auto',
    },
    workCategory: {
        color: colors.primaryDark,
    },
    renderMyWork: {
        padding: 1,
        display: 'flex',
    },
    imgMyWork: {
        flex: 1,
    },
    getInTouchButton: {
        marginTop: '40px',
        marginBottom: '20px',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '5px',
        paddingBottom: '5px',
        backgroundColor: colors.primary,
        color: colors.white,
        '&:hover': {
            backgroundColor: colors.primaryHighlight
        }
    },
    contactContainer: {
        backgroundImage: `url('${AppConfig.img.contactBackground}')`,
        paddingTop: '40px',
        paddingBottom: '40px',
        backgroundPosition: '50% 30%',
        backgroundRepeat: 'no-repeat',
        marginTop: '200px',
    },
    contactMe: {
        color: colors.white,
    },
    contactMeDescription: {
        color: colors.white,
    },
    textField: {
        paddingBottom: '5px',
    },
    textFieldInput: {
        color: colors.white,
    },
    textFieldLabel: {
        color: colors.white,
        '&$formLabelFocused': {
            color: colors.white,
        },
    },
    formLabelFocused: {
        color: colors.white,
    },
    textFieldBottomLine: {
        borderBottom: `0.5px solid ${colors.white}`,
        '&:focus': {
            borderBottom: `1px solid ${colors.white}`,
        },
        '&:hover': {
            borderBottom: `1px solid ${colors.white}`,
        }
    }
})
