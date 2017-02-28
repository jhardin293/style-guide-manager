import React from 'react'
import './HomeView.scss'
import { connect } from 'react-redux'
import { addProject } from '../modules/actions'
// import ProjectList from './ProjectList'
import VisibleProjects from '../containers/VisibleProjects'

let HomeView = ({ dispatch }) => {
  let input
  return (
    <div>
      <form onSubmit={ e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addProject(input.value))
        input.value = ''
      }}>
        <input type="text" ref={node => {
          input = node
        }}/>
        <button type="submit">Add Project</button>
      </form>
      <VisibleProjects />
    </div>
  )
}
HomeView = connect()(HomeView)

export default HomeView
