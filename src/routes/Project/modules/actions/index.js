import database from '../../../../store/database'

export const fetchProject = (name) => {
  return dispatch => {
    console.log(name, 'ay ok')
    database.ref('project/' + name).on('value', snapshot => {
      dispatch({
        type: 'FETCH_PROJECT',
        payload: (snapshot.val() === null) ? {} : snapshot.val()
      }) 
    })
  }
}

export const postSection = (name, description) => {
  return dispatch => {
    const projectData = {
      description: description
    }
    database.ref(`project/${name}/sections`).push(projectData)
  }
}