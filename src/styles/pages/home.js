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
        marginTop: '20%',
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
        marginTop: '20px',
        marginBottom: '40px',
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
        backgroundImage: `url('${AppConfig.img.contactBackground}')`
    },
    contactMe: {
        color: colors.white,
    },
    contactMeDescription: {
        color: colors.white,
    },
    textField: {
        color: colors.white,
        paddingBottom: '10px',
        backgroundColor: colors.white,
    }
})
