// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import Project from './Project'
/*
  Goal:  Export the initilized main app wrapper, first loaded component and childRouts
  1. Define core layout
  2. Define index route
  3. Define child routes
*/

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout, // App main layout component
  indexRoute  : Home(store), // First loaded component
  childRoutes : [
    Project(store)
  ]
})

export default createRoutes
