import { connect } from 'react-redux'
import { fetchProjects } from '../modules/actions'
import ProjectList from '../components/ProjectList'


const mapStateToProps = (state) => {
  console.log(state, 'state')
  const  projects = {
    projects: state
  }
  return projects
}

const mapDispatchToProps =  ({
  fetchProjects: fetchProjects
})

const VisibleProjectlist = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList)

export default VisibleProjectlist
