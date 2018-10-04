import colors from '../colors'

export default theme => ({
    coverImageTop: {
        width: '100%',
        height: window.innerWidth / 1.5,
        minHeight: '60%',
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/react-portfolio-fe7fb.appspot.com/o/portfolio-background%20(1).jpg?alt=media&token=1af6b5ec-6ad1-4ab3-9f6c-3b9a60891429")',
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
    }
})
