import colors from '../colors'

export default {
    imgBackground: {
        width: '100%',
    },
    listWrapper: {
        marginTop: 20,
    },
    itemHover: {
        '&:hover': {
            boxShadow: `3px 3px 1px ${colors.shadow}`,
        }
    },
    hoverButton: {
        position: 'fixed',
        zIndex: 100,
        marginBottom: 100,
        marginRight: 50,
        backgroundColor: colors.red,
        borderRadius: '50%',
        padding: 10,
    },
    addIcon: {
        color: colors.white,
    },
    listItemText: {
        primary: {
            title: {
                // fontFamily: 'Roboto',
                fontSize: 22,
                color: colors.primary,
            }
        },
        secondary: {
            body1: {
                // fontFamily: 'Roboto',
                fontSize: 16,
                color: colors.dark,
            }
        }
    }
}
