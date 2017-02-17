import TodoView from './components/TodoView'
import { injectReducer } from '../../store/reducers'
import reducer from './modules/reducers'

export default (store) => {
 injectReducer(store, { key: 'todos', reducer })
  let route = {
    path: 'todos',
    component: TodoView
  }
  return route;
}