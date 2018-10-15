const initState = {
    skills: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'GET_SKILL_LIST':
            if (action.data) {
                return {
                    ...state,
                    skills: action.data,
                }
            }
            return state

        default:
            return state
    }
}
