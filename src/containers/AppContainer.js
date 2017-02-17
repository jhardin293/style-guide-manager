import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
/*
  Goal: Export main AppContainer component
  1. Set static PropTypes (for strong types)
  2. render
*/

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props
    return (
      /* 
        - A provider gives all componets access to the store
        - The router's settings are configrued by its props
        -  How does the Router get access to the store?
           - The Router gets access to the store by being a chilld
           of the provider. So internall routes can make a call to the store by using connect() 
        - children={routes} evaluate to <Route path="/urlPath" component={componentToRender} />...
      */
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={routes} />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
