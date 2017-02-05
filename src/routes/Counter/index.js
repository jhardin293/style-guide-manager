import { injectReducer } from '../../store/reducers'
/*
  Goal: Export Counter route
  1. Define react router path
  2. Import actions
  3. Import reducers
  4. inject reducer to be add to store
*/

export default (store) => ({
  path : 'counter',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Counter = require('./containers/CounterContainer').default
      // actions
      const reducer = require('./modules/counter').default
      // reducers

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'counter', reducer })

      /*  Return getComponent   */
      cb(null, Counter)
    /* Webpack named bundle   */
    }, 'counter')
  }
})
