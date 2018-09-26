const updateWindowSize = (window) => dispatch =>
    dispatch({
        type: 'UPDATE_WINDOW_SIZE',
        data: window,
    })

export {
    updateWindowSize,
}
