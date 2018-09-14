import _ from 'lodash';

const addTask = task => dispatch => dispatch({
    type: 'ADD_TASK',
    data: task,
});

const removeTask = taskID => (dispatch, getState) => {
    const taskList = getState().task;
    return dispatch({
        type: 'REMOVE_TASK',
        data: _.filter(taskList, task => task.id !== taskID),
    });
};

export {
    removeTask,
    addTask,
}
