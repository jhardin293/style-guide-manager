import { connect } from 'react-redux'
import { fetchProject, postSection } from '../modules/actions'
import ProjectView from '../components/ProjectView'


const mapStateToProps = (state) => {
  const  project = {
    project: state 
  }
  return project
}

const mapDispatchToProps =  ({
  fetchProject: fetchProject,
  postSection: postSection
})

const Project = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectView)

export default Project