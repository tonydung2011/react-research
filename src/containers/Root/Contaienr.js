import {
    connect,
} from 'react-redux'
import * as ProjectActions from '@internal/redux/project/actions'
import Root from './View'

const mapStateToProps = () => ({})
const mapDispatchToProps = {
    getProjectList: ProjectActions.getProjectList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
