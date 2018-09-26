const initState = {
    open: false,
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'TOGGLE_DRAWER':
            return {
                ...state,
                open: !state.open,
            }

        default:
            return state
    }
}
