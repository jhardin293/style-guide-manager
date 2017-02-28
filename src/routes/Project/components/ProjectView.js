import React, { Component } from 'react'
import './ProjectView.scss'
import { connect } from 'react-redux'
// import { addProject } from '../modules/actions'

class ProjectView extends Component {
  componentWillMount () {
    this.props.fetchProject(this.props.params.name)
    // console.log(this.props.project.project.project.sections, 'props')
    // console.log(test)
  }
  
  render() {
    const projectName = this.props.params.name
    let input
    return (
      <div>
        <div>{projectName} project details</div>
        <form onSubmit={ e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          this.props.postSection(projectName, input.value)
          input.value = ''
        }}>
          <input type="text" ref={node => {
            input = node
          }}/>
          <button type="submit">Add Description</button>
        </form>
      </div>
    )
  }
}

export default ProjectView
