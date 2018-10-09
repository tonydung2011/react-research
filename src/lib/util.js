import _ from 'lodash'
import {
    AppConfig
} from '@internal/constants'

const getItemWidthFromWindowSizeBreakPoint = (windowWidth, ratioArg = {}) => {
    const breakPoint = ['xs', 'sm', 'md', 'lg', 'xl']
    const ratio = {
        xs: 12, sm: 6, md: 4, lg: 3, xl: 2
    }
    _.each(breakPoint, (br, index) => {
        if (ratioArg[br]) {
            ratio[br] = ratioArg[br]
        } else {
            ratio[br] = ratio[breakPoint[index - 1]]
        }
    })
    if (windowWidth > AppConfig.windowBreakpoint.xl) {
        return windowWidth * ratio.xl / 12
    }
    if (windowWidth > AppConfig.windowBreakpoint.lg) {
        return windowWidth * ratio.lg / 12
    }
    if (windowWidth > AppConfig.windowBreakpoint.md) {
        return windowWidth * ratio.md / 12
    }
    if (windowWidth > AppConfig.windowBreakpoint.sm) {
        return windowWidth * ratio.sm / 12
    }
    return windowWidth * ratio.xs / 12
}

export default {
    getItemWidthFromWindowSizeBreakPoint
}
