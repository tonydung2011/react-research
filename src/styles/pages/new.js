import colors from '../colors'

export default {
    pageContainer: {
        marginTop: 40,
    },
    formWrapper: {
        backgroundColor: colors.white,
        boxShadow: `0 3px 5px 2px ${colors.shadow}`,
    },
    button: {
        backgroundColor: colors.primary,
        minWidth: 80,
        marginTop: 20,
        color: colors.white,
        '&:hover': {
            backgroundColor: colors.primaryHighlight,
        }
    }
}
