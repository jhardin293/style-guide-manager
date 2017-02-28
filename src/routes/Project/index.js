import Project from './containers/Project'
import { injectReducer } from '../../store/reducers'
import reducer from './modules/reducers'

export default (store) => {
  injectReducer(store, { key: 'project', reducer })
  const route = {
    path: 'project/:name',
    component : Project,
  }
  return route
}
