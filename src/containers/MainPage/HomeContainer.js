import {
    connect,
} from 'react-redux'
import HomeView from './HomeView'

const mapStateToProps = state => ({
    taskList: state.task.task,
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
