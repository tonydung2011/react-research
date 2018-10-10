import {
    connect,
} from 'react-redux'
import HomeView from './HomeView'

const mapStateToProps = state => ({
    projects: state.project.projects,
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
