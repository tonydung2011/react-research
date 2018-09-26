import {
    connect,
} from 'react-redux'
import HomeView from './HomeView'

const mapStateToProps = state => ({
    todoList: state.task,
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
