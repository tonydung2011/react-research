import {
    connect,
} from 'react-redux'
import HomeView from './HomeView'

const mapStateToProps = state => ({
    projects: state.project.projects,
    skills: state.skill.skills,
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
