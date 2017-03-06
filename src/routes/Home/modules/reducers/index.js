import { combineReducers } from 'redux'
import projects from './projects'

const homeView = combineReducers({
  projects
})

export default homeView
