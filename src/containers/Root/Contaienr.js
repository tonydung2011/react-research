import {
    connect,
} from 'react-redux'
import * as ProjectActions from '@internal/redux/project/actions'
import * as SkillActions from '@internal/redux/skill/actions'
import Root from './View'

const mapStateToProps = () => ({})
const mapDispatchToProps = {
    getProjectList: ProjectActions.getProjectList,
    getSkillsList: SkillActions.getSkillsList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
