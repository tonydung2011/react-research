import colors from '../colors'

export default {
    coverImageTop: {
        width: '100%',
        height: window.innerWidth / 1.5,
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/react-portfolio-fe7fb.appspot.com/o/portfolio-background%20(1).jpg?alt=media&token=1af6b5ec-6ad1-4ab3-9f6c-3b9a60891429")',
        overflow: 'hidden',
        backgroundSize: 'cover',
    },
    infoContainer: {
        marginTop: '20%',
    },
    nameTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 30,
        color: colors.white,
        textAlign: 'center',
        fontWeight: 400,
    },
    roleTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        color: colors.white,
        textAlign: 'center',
        fontWeight: 300,
    },
}
