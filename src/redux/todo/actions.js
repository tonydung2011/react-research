import _ from 'lodash'

const addTask = task => (dispatch, getState) => {
    const taskList = getState().task.task
    return dispatch({
        type: 'ADD_TASK',
        data: [
            ...taskList,
            task,
        ],
    })
}

const removeTask = taskID => (dispatch, getState) => {
    const taskList = getState().task.task
    return dispatch({
        type: 'REMOVE_TASK',
        data: _.filter(taskList, task => task.id !== taskID),
    })
}

export {
    removeTask,
    addTask,
}
