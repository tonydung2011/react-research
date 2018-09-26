const initState = {
    window: {
        height: window.innerHeight,
        width: window.innerWidth,
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_WINDOW_SIZE':
            if (action.data) {
                return {
                    ...state,
                    window: window,
                }
            }
            return state

        default:
            return state
    }
}
