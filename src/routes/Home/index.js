import HomeView from './components/HomeView'
import { injectReducer } from '../../store/reducers'
import reducer from './modules/reducers'

export default (store) => {
  injectReducer(store, { key: 'projects', reducer })
  const route = {
    component : HomeView

  }
  return route
}
