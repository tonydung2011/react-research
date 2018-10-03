import colors from './colors'
import {
    createMuiTheme,
} from '@material-ui/core/styles'

export default createMuiTheme({
    palette: {
        primary: {
            light: colors.primaryHighlight,
            main: colors.primary,
            dark: colors.primaryDark,
        },
        secondary: {
            light: colors.secondaryHighlight,
            main: colors.secondary,
            dark: colors.secondaryDark,
        }
    },
    typography: {
        title: {
            color: colors.primary,
        },
        subheading: {
            color: colors.primaryHighlight,
        },
        headline: {
            // standard font for headline of each section
            color: colors.secondary,
        },
        display1: {
            // represent for title of an ListItemText
            fontSize: '20px',
            fontWeight: 400,
            fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
            lineHeight: '1.20588em',
            color: colors.primaryHighlight,
        },
        display2: {

        },
        display3: {

        },
        display4: {

        },
        body1: {
            // represent for standard text body
            fontSize: '14px',
            fontWeight: 300,
            fontFamily: 'Roboto',
            lineHeight: '1.20588em',
            color: colors.dark,
        },
        body2: {
            // represent for standard text body with lighter color
            fontSize: '14px',
            fontWeight: 300,
            fontFamily: 'Roboto',
            lineHeight: '1.20588em',
            color: colors.grey,
        },
        caption: {
            // standard font for image's caption
        },
        button: {
            // standard font for button text
        },
    }
})
