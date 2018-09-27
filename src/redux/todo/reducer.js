const initState = {
    task: []
}

export default function taskReducer(state = initState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            if (action.data) {
                return {
                    ...state,
                    task: action.data,
                }
            }
            return state

        case 'REMOVE_TASK':
            if (action.data) {
                return {
                    ...state,
                    task: action.data,
                }
            }
            return state

        case 'RESET_TASK':
            return {
                ...state,
                task: [],
            }

        default:
            return state
    }
}
