import React, { PropTypes, Component } from 'react'
import Project from './Project'

class ProjectList extends Component {
  componentWillMount() {
    this.props.fetchProjects()
  }

  render() {
    // const { projects, onProjectClick } = this.props
    console.log(this.props, 'props');
    const projects = this.props.projects.projects.projects
    return (
      <ul>
        {Object.keys(projects).map(project =>
          <Project
            key={project}
            {...projects[project]}
          />
        )}
      </ul>
    )
  }
}

export default ProjectList
