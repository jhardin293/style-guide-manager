import database from '../../../../store/database'

export const fetchProjects = () => {
  return dispatch => {
    database.ref('projects').on('value', snapshot => {
      dispatch({
        type: 'FETCH_PROJECTS',
        payload: (snapshot.val() === null) ? {} : snapshot.val()
      }) 
    })
  }
}
export const addProject = (name) => {
  const project = {
    name
  } 
  return dispatch => {
    const project = {
      name : name,
    }
    database.ref('projects').push(project)
    database.ref('project/' + name).set(project)
  }
}