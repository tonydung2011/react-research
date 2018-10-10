const initState = {
    projects: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'GET_PROJECT_LIST':
            if (action.data) {
                return {
                    ...state,
                    projects: action.data,
                }
            }
            return state

        default:
            return state
    }
}
