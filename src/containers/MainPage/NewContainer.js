import {
    connect,
} from 'react-redux'
import * as ToDoActions from '@internal/redux/todo/actions'
import NewView from './NewView'

const mapStateToProps = () => ({

})

const mapDispatchToProps = {
    addNewTask: ToDoActions.addTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewView)
